import React    from 'react'
import {Link}   from 'react-router'
import { Notification } from 'react-notification'



export default class Register extends React.Component{

  constructor(){
    super()
    this.state={
      registerError:false,
      errorMessage: ''
    }
  }

  //========================================
  // My Code
  //========================================


  register(e){
    e.preventDefault()
    let data = {
      user: {
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
        password_confirmation: e.target['password_confirmation'].value
      }
    }
    // console.log(data)
    e.target.reset()

    //send it to the server
    var myHeaders = new Headers()

    myHeaders.append('Content-Type', 'application/json')
    myHeaders.append('Origin', 'https://intview.herokuapp.com') //define Origin or the server WILL reject the message.

    fetch('https://intview-backend.herokuapp.com/v1/users', {
      method:'POST',
      body: JSON.stringify(data),
      headers: myHeaders,
      // mode:'no-cors'
    })
    .then(r=>r.json())
    .then(r=>{
      // console.log(r)

      // log them in

      if (r.error) {
          // console.log(r.error) //INVALIDDDDD Will do some stuff here later
          this.setState({
            registerError:true,
            errorMessage: 'Email exists or password too short/didn\'t match.'
          })
      }else{
        //log em in
        sessionStorage.setItem('intview',JSON.stringify(r))

        //send them away
        window.location = "/dashboard"
      }

    })
    .catch(e=>{
      this.setState({
            registerError:true,
            errorMessage: 'Please fill all of the fields.'
          })
    })

  }

  //========================================


  closeNotification(){
    this.setState({
      registerError:false
    })
  }

  //========================================

  render(){
    return(
         <div className="register">

         <Notification
            title={"Error!"}
            isActive={this.state.registerError}
            message={this.state.errorMessage}
            action={"close"}
            onClick={this.closeNotification.bind(this)}
            />

          <h1>Register</h1>
          <form onSubmit={this.register.bind(this)}>
            <input type="text" name="username" placeholder="Username" /><br/>
            <input type="text" name="email" placeholder="Email" /><br/>
            <input type="password" name="password" placeholder="Password" /><br/>
            <input type="password" name="password_confirmation" placeholder="Password Again" />
            <br/>
            <br/>
            <button className="btn btn-primary">Sign Up</button>
          </form>
         </div>
      )
  }
}

// export default Register
