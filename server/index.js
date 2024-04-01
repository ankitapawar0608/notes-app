import express from "express";
import cors from "cors";
import mongoose, { model, Schema } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URL)
    

}

connectDB();

const PORT = 5000;

const noteSchema = new Schema({
    title: String,
    content: String,
    category: String
})

const Note = model("Note", noteSchema);

//TO create
app.post("/notes", async (req, res) => {
    const { title, content, category } = req.body;

    const newNote = await Note.create({
        "title": title,
        "content": content,
        "category": category
    })
    res.json({
        success: true,
        message: "Notes added",
        data: newNote
    })
})

//TO read

app.get("/notes", async (req, res) => {
    const notes = await Note.find();
    res.json({
        success: true,
        message: "Notes fetched successfully",
        data: notes
    })
})

//To read One

app.get("/notes/:id", async (req, res) => {
    const { id } = req.params;
    const note = await Note.findOne({
        _id: id
    })
    res.json({
        success: true,
        message: "Notes fetched successfully",
        data: note
    })
})


//TO update data

app.put("/notes/:id", async (req, res) => {
    const { id } = req.params;

    const { title, content, category } = req.body;
    await Note.updateOne(
        { _id: id }, {
            $set: {
                title: title,
                content: content,
                category: category
            }
    })

    res.json({
        success: true,
        message: "Notes updated successfully",
        data: null
    })
})

//To delete
app.delete("/notes/:id", async (req, res) => {
    const { id } = req.params;

    await Note.deleteOne({ _id: id })

    res.json({
        success: true,
        message: "Notes deleted successfully",
        data: null
    })


})



////////////////////////////d

app.get("/health", (req, res) => {
    res.json({
        success: true,
        message: "Server is running",
        data: null
    })
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})