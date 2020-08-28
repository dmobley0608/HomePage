import React from 'react';
import Clock from '../clock/Clock';
import Weather from '../weather/weather';
import './NavBar.css'


function NavBar () {
  return (
  
	    <nav className = 'shadow5 fw6 ttu w-100 nav' >
	    <ul className='white pv1 dib'>    	
		 	<a className ="white underline grow mr3 " href="https://smile.amazon.com/" title="Amazon">Go Shopping</a> 
		 	<a className ="white underline grow mr3  " href="https://www.udemy.com/home/my-courses/learning/" title="Udemy">Udemy </a> 	
		 </ul>	
		  <div className = 'fr dib white clock'> <Clock /></div>
		   <div className = 'fr dib white'> <Weather /></div>	 
	    </nav>
	   
	
  );
}

export default NavBar;
