import './BackgroundSetter.css'
import nightBackground from './NightBackground'

const today = new Date();

function randomNumber(max){
	return Math.floor(Math.random() * max); 

}

  


function environmentSetter(){
	//morning
	if((today.getHours() < 12) ){
		
		return(  document.body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)');
		//afternoon
	}else if (today.getHours() < 11 && today.getHours() < 17){
		
		return(  document.body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1580898179497-ce3b9e9ac350?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)');
		//evening	
	}else if (today.getHours() >16 && today.getHours() < 21){
		
		return(  document.body.style.backgroundImage = 'url('+ nightBackground[randomNumber(nightBackground.length)] +')');
		//night
	}else {
		
		return(  document.body.style.backgroundImage = 'url('+ nightBackground[randomNumber(nightBackground.length)] +')');
		
	}
	
}

	export default environmentSetter;