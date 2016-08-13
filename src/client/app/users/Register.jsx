import React    from 'react'
import {Link}   from 'react-router'
const Register =props=>{

  const register=e=>{
    e.preventDefault()
    let data = {
      user: {
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
        password_confirmation: e.target['password_confirmation'].value
      }
    }
    console.log(data)
    e.target.reset()

    //send it to the server
    var myHeaders = new Headers()

    myHeaders.append('Content-Type', 'application/json')
    myHeaders.append('Origin', 'http://localhost:4000') //define Origin or the server WILL reject the message.

    fetch('http://localhost:3000/v1/users', {
      method:'POST',
      body: JSON.stringify(data),
      headers: myHeaders,
      // mode:'no-cors'
    })
    .then(r=>r.json())
    .then(r=>{
      console.log(r)

      // log them in

      if (r.error) {
          console.log(r.error) //INVALIDDDDD Will do some stuff here later
      }else{
        sessionStorage.setItem('intview',JSON.stringify(r))
        console.log(sessionStorage.getItem('intview'))
      }

      //send them away
      window.location = "/dashboard"
    })

  }

  return(
       <div className="register">
        <h1>Register</h1>
        <form onSubmit={register}>
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

export default Register
