import React from 'react';
import './App.css';
import NavBar from './Component/navbar/NavBar';
import Greeting from './Component/greeting/Greeting'
import BackgroundSetter from './Component/background/backgroundsetter'
import Searchbar from './Component/searchbar/Searchbar';
import Footer from './Component/footer/Footer';



function App() {
  return (
    <div>  
    	<BackgroundSetter/> 
        <NavBar/>
        <Greeting/>
        <Searchbar/>
        <Footer/>       
    </div>
  );
}



export default App;
