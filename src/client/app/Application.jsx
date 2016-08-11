import React from 'react'



export default class Application extends React.Component {


  constructor(){
    super()

    this.state={
      application:{
        title: '',
        questions: []
      }
    }

  }

  componentDidMount(){
    // fetch the questions from the db
    fetch('http://localhost:3000/applications/'+this.props.params.id)
    .then(r=>r.json())
    .then(r=>{

      r.questions = r.questions.split('|')

      this.setState({
        application: r
      })
    })
  }

  //========================================
  // My Code
  //========================================

  //parse the data on the form and send it to be read by watson, woooo
  handleSubmit(event){
    event.preventDefault()
    //build the response object
    let length = event.target.children.length
    let count = 2
    let content = ""
    while(length > count){
      if(event.target[count.toString()] !== undefined){
        content += event.target[count.toString()].value + "\n"
      }
      count++
    }
    let response = {
      application_id: parseInt(this.props.params.id),
      name: event.target.name.value,
      email: event.target.email.value,
      content: content
    }
    console.log(response)

    //send it to the server

    var myHeaders = new Headers()

    myHeaders.append('Content-Type', 'application/json')
    myHeaders.append('Origin', 'http://localhost:4000') //define Origin or the server WILL reject the message.

    fetch('http://localhost:3000/responses', {
      method:'POST',
      body: JSON.stringify(response),
      headers: myHeaders,
      // mode:'no-cors'
    })
    .then(r=>r.json())
    .then(data=>{
      console.log(data)
    })

  }


  //========================================



  render(){

    return(
        <div>
          <h1>Applying for: {this.state.application.title}</h1>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="email" placeholder="Email" />
            <p>Cover Letter: <br/>
              <textarea rows="6" cols="80" name="coverLetter" placeholder="Paste your cover letter here"></textarea>
            </p>
            <h3>Interview Questions:</h3>
            <p>Personal Essays</p>
            {this.state.application.questions.map((item, key)=>{
              return(
                <p key={key}>
                 {item} <br/>
                <textarea rows="8" cols="80" placeholder="Please use at least 500 words in your answer..."></textarea>
                </p>
                )
            })}
            <button>Submit</button>
          </form>
        </div>
      )
  }

}


// export default Application
