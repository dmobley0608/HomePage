import './backgroundsetter.css';
import morningBackgrounds from './data/morningbackgrounds';
import afternoonBackgrounds from './data/afternoonBackgrounds';
import eveningBackgrounds from './data/eveningBackgrounds';
import nightBackground from './data/nightbackgrounds';

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


function backgroundSetter(){
	//morning
	if((today.getHours() < 12) ){
		
		return(  document.body.style.backgroundImage = 'url('+ morningBackgrounds[randomMorningBackground] +')');
		//afternoon
	}else if (today.getHours() > 11 && today.getHours() < 17){
		
		return(  document.body.style.backgroundImage = 'url('+ afternoonBackgrounds[randomAfternoonBackground] +')');
		//evening	
	}else if (today.getHours() > 16 && today.getHours() < 21){
		
		return(  document.body.style.backgroundImage = 'url('+ eveningBackgrounds[randomEveningBackground] +')');
		//night
	}else {
		
		return(  document.body.style.backgroundImage = 'url('+ nightBackground[randomNightBackground] +')');
		
	}
	
}

	export default backgroundSetter;