import React from 'react';
import './App.css';
import NavBar from './Component/navbar/NavBar';
import Greeting from './Component/greeting/Greeting'
import backgroundSetter from './Component/background/backgroundsetter'
import Searchbar from './Component/searchbar/Searchbar';



function App() {
  return (
    <div>
        <NavBar/>
        <Greeting/>
        <Searchbar/>        
    </div>
  );
}

backgroundSetter();

export default App;
