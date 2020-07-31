import React from 'react';


const today = new Date();
const month = today.toLocaleString('default', { month: 'long' });
const day = today.getDate();
const year = today.getFullYear();
const todaysDate = month + " " + day + ", " + year;




function Greeting(){
	const name = "Dwight";

	if(today.getHours() > 0 && today.getHours() < 12){
		return(
			<div>
		    	<h1 className = " tc f1 w-100 washed-blue pt6"> Good Morning {name}! Today is {todaysDate}.</h1>
			</div>
		);
	}else if(today.getHours() >= 12 && today.getHours() <= 16){
		return(
			<div>
		    	<h1 className = " bg tc f1 w-100 washed-blue pt7"> Good Afternoon {name}! Today is {todaysDate}.</h1>
			</div>
		);
	}else if(today.getHours() >= 17 && today.getHours() <= 20){
		return(
			<div>
		    	<h1 className = " tc f1 w-100 washed-blue pt6"> Good Evening {name}! Today is {todaysDate}.</h1>
			</div>
		);
	}else{
		return(
			<div>
		    	<h1 className = " tc f1 w-100 washed-blue pt6"> Take Yo ass to bed {name}! Today is {todaysDate}.</h1>
			</div>
		);
	}
	
}

export default Greeting;

