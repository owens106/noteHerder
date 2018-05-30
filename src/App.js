import React, { Component } from 'react'

import './App.css'
import Main from './Main'
import SignIn from './SignIn'

//import {auth} from './base'

class App extends Component {
  state = {
    uid: null,
  }

  /*componentWillMount(){
    const uid = localStorage.getItem('uid)
    if(uid)
      this.setState){uid})
    }
    auth.onAuthStateChanged(
      (user) =>{
        if(user){
          this.handleAuth(user)
        }
        else{
          this.handleUnauth()
        }
      }
    )
  }


  */

  handleAuth = (/*user*/) => {
    this.setState({ uid: 'dstrus'/*user.uid*/ })
    //localStorage.setItem('uid',user.id)
  }

  /*handleUnauth = () =>{
      this.setState({uid:null})
      //localStorage.removeItem('uid',user.id)

  }

  */

  signOut = () => {
    //this.setState({ uid: null })
    //auth.signOut()
  }

  signedIn= () => {
    return this.state.uid
  }

  render() {
    return (
      <div className="App">
        {
          this.signedIn()
            ? <Main signOut={this.signOut} />
            : <SignIn handleAuth={this.handleAuth} />
        }

      </div>
    )
  }
}

export default App