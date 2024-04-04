import React, { useState, useEffect } from 'react'
import axios from "axios";
import "./Home.css"
import NoteCard from '../../component/NoteCard/NoteCard';
import { Link } from 'react-router-dom';

function Home() {
    const [notes, setNotes] = useState([])

    const loadNotes = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/notes`);
        setNotes(response.data.data);
    }

    useEffect(() => {
        loadNotes();
    }, [])

    return (
        <div>
            <h1 className='text-center text-light m-5'>All Notes</h1>
            <div className='text-center'>
            <Link to={`/new`}>
                <button className='text-center btn btn-light mb-3'>Add New Note</button>
            </Link>
            </div>
            {
                notes.map((note) => {
                    const { _id, title, content, category } = note
                    return (
                        <NoteCard key={_id} _id={_id} title={title} content={content}
                            category={category} loadNotes={loadNotes} />
                    )
                })
            }
        </div>
    )
}

export default Home