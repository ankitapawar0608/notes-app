import React, { useState ,useEffect} from 'react'
import "./UpdateNote.css"
import axios from "axios";
import toast from 'react-hot-toast';
import {useParams} from "react-router-dom";

function NewNote() {

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');

  const loadNote = async (id) => {
    if(!id) return

    const response = await axios.get(`${process.env.REACT_APP_API_URL}/notes/${id}`)

    setTitle(response.data.data.title)
    setCategory(response.data.data.category)
    setContent(response.data.data.content)
  }
  
  const updateNote = async () => {
    const response = await axios.put(`${process.env.REACT_APP_API_URL}/notes/${id}`, {
      title: title,
      category: category,
      content: content
    })

    toast.success(response.data.message)

    window.location.href = '/'
  }

  const {id} = useParams()

  useEffect(()=>{
    loadNote(id)
  }, [id])


  return (
    <div>
      <h1 className='app-header text-light m-3'>
       Update Note
      </h1>
      <div className="row d-flex justify-content-center">
      <form className='form m-5 p-3 bg-white w-50 rounded'>
        <div className='m-4'>

        <input type='text'
          value={id}
          disabled
          className='input-id'
          />


          <input type='text'
            placeholder="Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
            className='form-control my-3'
          />

          <select value={category}
            onChange={(e) => {
              setCategory(e.target.value)
            }}
            className=' form-control my-3'>
            <option value="">Select a category</option>
            <option value="general">General</option>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            <option value="learning">Learning</option>
            <option value="other">Other</option>
          </select>

          <input type='text'
            placeholder="Content"
            value={content}
            className=' form-control my-3'
            onChange={(e) => {
              setContent(e.target.value)
            }} />

          <div className='text-center'>
            <button
              type='button'
              onClick={updateNote}
              className=' btn btn-secondary text-center'
            >
              Update
            </button>
          </div>
        </div>
      </form>
      </div>

    </div>
  )
}

export default NewNote