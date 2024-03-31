import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;



app.get("/health", (req, res) => {
    res.json({
        success: true,
        message: "Server is running",
        data: null
    })
});

app.post("/notes", (req, res) => {

    const { title, content, category } = req.body;

    const newNote = {
        title,
        content,
        category
    }



    res.json({
        success:true,
        message:"Notes added",
        data: newNote
    })

})

app.get("/notes",(req,res)=>{
    res.json({
        success:true,
        message:"Notes fetched successfully",
        data:[]
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})