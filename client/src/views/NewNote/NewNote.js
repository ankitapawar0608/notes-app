import React, { useState } from 'react'
import "./NewNote.css"
import axios from "axios";
import toast from 'react-hot-toast';

function NewNote() {

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');

  const addNote = async () => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/notes`,
      {
        title: title,
        category: category,
        content: content
      })
      

     toast.success(response.data.message)
    setTitle('')
    setCategory('')
    setContent('')
  }
  return (
    <div>
      <h1 className='app-header text-light m-3'>
        NewNote
      </h1>
      <div className="row d-flex justify-content-center">
      <form className='form m-5 p-3 bg-white w-50 rounded'>
        <div className='m-4'>


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
              onClick={addNote}
              className=' btn btn-secondary text-center'
            >
              Save
            </button>
          </div>
        </div>
      </form>
      </div>

    </div>
  )
}

export default NewNote