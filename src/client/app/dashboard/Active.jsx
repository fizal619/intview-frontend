import React from 'react'

const Active =props=>{
  return(
      <div>
        <h3>{props.application.application.title}</h3>
        {props.application.responses.length > 0 ? props.application.responses.map((response, key)=>{
          return(
            <div key={key} className="card">
              <div className="card-block">
                <h4 className="card-title">{response.name}</h4>
                <p className="card-text">{response.email}</p>
              </div>
            </div>
            )
        }) : 'No responses yet'}
      </div>
    )
}

export default Active
