import React from 'react';


const today = new Date();
const month = today.toLocaleString('default', { month: 'long' });
const day = today.getDate();
const year = today.getFullYear();
const todaysDate = month + " " + day + ", " + year;




function Greeting(){
	return(

		<div>
		    <h1 className = " tc f1 w-100 washed-blue pv7-ns"> Welcome Dwight! Today is {todaysDate}.</h1>
		</div>
		);
}

export default Greeting;

