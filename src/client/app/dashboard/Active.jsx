import React from 'react'

const Active =props=>{
  return(
      <div>
        <h3>{props.application.application.title}</h3>
        <hr/>
        <div className="card">

          <div className="card-block">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    )
}

export default Active
