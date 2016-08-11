import React from 'react'
import Nav from './Nav.jsx'

export default class Header extends React.Component{

  constructor(){
    super()

    this.state={
      loggedIn: false,
      user: 'Guest'
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
      console.log('Error',e)
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
    myHeaders.append('Origin', 'http://localhost:4000') //define Origin or the server WILL reject the message.

    fetch('http://localhost:3000/v1/login', {
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
          console.log(data.error) //INVALIDDDDDWill do some stuff here later
      }else{
        sessionStorage.setItem('intview',JSON.stringify(data))
        console.log(sessionStorage.getItem('intview'))
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
    this.setState({
      loggedIn:false,
      user: 'Guest'
    })
  }

  //========================================


  // logged in? renders a component
  loggedIn(loggedInState){
    if(loggedInState){
      return(
        <div>
          <h3>Hi {this.state.user}</h3>
          <button onClick={this.logout.bind(this)}>Logout</button>
        </div>
        )
    }else{
      return(
        <form onSubmit={this.login.bind(this)}>
          <p>Login to view your dashboard</p>
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="text" placeholder="Password" />
          <button>Submit</button>
        </form>
        )
    }
  }


  //========================================


  render(){
    return(
        <header>
          <Nav />
          <h2>IntView</h2>
          {this.loggedIn(this.state.loggedIn)}
          <hr/>
        </header>
      )
  }
}

