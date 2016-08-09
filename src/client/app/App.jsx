import React from 'react';

//children appear in here, TODO define header and footer

class App extends React.Component {


  constructor(){
    super()

    this.state={
      application:{
        jobTitle: 'Job Title'
      }
    }
  }


render(){
  return(
    <div>
      { children }
    </div>
  )
}
}

export default App
