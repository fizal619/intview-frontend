import React from 'react';
import Header from './main/Header.jsx'

//children appear in here, TODO define header and footer somehow doesn't work

export const App = ( { children } ) => (
  <div>
    <div className="container">
    <Header />
    { children }
    </div>
  </div>
)
