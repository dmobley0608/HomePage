import React from 'react';
import './App.css';
import NavBar from './Component/navbar/NavBar';
import QuoteCard from './Component/QuoteCard/QuoteCard';
import Greeting from './Component/greeting/Greeting';
import BackgroundSetter from './Component/background/backgroundsetter';
import Footer from './Component/footer/Footer';



function App() {
  return (
    <div>  
    	<BackgroundSetter/> 
        <NavBar/>          
        <QuoteCard />           
        <Greeting/>            
        <Footer/>       
    </div>
  );
}



export default App;
