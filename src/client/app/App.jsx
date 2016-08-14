import React from 'react';
import Header from './main/Header.jsx'
import Footer from './main/Footer.jsx'

//children appear in here, TODO define header and footer somehow doesn't work

export const App = ( { children } ) => (
  <div class="outer">
    <div className="container">
    <Header />
    { children }
    <Footer />
    </div>
  </div>
)
