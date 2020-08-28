import React from 'react';



	

class Weather extends React.Component{
	
	constructor(){
		super();
		this.state = {
			city: '',
			state:'',
			temp:0,
			imgUrl:'',
			condition:''
		}

	}

	getWeather(){
		fetch("https://api.weatherapi.com/v1/current.json?key=914d4e0e50314ecf960105744202708&q=30507", {
			method: 'post'
		}) 
		.then(response => response.json())
		.then(data => {
			this.setState({
				temp: data.current.temp_f,
				imgUrl: data.current.condition.icon,
				condition: data.current.condition.text
			})
					
		
		})

	}

	getLocation(){
		fetch("https://api.weatherapi.com/v1/current.json?key=914d4e0e50314ecf960105744202708&q=30507", {
			method: 'post'
		}) 
		.then(response => response.json())
		.then(data => {			
			this.setState({
				city: data.location.name,
				state: data.location.region
			})			
		})

	}


	

	componentDidMount(){
		this.getWeather();
		this.getLocation();
	}
		
	
		
	

	render(){
		const {temp, city, state, imgUrl, condition} = this.state;
		return(
			<div className = 'flex' >
				<p className = 'f7 tc'>{condition}</p>
				<img className = '' alt = '' src={imgUrl}/>
				<p className = ''>{temp} &deg;F in {city}, {state}</p>
				
			</div>
		);
	}

}


export default Weather;