import React from 'react';
import Clock from '../clock/Clock'
import './NavBar.css'


function NavBar () {
  return (
  	<header className = ' w-100 shadow5'>
	    <nav className = 'f6 fw6 dib tracked ttu' >
	    <ul className='white pv1'>    	
		 	<a className ="white underline grow mr3 " href="https://smile.amazon.com/" title="Amazon">Go Shopping</a> 
		 	<a className ="white underline grow mr3  " href="https://www.udemy.com/home/my-courses/learning/" title="Udemy">Udemy </a> 	
		 </ul>		 
	    </nav>
	    <div className = 'fr-l white f5 dib mr5 pv0 mt0 mobileNav'> <Clock /></div>
	</header>
  );
}

export default NavBar;
