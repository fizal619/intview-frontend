// import the libs we need
import React                          from 'react'
import ReactDOM                       from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

//templates
import {App}                          from './App.jsx'

//pages
import Index                          from './main/Index.jsx'
import Dashboard                      from './dashboard/Dashboard.jsx'
import Register                      from './users/Register.jsx'
import Application                    from './main/Application.jsx'
import ThankYou                       from './ThankYou.jsx'

// Our react class
export default class Routes extends React.Component{

  render(){
    return (
      <Router history={browserHistory} >
        <Route path="/" component={App}>
          <IndexRoute component={Index} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/register" component={Register} />
          <Route path="/application/:id" component={Application} />
        </Route>
      </Router>
    )
  }
}

// mount our App at #container
ReactDOM.render(<Routes />, document.querySelector('#container'))
