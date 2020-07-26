import React from 'react';
import './BackgroundSetter.css'


const today = new Date();


function environmentSetter(){
	
	
	if((today.getHours() > 12) && (today.getHours() < 17)){
		
		return(  document.body.style.backgroundImage = 'url(' + "https://images.unsplash.com/photo-1571498760478-e31d3eb2e276?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9" + ')');
		
	}else if (today.getHours() > 16 && today.getHours() < 21){
		
		return(  document.body.style.backgroundImage = 'url(' + "https://images.unsplash.com/photo-1472120435266-53107fd0c44a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" + ')');
			
	}else if (today.getHours() >= 21){
		
		return(  document.body.style.backgroundImage = 'url(' + "https://images.unsplash.com/photo-1536746803623-cef87080bfc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" + ')');
		
	}else{
		
		return(  document.body.style.backgroundImage = 'url(' + "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" + ')');
		
	}
	
}

	export default environmentSetter;