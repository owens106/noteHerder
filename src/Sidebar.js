import React from 'react'

import quill from './quill.svg'
import newHover from './new-hover.png'
import newIcon from './new.png'



const Sidebar = () =>{
  
    
    return(
        
        <nav 
            className="Sidebar"
            style={styles.sidebar}
        >
          

          <div 
            className="logo"
            style={styles.logo}
        >
            <img 
                src={quill} 
                alt="Noteherder"
                style={styles.logoImg}
            />
          </div>
          <a className="new-note" href="/notes">
            <img 
                src={newHover} 
                alt="New note" 
                style={styles.sidebarButton}
                onMouseEnter={function (ev){
                    ev.target.setAttribute('src', newIcon)

                }}
                onMouseLeave={function (ev){
                    ev.target.setAttribute('src', newHover)

                }}
            />
            <img 
                className="outline" 
                src={newIcon} 
                alt="New note"
                style={styles.sidebarNewNote}
            />
          </a>
          <div 
            className="SignOut"
            style={styles.sidebarSignout}
          >
            <button>
              <i 
                className="fa fa-sign-out"
                style={styles.sidebarSignoutButtonFA}
              >
              </i>
            </button>
          </div>
        </nav>

    )
}


const styles={
    sidebar:{
        width: '8rem',
        backgroundColor: '#f3f3f3',
        padding: '0.5rem 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    logo:{
        fontFamily: '"Fauna One"',
        color: '#666',
        fontSize: '3rem',

    },
    logoImg: {
        width: '3rem',
        paddingLeft: '0.4rem',
        
    },
    sidebarNewNote: {
        marginTop: '2rem',
        position: 'relative',
        width: '.4rem',

    },
    sidebarButton:{
        backgroundColor: 'transparent',
        border: '0',
        color: '#008BF8',
        cursor: 'pointer',
    },
    sidebarAImg:{
        position:'absolute',
        left:'0',
        width:'100%',
        transition:'opacity 0.25s ease-in-out',
    },
    sidebarAHover:{
        opacity:0
    },
    sidebarSignout:{
        position:'absolute',
        bottom:'1rem'
    },
    sidebarSignoutButton:{
        outline:'none'
    },
    sidebarSignoutButtonFA:{
        fontSize:'2rem'
    }
}


export default Sidebar