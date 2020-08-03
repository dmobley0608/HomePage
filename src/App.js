import React from 'react';
import '../styles/App.css';
import NavBar from './NavBar';
import Greeting from './Greeting'
import BackgroundSetter from '../js/backgroundsetter'
import Searchbar from './Searchbar';



function App() {
  return (
    <div>
    	<BackgroundSetter/>
        <NavBar/>
        <Greeting/>
        <Searchbar/>        
    </div>
  );
}




export default App;
