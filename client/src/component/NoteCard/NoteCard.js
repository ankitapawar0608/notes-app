import React from 'react'
import "./Note.css"

function NoteCard({ _id, title, content, category }) {
  return (
    <div>

      <div className='note-card'>
      <h3 className='note-card-title'>{title}</h3>
      <p className='note-card-content'>{content}</p>
      <span className='note-card-category'>{category}</span>


      </div>

    </div>
  )
}

export default NoteCard