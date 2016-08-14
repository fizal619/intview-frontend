import React from 'react'

const New =props=>{

  // when the create application form is run
  const handleSubmit=(e)=>{
    e.preventDefault()

    let questions = []

    //BUILD THE DATA TO SEND
    // console.log(e.target.q1.checked ? 'yes' : 'no')
    let count = 1
    while(count<11){
      e.target['q'+count].checked ? questions.push(e.target['q'+count].value) : 'skip'
      count++
    }
    document.querySelector('textarea').value.split('\n').forEach(item=>{
      questions.push(item)
    })
    let data = {
      title: e.target.title.value,
      questions: JSON.stringify(questions)
    }
    // console.log(data)
    e.target.reset()

    //SEND IT
    // try to get the token from the sessionStorage
    let token = JSON.parse(sessionStorage.getItem('intview'))['access_token']

    var myHeaders = new Headers()

    myHeaders.append('Content-Type', 'application/json')
    myHeaders.append('Authorization', token)
    myHeaders.append('Origin', 'https://intview.herokuapp.com') //define Origin or the server WILL reject the message.

    fetch('https://intview-backend.herokuapp.com/applications', {
      method:'POST',
      headers: myHeaders,
      body: JSON.stringify(data)
      // mode:'no-cors'
    })
    .then(r=>r.json())
    .then(r=>{
      // console.log(r)
    })

  }

  return(
      <div>
        <h1>Create an Application</h1>
        <br/>
        <form id="create" onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="Job Title" />
          <br/>
          <br/>
          <p>Pick at least 5 essay type questions to prompt your applicants.<br/>
          These are used to accurately model a personaility index for them.</p>
          <input type="checkbox" name="q1" value="Tell us about yourself."/> Tell us about yourself.
          <br/>
          <input type="checkbox" name="q2" value="Why should we hire you?"/> Why should we hire you?
          <br/>
          <input type="checkbox" name="q3" value="What is your long range objective? "/> What is your long range objective?
          <br/>
          <input type="checkbox" name="q4" value="How has your education prepared you for your career?"/> How has your education prepared you for your career?
          <br/>
          <input type="checkbox" name="q5" value="Have you ever had a conflict with a boss or professor? How was it resolved?"/>  Have you ever had a conflict with a boss or professor? How was it resolved?
          <br/>
          <input type="checkbox" name="q6" value="If I were to ask your professors (or your boss) to describe you, what would they say? "/> If I were to ask your professors (or your boss) to describe you, what would they say?
          <br/>
          <input type="checkbox" name="q7" value="What qualities do you feel a successful manager should have? "/> What qualities do you feel a successful manager should have?
          <br/>
          <input type="checkbox" name="q8" value=" If you had to live your life over again, what one thing would you change? "/>  If you had to live your life over again, what one thing would you change?
          <br/>
          <input type="checkbox" name="q9" value="What accomplishments have given you the most satisfaction in your life? "/> What accomplishments have given you the most satisfaction in your life?
          <br/>
          <input type="checkbox" name="q10" value="Where do you want to be ten years from now? "/> Where do you want to be ten years from now?
          <br/>
          <p>Custom Questions: <br/>
            <textarea id="customQuestions" form="create" name="custom" rows="8" cols="80" placeholder="If you would like to include your own questions, you can enter them here; each on a new line. "></textarea>
          </p>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
}

export default New
