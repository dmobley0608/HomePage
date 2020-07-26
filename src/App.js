import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Greeting from './Greeting'
import BackgroundSetter from './BackgroundSetter'

BackgroundSetter();

function App() {
  return (
    <div>
        <NavBar/>
        <Greeting/>        
    </div>
  );
}

export default App;
