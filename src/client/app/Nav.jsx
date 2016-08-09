import React from 'react';
import { IndexLink, Link } from 'react-router';

const Nav = () => {
  console.log("Navigation")
  return (
  <ul>
    <li><IndexLink to="/" activeClassName="active">Index</IndexLink></li>
    <li><Link to="/dashboard" activeClassName="active">Dashboard</Link></li>
  </ul>
)
}

export default Nav
