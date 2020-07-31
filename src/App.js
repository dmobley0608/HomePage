import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Greeting from './Greeting'
import BackgroundSetter from './BackgroundSetter'
import Searchbar from './Searchbar';

BackgroundSetter();

function App() {
  return (
    <div>
        <NavBar/>
        <Greeting/>
        <Searchbar/>        
    </div>
  );
}

export default App;
