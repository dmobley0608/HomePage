import React from 'react';
import './greeting.css'

const today = new Date();
const month = today.toLocaleString('default', { month: 'long' });
const day = today.getDate();
const year = today.getFullYear();
const todaysDate = month + " " + day + ", " + year;




function Greeting(){
	const name = "";

	if(today.getHours() > 0 && today.getHours() < 12){
		return(
			<div>
		    	<h1 className = "mobile tc f1 w-100 light-blue mt7 morning"> Good Morning {name}! Today is {todaysDate}.</h1>
			</div>
		);
	}else if(today.getHours() >= 12 && today.getHours() <= 16){
		return(
			<div>
		    	<h1 className = "mobile tc f1 w-100 light-blue mt7"> Good Afternoon {name}! Today is {todaysDate}.</h1>
			</div>
		);
	}else if(today.getHours() >= 17 && today.getHours() <= 20){
		return(
			<div>
		    	<h1 className = " mobile tc f1 w-100 light-blue mt7"> Good Evening {name}! Today is {todaysDate}.</h1>
			</div>
		);
	}else{
		return(
			<div>
		    	<h1 className = "mobile tc f1 w-100 mt7 ttu"> {name} You need to Take Yo ass to bed!</h1>
			</div>
		);
	}
	
}

export default Greeting;

