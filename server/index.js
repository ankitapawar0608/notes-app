import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose  from "mongoose";
dotenv.config();

import Note from "./model/Note.js"

const app = express();
app.use(cors());
app.use(express.json());

const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URL)
    
}

connectDB();

const PORT = process.env.PORT || 5000;


//TO create
app.post("/notes", async (req, res) => {
    const { title, content, category } = req.body;

    if (!title){
        return res.json({
            success: false,
            message: "Title is required",
            data: null
        })
    }

    if (!content){
        return res.json({
            success: false,
            message: "Content is required",
            data: null
        })
    }

    if (!category){
        return res.json({
            success: false,
            message: "Category is required",
            data: null
        })
    }

    



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

    const note = await Note.findById(id);
    // const note = await Note.findOne({
    //     _id: id
    // })

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