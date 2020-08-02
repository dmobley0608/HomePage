import React from 'react';



function Searchbar(){
	return(
		<div className = "tc pt4">
			<form  method="get" action="https://www.google.com/search">					
				<input style ={{minWidth: "275px"}} className = "w-30 tc br-pill " type="text"  name="q" placeholder="What do you need to know?"/>	
				<input className=" ml2 br-pill pl2 pr2"  type="submit" value="SEARCH" />				
				
				<input type="hidden" name="sitesearch" value="" />
			</form>			
		</div>
		);
}

export default Searchbar;