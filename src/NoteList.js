import React from 'react'

const NoteList = () =>{
    return (
        <div className="NoteList" style={styles.noteList}>
          <h3 style={styles.noteListh3}>Notes</h3>
          <ul id="notes" style={styles.noteListUL}>
            <a className="active">
              <li style={styles.noteListULLI}
                onMouseEnter={function (ev){
                    ev.target.parentElement.style.backgroundColor="#008bf8"
                }}
                onMouseLeave={function (ev){
                    ev.target.parentElement.style=styles.noteListULLI
                }}
              >
                <div className="note">
                  <div className="note-title" style={styles.noteListULLITitle}>
                    Kohlrabi welsh
                  </div>
                  <div className="note-body" >
                    <p>
                      Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
                    </p>
                  </div>
                </div>
              </li>
            </a>
            <a>
              <li style={styles.noteListULLI}
                     onMouseEnter={function (ev){
                        ev.target.parentElement.style.backgroundColor="#008bf8"
                    }}
                    onMouseLeave={function (ev){
                        ev.target.parentElement.style=styles.noteListULLI
                    }}  
              >
                <div className="note">
                  <div className="note-title" style={styles.noteListULLITitle}>
                    Dandelion cucumber
                  </div>
                  <div className="note-body" >
                    <p>
                      Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
                    </p>
                  </div>
                </div>
              </li>
            </a>
            <a>
              <li style={styles.noteListULLI}
                     onMouseEnter={function (ev){
                        ev.target.parentElement.style.backgroundColor="#008bf8"
                    }}
                    onMouseLeave={function (ev){
                        ev.target.parentElement.style=styles.noteListULLI
                    }}

              >
                <div className="note">
                  <div className="note-title" style={styles.noteListULLITitle}>
                    Prairie turnip
                  </div>
                  <div className="note-body" >
                    <p >
                      Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                    </p>
                  </div>
                </div>
              </li>
            </a>
          </ul>
        </div>
    )

}
const styles={
    noteList:{
        borderLeft: '1px solid #eee',
        borderRight: '1px solid #eee',
        width: '30rem'
    },
    noteListh3:{
        color: '#999',
        textTransform: 'uppercase',
        fontSize: '2rem',
        fontFamily:' Oxygen',
        fontWeight: '300',
        letterSpacing:' 3px',
        margin: '20px 2rem',
    },
    noteListUL:{
        borderTop: '1px solid #eee',
        overflowY: 'scroll',
        height:' calc(100vh - 72px)',
        listStyle:' none',
        marginTop: '1em',
        padding: '0',
        width: '100%',
        color: '#999',
    },
    noteListULLI:{
        height: '100px',
        fontSize: '90%',
        cursor: 'pointer',
        overflow: 'hidden',
    },
    noteListULLIHover:{
        backgroundColor: '#008bf8'
    },
    noteListULLITitle:{
        color: '#4a4a4a',
        fontFamily: 'Fauna One',
        fontSize: '120%',
        fontWeight: '400',
        whiteSpace: 'nowrap',
        overflowX: 'hidden',
        OtextOverflow: 'ellipsis',
        textOverflow: 'ellipsis',
    }
}



export default NoteList