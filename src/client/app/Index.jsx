import React    from 'react'
import {Link}   from 'react-router'
const Index =props=>{
  return(
       <div>
        <div>
        <ul role="nav">
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/application">Application</Link></li>
        </ul>
      </div>
       </div>
    )
}

export default Index
