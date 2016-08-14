import React from 'react';
import { IndexLink, Link } from 'react-router';

const Nav = () => {


  //TO render list main menu items if a user is logged in
  const loggedIn = function(){
    try{
      let session = sessionStorage.getItem('intview')
      if(session){
        return(
            <li><Link to="/dashboard" activeClassName="active">Dashboard</Link></li>
          )
      }
    }catch(e){
      console.log('error in the navigation try catch, yes this is a very specific message.')
    }
    return(
        <li><Link to="/register" activeClassName="active">Register</Link></li>
      )
  }

  return (
  <ul className="nav">
    <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
    {loggedIn()}
  </ul>
  )
}

export default Nav
