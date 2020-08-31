import React from 'react';
import quotes from './data/quotes';
import './QuoteCard.css';
import Tilt from 'react-tilt';


class QuoteCard extends React.Component {

	constructor(){
		super();
		this.state = {
			author: '',
			quote: '',
			imageUrl:''
		}
	}

	randomNumber() {
		return Math.floor(Math.random()*quotes.length);
    }	

	getQuote(i){
		this.setState({
			quote: quotes[i].quote,
			author: quotes[i].person,
			imageUrl: quotes[i].imageUrl
		});
		

	}

	

	componentDidMount(){
		this.getQuote(this.randomNumber());
	}



	render() {
		const { author, quote, imageUrl } = this.state;
		
		return(
			<div className='tj-c  pb5 cardCenter'>
				<Tilt className="Tilt pointer" options={{ max : 55 }} style={{ height:300 ,width: 200 }} >
					<div className='Tilt-inner'>
						<article className="card br4 pa3 white pa4-ns mt0 mb3 shadow-5">		  
							<p className=" mt0 tracked ttu underline">Quote from {author }:</p>
							<img className='br4  fl mr3' style={{ width: '100px' }} alt='' src={imageUrl} />
							<p className=" center">{quote}</p>
							  
							<div className="tc">
								
							    	<p className="">~{author}~</p>		   
							  </div>
						
						</article>
					</div>
				</Tilt>
			</div>
		);
	}
}
export default QuoteCard;