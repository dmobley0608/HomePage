import React from 'react';
import quotes from './data/quotes';
import './QuoteCard.css';
import Tilt from 'react-tilt';


const rndNum = () => Math.floor(Math.random() * quotes.length);
const quoteNumber=rndNum();



const currentQuote = quotes[quoteNumber].text;
const author = quotes[quoteNumber].author;


const QuoteCard = () => {
	return(
		<div className='center pr6 justify-around mobileCard'>
		<Tilt className="Tilt pointer " options={{ max : 55 }} style={{ height:300 ,width: 200 }} >
		<div className='Tilt-inner'>
		<article className="card  br3 pa3 white pa4-ns mt5   mb0 shadow-5">		  
		  <p className=" mt0 underline">Quote of the moment:</p>
		  <p className=" center">{currentQuote}</p>
		  
		  <div className="tc">		    
		    <p className="">~{author}~</p>		   
		  </div>
		
		</article>
		</div>
		</Tilt>
		</div>
		);
}
export default QuoteCard;