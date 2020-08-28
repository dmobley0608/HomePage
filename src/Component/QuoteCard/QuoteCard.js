import React from 'react';
import './QuoteCard.css';
import Tilt from 'react-tilt';


class QuoteCard extends React.Component {

	constructor(){
		super();
		this.state = {
			author: '',
			quote:''
		}
	}

	getQuote(){
		fetch("https://favqs.com/api/qotd",	{"method": 'GET'})
			.then(response => response.json())
			.then(data =>{	
				this.setState({
					author: data.quote.author,
					quote: data.quote.body
				});
				
			})
			.catch(err => {
				console.log(err);
			});

	}

	

	componentDidMount(){
		this.getQuote();
	}



	render(){
		return(
			<div className='center pr6 justify-around mobileCard'>
				<Tilt className="Tilt pointer " options={{ max : 55 }} style={{ height:300 ,width: 200 }} >
					<div className='Tilt-inner'>
						<article className="card  br3 pa3 white pa4-ns mt5   mb0 shadow-5">		  
							  <p className=" mt0 tracked ttu underline">Quote of the moment:</p>
							  <p className=" center">{this.state.quote}</p>
							  
							  <div className="tc">		    
							    	<p className="">~{this.state.author}~</p>		   
							  </div>
						
						</article>
					</div>
				</Tilt>
			</div>
		);
	}
}
export default QuoteCard;