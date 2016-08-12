import React from 'react'

//TODO refer to wireframe


class Dashboard extends React.Component{

  constructor(){
    super()
    this.state={
      applications:[]
    }
  }

  // let's grab all the applications from the DB for the logged in user
  componentDidMount(){
    let session = JSON.parse(sessionStorage.getItem('intview'))
    if (!session){
      // redirect if not logged in
      location = "/"
    }else{
      this.getApplications()
    }
  }

  //========================================
  // My Code
  //========================================

  //DELETE
  delete(applicationID, stateID){
    // try to get the token from the sessionStorage
    let token = JSON.parse(sessionStorage.getItem('intview'))['access_token']

    var myHeaders = new Headers()

    myHeaders.append('Content-Type', 'application/json')
    myHeaders.append('Authorization', token)
    myHeaders.append('Origin', 'http://localhost:4000') //define Origin or the server WILL reject the message.

    fetch('http://localhost:3000/applications/'+applicationID, {
      method:'DELETE',
      headers: myHeaders,
      // mode:'no-cors'
    })
    .then(r=>r.json())
    .then(data=>{
      console.log(data)
      this.state.applications.splice(stateID, 1)
      this.setState({
        applications: this.state.applications
      })
    })
  }

  //========================================

  //GET ALL
  getApplications(){
    // try to get the token from the sessionStorage
    let token = JSON.parse(sessionStorage.getItem('intview'))['access_token']

    var myHeaders = new Headers()

    myHeaders.append('Content-Type', 'application/json')
    myHeaders.append('Authorization', token)
    myHeaders.append('Origin', 'http://localhost:4000') //define Origin or the server WILL reject the message.

    fetch('http://localhost:3000/applications', {
      method:'GET',
      headers: myHeaders,
      // mode:'no-cors'
    })
    .then(r=>r.json())
    .then(data=>{
      console.log(data)
      this.setState({
        applications: data.applications
      })
    })
  }

  //========================================


  render(){
    return(
      <div className="row">
      <h1>Dashboard</h1>
      <button className="btn btn-primary" onClick={e=> location="/dashboard/new"}>New Applicaton</button>
      <br/>
      <div className="col-md-6">
        <div id="results">
          {this.state.applications.length > 0 ? this.state.applications.map((item,key)=>{
            return(
              <p key={key}>
                <span className="applicationName">{item.application.title}</span>
                <span className="responseCount"> {item.responses.length}</span>
                <br/>
                 <button className="btn btn-warning" onClick={e=> location="/application/"+item.application.id }> Visit</button>
                 <button className="btn btn-success">View Responses</button>
                 <button className="btn btn-danger" id={item.application.id} data-id={key} onClick={e=>{this.delete(item.application.id, key)}} >Delete</button>
                 <br/>
              </p>
              )
          }) : <p>No applications to show.</p>}
        </div>
        </div>
        <div className="col-md-6">

        </div>
      </div>
    )

  }

}

export default Dashboard
