import React from 'react';
import './greeting.css';


const today = new Date();


function Greeting(){
		
	const name = "";

	if(today.getHours() > 0 && today.getHours() < 12){
		return(
			<div className='greeting pa2 mr5 mt5'>
				<h1 className='pointer'> Good Morning!</h1>		    	
			</div>
		);
	}else if(today.getHours() >= 12 && today.getHours() <= 16){
		return(
			<div className='greeting pa2 mr5 mt5'>
				<h1 className='pointer'>Good Afternoon {name}!</h1>
		    	
			</div>
		);
	}else if(today.getHours() >= 17 && today.getHours() <= 20){
		return(
			<div className='greeting pa2 mr5 mt5 '>
		    	<h1 className= 'pointer'>Good Evening {name}!</h1>		    		    	
			</div>
		);
	}else{
		return(
			<div className='greeting pa2 mr5 mt5'>
				<h1 className='pointer'> {name} You need to Take Yo ass to bed!</h1>	    	
			</div>
		);
	}
	
}

export default Greeting;

