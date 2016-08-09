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


  handleSubmit(event){
    event.preventDefault()

  }


  //========================================



  render(){

    return(
        <div>
          <h1>{this.state.application.title}</h1>
          <form onSubmit={this.handleSubmit}>
          {this.state.application.questions.map((item, key)=>{
            return(
              <p key={key}>
               {item} <br/>
              <textarea rows="4" cols="100" name={key.toString()} defaultValue="Please use at least 500 words in your answer..."></textarea>
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
