import React from 'react'
import "./Note.css"

function NoteCard({ _id, title, content, category }) {
  return (
    <div className='container'>

     
      <div className="card card-style mx-5 m-4" >
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{content}</h6>
          <p className="card-text">{category}</p>
          
        </div>
      </div>
    </div>

   
  )
}

export default NoteCard