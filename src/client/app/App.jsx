import React from 'react';
import Header from './Header.jsx'

//children appear in here, TODO define header and footer somehow doesn't work

export const App = ( { children } ) => (
  <div>
    <Header />
    { children }
  </div>
)
