import React from 'react';

import Clock from './Clock'


function NavBar () {
  return (
  	<header className = 'w-100 bg-lightest-blue ph3 pv2 pv3-ns ph3-m ph5-1'>
	    <nav className = 'f6 fw6 ttu tracked tl ' >    	
		 	<a className ="link grow black dib mr3 br-pill bg-white pa2" href="https://smile.amazon.com/" title="Amazon">Go Shopping</a> 
		 	<a className ="link grow black dib mr3 br-pill bg-white pa2" href="https://www.udemy.com/home/my-courses/learning/" title="Udemy">Udemy </a> 		   			   	     
		 	<div className = 'fr black dib mr4'> <Clock/></div>
	    </nav>

	</header>
  );
}

export default NavBar;
