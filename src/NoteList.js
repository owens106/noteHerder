import React from 'react'

import './NoteList.css'
import Note from './Note'

const NoteList = () => {
  const notes=[
    {
      id: 1,
      title: 'js Thoughs',
      body: 'cool bean',
    },
    {
      id: 2,
      title: 'Breakfast',
      body: 'FOR',
    },
    {
      id: 3,
      title: 'gg no re',
      body: 'radical dude',
    }

  ]
  return (
    <div className="NoteList">
      <h3>Notes</h3>
      <ul id="notes">
        {notes.map(note => <Note key={note.id} note={note} />)}  
      
      </ul>
    </div>
  )
}

export default NoteList