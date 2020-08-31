import React from 'react';
import IpAddress from './ipAddress/IpAddress';
import './Footer.css';


const Footer = () => {
	return (
			<footer className="w-100 white f6 center">
				<div className ='w-100 '>

					<div className='dmc dib'>
						<span>© 2020</span> 
	  					<b className=''>  DMC Solutions</b>
	  					<span>, All Rights Reserved</span>	  					
	  				</div>
	  				<div className = 'ip dib fr'>
	  					<IpAddress className = ''/>
	  				</div>
	  			</div>  				
			</footer>
		);
}

export default Footer;