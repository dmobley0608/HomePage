import React from 'react';
import './greeting.css';


const today = new Date();
const month = today.toLocaleString('default', { month: 'long' });
const day = today.getDate();
const year = today.getFullYear();
const todaysDate = month + " " + day + ", " + year;


function Greeting(){
		
	const name = "";

	if(today.getHours() > 0 && today.getHours() < 12){
		return(
			<div className='screencenter greeting pa2 f3 mt6 mb5' style={{width:800, height:100}}>
		    	<h1> Good Morning!.</h1>
		    	<h2>{todaysDate}</h2>
		    	<h3>~{'Welcome'}</h3>
			</div>
		);
	}else if(today.getHours() >= 12 && today.getHours() <= 16){
		return(
			<div className='screencenter greeting pa2 f3 mt6 mb5' style={{width:800, height:100}}>
		    	<h1> Good Afternoon {name}! </h1>
		    	<h2>{todaysDate}</h2>
		    	<h3>~{'Welcome'}</h3>
			</div>
		);
	}else if(today.getHours() >= 17 && today.getHours() <= 20){
		return(
			<div className='screencenter greeting pa2 f3 mt6 mb5' style={{width:800, height:100}}>
		    	<h1 > Good Evening {name}!</h1>
		    	<h2 className = "f4 shadow mobile tc tracked mt5 mb0">Today is {todaysDate}</h2>		    	
			</div>
		);
	}else{
		return(
			<div className='screencenter greeting pa2 f3 mt7' style={{width:800, height:100}}>
		    	<h1> {name} You need to Take Yo ass to bed!</h1>	    	
			</div>
		);
	}
	
}

export default Greeting;

