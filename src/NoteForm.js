import React, {Component} from 'react'

import './NoteForm.css'

const NoteForm = ({ currentNote, saveNote,deleteCurrentNote }) => {
  const handleChanges = (ev) => {
    const note = {...currentNote}
    
    note[ev.target.name] = ev.target.value
    //note[ev.target.name] = ev.target.value
    saveNote(note)
  }

   
  

  return (
    <div className="NoteForm">
      <div className="form-actions">
        <button type="button" onClick={deleteCurrentNote}>
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
      <form>
        
        <p
          name='timeStamp'
          value={Date.now()}
        >
          <p>
            <input
              type="text"
              name="title"
              placeholder="Title your note"
              value={currentNote.title}
              onChange={handleChanges}
            />
          </p>
  
          <textarea
            name="body"
            value={currentNote.body}
            onChange={handleChanges}
          >
          </textarea>
        </p>

        
      </form>
    </div>
  )
}

export default NoteForm