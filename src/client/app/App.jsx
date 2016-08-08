// import the libs we need
import React                          from 'react'
import ReactDOM                       from 'react-dom'
import { Router, Route, Link, hashHistory } from 'react-router'

import Index                          from './Index.jsx'
import Dashboard                      from './Dashboard.jsx'
import Application                    from './Application.jsx'
import ThankYou                       from './ThankYou.jsx'
// import Index                          from './Index.jsx'

// create a React Component called _App_
export default class App extends React.Component{

  constructor(){
    super()

    this.state = {
      message: 'yo'
    }
  }

  render(){
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Index}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/application" component={Application}/>
        <Route path="/thanks" component={ThankYou}/>
      </Router>
    )
  }
}

// mount our App at #container
ReactDOM.render(<App />, document.querySelector('#container'))
