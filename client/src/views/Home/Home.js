import React, { useState, useEffect } from 'react'
import axios from "axios";
import "./Home.css"

function Home() {
    const [notes, setNotes] = useState([])

    const loadNotes = async () => {
        const response = await axios.get('http://localhost:5000/notes');
        setNotes(response.data.data);
    }

    useEffect(() => {
        loadNotes();
    }, [])

    return (
        <div>
            <h1>Home</h1>
            {
                notes.map((note, index)=>{
                   return(
                    <div>
                        <h3>{note.title}</h3>
                        <h3>{note.content}</h3>
                        <h3>{note.category}</h3>
                    </div>
                   )
                })
            }
        </div>
    )
}

export default Home