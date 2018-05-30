import React, { Component } from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

import {Route,Switch} from 'react-router-dom'
localStorage.setItem("notes", 'test');



class Main extends Component {
  constructor() {
    super()
    this.state = {
      currentNote: this.blankNote(),
      notes: [],
    }
  }
  /*
  componentWillMount(){
    base.syncState(this.props.uid){
      context:this,
      state: 'notes',
      asArray: true,

    }
  }
  */

  blankNote = () => {
    return {
      id: null,
      title: '',
      body: '',
    }
  }

  setCurrentNote = (note) => {
    this.setState({ currentNote: note })
  }

  resetCurrentNote = () => {
    this.setCurrentNote(this.blankNote())
  }

  saveNote = (note) => {
    const notes = [...this.state.notes]

    if (note.id) {
      // existing note
      const i = notes.findIndex(currentNote => currentNote.id === note.id)
      notes[i] = note
    } else {
      // new note
      note.id = Date.now()
      notes.push(note)
    }

    this.setState({ notes, currentNote: note })


  }
  deleteCurrentNote = () =>{
      
      let tempNotes =[...this.state.notes]
      const i = tempNotes.findIndex(currentNote =>currentNote.id === this.state.currentNote.id)
      tempNotes.splice(i,1)
      this.setState({notes:tempNotes})

      let temp = this.blankNote()
      this.setCurrentNote(temp)


  }
  

  render() {
    const formProps={
      currentNote:this.state.currentNote,
      saveNote:this.state.saveNote,
      deleteNote: this.deleteCurrentNote
    }
    return (
      <div
        className="Main"
        style={style}
      >
        <Sidebar resetCurrentNote={this.resetCurrentNote} signOut ={this.props.signOut}/>
        <NoteList
          notes={this.state.notes}
          setCurrentNote={this.setCurrentNote}
        />
        <Switch>
          <Route 
            path ='/notes/:id'
            render ={(navProps) => (
              <NoteForm
                {...formProps}
                {...navProps}
              />

            )}
          />

          <Route 
            
            render ={(navProps) => (
              <NoteForm
                {...formProps}
                {...navProps}
              />

            )}
          
          />

        </Switch>

        
      </div>
    )
  }
}

const style = {
  display: 'flex',
  height: '100vh',
  alignItems: 'stretch',
}

export default Main