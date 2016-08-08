import React from 'react';
import { Navigation } from './Nav.jsx';

export const App = ( { children } ) => (
  <div>
    <Navigation />
    { children }
  </div>
)
