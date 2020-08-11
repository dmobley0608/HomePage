import React from 'react';
import './Searchbar.css'



function Searchbar(){
	return(
		<div className = "center pt4">
			<form  method="get" action="https://www.google.com/search">					
				<div className = 'form center pa2'>
					<input className = "w-70 tc br-pill " type="text"  name="q" placeholder="What do you need to know?"/>	
					<button className=" w-30 ml2 pl2 pr2 pointer grow bg-lightest-blue br-pill"  type="submit" >Search</button>				
				</div>
				
				<input type="hidden" name="sitesearch" value="" />
			</form>			
		</div>
		);
}

export default Searchbar;