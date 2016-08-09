import React from 'react';
import {Nav} from './Nav.jsx'
import {Header} from './Header.jsx'

//children appear in here, TODO define header and footer somehow doesn't work

const App =({children})=> {

  return(
    <div>
      <Header />
      { children }
    </div>
  )

}


export default App
