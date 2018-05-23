import React,{Component} from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'



class Main extends Component {
    constructor(){
        super()
        this.state={
            currentNote:null,

             notes:[
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
            
              ],
        }
    }

    setCurrentNote = (note) => {
        this.setState({currentNote:note})
    }

    render(){
     return(
         <div 
              className="Main"
              style={style}

         >
              <Sidebar />
              <NoteList notes={this.state.notes} setCurrentNote ={this.setCurrentNote}/>
             <NoteForm />
         </div>
     )
    }
}

const style ={
    display: 'flex',
    height: '100vh',
    alignItems: 'stretch',

}

export default Main