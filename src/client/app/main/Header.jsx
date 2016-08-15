import React from 'react'
import Nav from './Nav.jsx'
import { Notification } from 'react-notification'

export default class Header extends React.Component{

  constructor(){
    super()

    this.state={
      loggedIn: false,
      user: 'Guest',
      loginError: false
    }
  }

  componentDidMount(){
    try{
      let session = JSON.parse(sessionStorage.getItem('intview'))
      this.setState({
        loggedIn: true,
        user: session.username
      })

    }catch(e){
      // console.log('Error',e) //error handle here
    }
  }

  //========================================
  // My Code
  //========================================


  //login: the actual form action
  login(e){
    e.preventDefault()

    var myHeaders = new Headers()

    myHeaders.append('Content-Type', 'application/json')
    myHeaders.append('Origin', 'https://intview.herokuapp.com') //define Origin or the server WILL reject the message.

    fetch('https://intview-backend.herokuapp.com/v1/login', {
      method:'POST',
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value
      }),
      headers: myHeaders,
      // mode:'no-cors'
    })
    .then(r=>r.json())
    .then(data=>{
      if (data.error) {
          // console.log(data.error) //INVALIDDDDDWill do some stuff here later
          this.setState({
            loginError:true
          })

      }else{
        sessionStorage.setItem('intview',JSON.stringify(data))
        // console.log(sessionStorage.getItem('intview'))
        this.setState({
          loggedIn: true,
          user: JSON.parse(sessionStorage.getItem('intview')).username
        })
      }
    })

  }

  //========================================

  // LOGOUT!
  logout(){
    sessionStorage.removeItem('intview')

    window.location = "/"
  }

  //========================================


  // logged in? renders a component
  loggedIn(loggedInState){
    if(loggedInState){
      return(
        <div>
          <h3>Hi {this.state.user}</h3>
          <button className="btn btn-primary" onClick={this.logout.bind(this)}>Logout</button>
        </div>
        )
    }else{
      return(
        <form onSubmit={this.login.bind(this)}>
          <p>Login to view your dashboard.</p>
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <br />
          <button className="btn btn-primary">Login</button>
        </form>
        )
    }
  }


  //========================================

  closeNotification(){
    this.setState({
      loginError:false
    })
  }

  //========================================


  render(){
    return(
        <header className="page-header">

        <Notification
          title={"Error!"}
          isActive={this.state.loginError}
          message={'Please check your password/email and try again.'}
          action={"close"}
          onClick={this.closeNotification.bind(this)}
          />

          <div className="row">
            <div className="col-md-6"> <h2 className="logo" >IntView</h2> </div>
            <div className="col-md-6 login"> {this.loggedIn(this.state.loggedIn)} </div>
          </div>
          <hr/>
          <Nav />

        </header>
      )
  }
}

