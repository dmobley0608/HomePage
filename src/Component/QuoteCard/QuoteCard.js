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
		<div className='flex justify-around ml3 fl'>
		<Tilt className="Tilt pointer " options={{ max : 55 }} style={{ height:300 ,width: 200 }} >
		<div className='Tilt-inner'>
		<article className="card h-20 br3 pa3 white pa4-ns mt5   mb0 shadow-5 ">		  
		  <p className="f5 mt0 underline">Quote of the moment:</p>
		  <p className="f4 center">{currentQuote}</p>
		  
		  <div className="tc">		    
		    <p className="f5">~{author}~</p>		   
		  </div>
		
		</article>
		</div>
		</Tilt>
		</div>
		);
}
export default QuoteCard;