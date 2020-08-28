import React from 'react';
import Clock from '../clock/Clock';
import Weather from '../weather/weather';
import './NavBar.css'


function NavBar () {
  return (
  
	    <nav className = 'shadow5 fw6 w-100 nav' >
	       <div className = 'fr dib white clock'> <Clock /></div>
		   <div className = 'fl dib white weather'> <Weather /></div>	 
	    </nav>
	   
	
  );
}

export default NavBar;
