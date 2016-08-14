import React    from 'react'
import {RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis} from 'recharts'
const Active =props=>{

  //========================================

  //PASS THE PAGE TO VIEW
  const view=(id)=>{
    //save the current Application with the selected response to sessionStorage
    let application = {application: props.application.application, response: props.application.responses[id]}
    sessionStorage.removeItem('application')
    sessionStorage.setItem('application', JSON.stringify(application))
    location = "/dashboard/view"
  }

  //========================================

  //Generate a Chart
  const genChart=(index)=>{
    index = JSON.parse(index).tree.children[0].children[0].children
    let data = []
    let labels=["A", "B", "C", "D", "E"]

    index.forEach((item, key)=>{
      data.push({"attribute": labels[key], "%": Math.abs(item.percentage)})
    })

    return(
        <RadarChart cx={220} cy={200} outerRadius={150} width={400} height={400} data={data}>
          <Radar dataKey="%" stroke="#fff" fill="#8884d8" fillOpacity={0.6}/>
          <PolarGrid />
          <PolarAngleAxis dataKey="attribute" />
          <PolarRadiusAxis/>
        </RadarChart>
      )
  }


  return(
      <div>
        <h3>{props.application.application.title}</h3>
        {props.application.responses.length > 0 ? props.application.responses.map((response, key)=>{
          return(
            <div key={key} className="card">
              <div className="card-block">
                {genChart(response.personality_index)}
                <h4 className="card-title">{response.name}</h4>
                <p className="card-text">{response.email}</p>
                <p className="card-text">
          A - Openness, B - Conscientiousness, C - Extraversion, D - Agreeableness, E - Emotional range
        </p>
              <button onClick={e=>view(key)} className="btn btn-success details">View Answers</button>
              </div>
            </div>
            )
        }) : ''}

      </div>
    )
}

export default Active
