import React from 'react'

const View =props=>{

  //grab application from sessionStorage redirect if it isn't there
  let psuedoState = JSON.parse(sessionStorage.getItem('application'))
  if(psuedoState){
    console.log(psuedoState)
    // sessionStorage.removeItem('application')
  }else{
    console.log('it doesn\'t exist')
    location = "/dashboard"
  }

  // establish some variables
  let questions = JSON.parse(psuedoState.application.questions)
  let answers = JSON.parse(psuedoState.response.content)
  let coverLetter = answers.shift()
  // console.log(answers)

  return(
    <div>
      <h1>{psuedoState.application.title}</h1>
      <p><strong>Applicant:</strong> {psuedoState.response.name}, {psuedoState.response.email}</p>
      <h4>Cover Letter</h4>
      <p>{coverLetter}</p>
      <h4>Interview Questions:</h4>
      <div className="well">
      {questions.map((item, key)=>{
        return(
          <details key={key}>
            <summary><strong>{item}</strong></summary>
            <p>{answers[key]}</p>
          </details>
          )
      })}
      </div>
    </div>
    )
}

export default View
