import '../styles/backgroundsetter.css';
import morningBackgrounds from '../js/morningbackgrounds';
import afternoonBackgrounds from '../js/afternoonBackgrounds';
import eveningBackgrounds from '../js/eveningBackgrounds';
import nightBackground from '../js/nightbackgrounds';

const today = new Date();

// random backgrounds
const randMorningBackground = randomNumber(morningBackgrounds.length);
const randAfternoonBackground = randomNumber(afternoonBackgrounds.length);
const randEveningBackground = randomNumber(eveningBackgrounds.length);
const randNightBackground = randomNumber(nightBackground.length);

//random number generator
function randomNumber(max){
	return Math.floor(Math.random() * max);
}  


function environmentSetter(){
	//morning
	if((today.getHours() < 12) ){
		
		return(  document.body.style.backgroundImage = 'url('+ morningBackgrounds[randMorningBackground] +')');
		//afternoon
	}else if (today.getHours() > 11 && today.getHours() < 17){
		
		return(  document.body.style.backgroundImage = 'url('+ afternoonBackgrounds[randAfternoonBackground] +')');
		//evening	
	}else if (today.getHours() > 16 && today.getHours() < 21){
		
		return(  document.body.style.backgroundImage = 'url('+ eveningBackgrounds[randomNumber(eveningBackgrounds.length)] +')');
		//night
	}else {
		
		return(  document.body.style.backgroundImage = 'url('+ nightBackground[randomNumber(nightBackground.length)] +')');
		
	}
	
}

	export default environmentSetter;