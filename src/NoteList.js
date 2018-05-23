import React from 'react'

import './NoteList.css'
import Note from './Note'

const NoteList = () => {
  const notes=[1,2,3,4,5,6]
  return (
    <div className="NoteList">
      <h3>Notes</h3>
      <ul id="notes">
        {notes.map(note => <Note />)}  
      
      </ul>
    </div>
  )
}

export default NoteList