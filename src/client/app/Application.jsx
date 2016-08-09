import React from 'react'

export default class Application extends React.Component {

  constructor(){
    super()

    this.state={
      application:{
        title: 'Job Title',
        questions: ['questions', 'questions']
      }
    }

  }

  componentDidMount(){
    // fetch the questions from the db
    fetch('http://localhost:3000/applications/1').then(r=>r.json()).then(r=>{

      r.questions = r.questions.split('|')

      this.setState({
        application: r
      })
    })
  }

  render(){

    return(
        <div>
          <h1>{this.state.application.title}</h1>
          <ul>
          {this.state.application.questions.map((item, key)=>{
            <li key={key}>{item}</li>
          })}
          </ul>
        </div>
      )
  }

}


// export default Application
