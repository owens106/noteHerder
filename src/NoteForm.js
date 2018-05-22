import React from 'react'

const NoteForm = () =>{
    return (
        <div className="NoteForm" style={styles.noteForm}>
          <div className="form-actions" style={styles.noteFormActions}>
            <button 
                type="button" 
                style={styles.noteFormButton}
                onClick={function(ev){
                    ev.target.style=styles.noteFormButtonOnSubmit
                }}
            >
              <i className="fa fa-trash-o" style={styles.noteFormButtonFA}></i>
            </button>
          </div>
          <form style={styles.noteFormForm}>
            <p>
              <input
                type="text"
                name="title"
                placeholder="Title your note"
                style={styles.noteFormInput}
              />
            </p>
            
            <textarea name="body" style={styles.noteFormText}></textarea>
          </form>
        </div>
    )

}

const styles= {
     noteForm: {
        msFlexPositive: '1',
        flexGrow:'1',
        padding:'0 3rem'
    },
    noteFormActions:{
        paddingTop:'1rem',
        marginLeft:'-2rem',
        display:'flex',
        msFlexLinePack:'center',
        alignContent:'center'

    },
    noteFormButton:{
        border: 'none',
        background: 'none',
        padding: '0'
        
    },
    noteFormButtonOnSubmit:{
        backgroundColor: '#008bf8',
        borderRadius: '4px',
        color: '#fff',
        fontSize: '1.4rem',
        padding: '1rem'
    },
    noteFormButtonFA:{
        color: '#999',
        fontSize: '2rem',
        margin: '0'
    },
    noteFormForm:{
        margin: '0 auto',
        maxWidth: '80rem',
    },
    noteFormInput:{
        border: 'none',
        fontSize: '200%',
        fontFamily: 'Fauna One',
        color: '#008bf8',
        fontWeight: '400',
        width: '100%',
        outline: 'none',
    },
    noteFormText:{
        bordeCcolor: '#eee',
        width: '100%',
        height: 'calc(100vh - 140px)',
        fontSize: '1.3em',
    }

}

export default NoteForm