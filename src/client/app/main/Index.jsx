import React    from 'react'
import {Link}   from 'react-router'
const Index =props=>{
  return(
       <div>
        <h1>Home</h1>
        <div className="row">
          <div className="col-md-8">
            <p><em>Leveraging machine learning and AI to automate the interview process.</em></p>
            <hr/>
            <p>Powered by IBM watson Intview is a platform for creating smarter job applications that can be shared with prospective applicants.</p>
            <p>Intview hopes to make hiring easier by letting you see an unbiased assesment of an applicant's personality. The assesment is done on the Big 5 scale; however more detailed insights are to come.</p>
            <p>Sign up to start hiring smartly today!</p>
            <button onClick={e=>{location = "/register"}} className="btn btn-primary">Sign up</button>
          </div>
          <div className="col-md-4">
            <img width="300" height="auto" src="http://i.imgur.com/EC7DgEU.png" alt="5 personality traits from http://karmagenes.co/science/" />
          </div>
        </div>
       </div>
    )
}

export default Index
