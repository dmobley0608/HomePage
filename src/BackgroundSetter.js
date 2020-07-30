import React from 'react';
import './BackgroundSetter.css'


const today = new Date();

const morningBg = [
	"https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
	"https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
	"https://images.unsplash.com/photo-1516636817578-7d6260c32e0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
	"https://images.unsplash.com/photo-1508717334315-37b159f24d04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
];


 function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let rndNumber = getRandomInt(3);


function environmentSetter(){
	
	
	if((today.getHours() > 12) && (today.getHours() < 17)){
		
		return(  document.body.style.backgroundImage = 'url(' + "https://images.unsplash.com/photo-1571498760478-e31d3eb2e276?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9" + ')');
		
	}else if (today.getHours() > 16 && today.getHours() < 21){
		
		return(  document.body.style.backgroundImage = 'url(morningBg[rndNumber])');
			
	}else if (today.getHours() >= 21){
		
		return(  document.body.style.backgroundImage = 'url(' + "https://images.unsplash.com/photo-1536746803623-cef87080bfc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" + ')');
		
	}else{
		
		return(  document.body.style.backgroundImage = 'url(morningBg[rndNumber])');
		
	}
	
}

	export default environmentSetter;
