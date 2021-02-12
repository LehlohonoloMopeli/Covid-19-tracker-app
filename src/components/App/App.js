import React from 'react';
import './App.css';
import AppLeft from './AppLeft/AppLeft';
import AppRight from './AppRight/AppRight';


import { Card, CardContent } from '@material-ui/core'

function App() {
  return (
    <div className="app">

      <AppLeft className='app__left'/>

      <AppRight className='app__right'/>
    
    </div>
  );
}

export default App;
