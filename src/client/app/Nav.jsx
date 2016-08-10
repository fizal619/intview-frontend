import React from 'react';
import { IndexLink, Link } from 'react-router';

const Nav = () => {
  console.log("Navigation")
  return (
  <ul>
    <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
    <li><Link to="/dashboard" activeClassName="active">Dashboard</Link></li>
    <li><a href="http://github.com/fizal619/intview-backend">About This Project</a></li>
  </ul>
  )
}

export default Nav
