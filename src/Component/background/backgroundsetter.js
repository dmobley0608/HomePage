import React from 'react';
import morningBackgrounds from './data/morningbackgrounds';
import afternoonBackgrounds from './data/afternoonBackgrounds';
import eveningBackgrounds from './data/eveningBackgrounds';
import nightBackground from './data/nightbackgrounds';
import './backgroundsetter.css'




const today = new Date();

// random backgrounds
const randomMorningBackground = randomNumber(morningBackgrounds.length);
const randomAfternoonBackground = randomNumber(afternoonBackgrounds.length);
const randomEveningBackground = randomNumber(eveningBackgrounds.length);
const randomNightBackground = randomNumber(nightBackground.length);

//random number generator
function randomNumber(max){
	return Math.floor(Math.random() * max);
}  


function BackgroundSetter(){
	//morning
	if((today.getHours() > 4 && today.getHours() < 12) ){
		
		return(  
			<div className='pushback center'>
				<img alt = 'logo' src={morningBackgrounds[randomMorningBackground]}/>
		 	</div>
		);
		//afternoon
	}else if (today.getHours() > 11 && today.getHours() < 17){
		
		return(  
			<div className='pushback center darken'>
				<img alt = 'logo' src={afternoonBackgrounds[randomAfternoonBackground]}/>
		 	</div>
		 );
		//evening	
	}else if (today.getHours() > 16 && today.getHours() < 21){
		
		return(  
			<div className='pushback center'>
				<img alt = 'logo' src={eveningBackgrounds[randomEveningBackground]}/>
		 	</div>
		);
		//night
	}else {
		
		return( 
			<div className='pushback center'>
				<img alt = 'logo' src={nightBackground[randomNightBackground]}/>
		 	</div>
		);
		
	}
	
}

	export default BackgroundSetter;