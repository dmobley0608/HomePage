import React from 'react';
import IpAddress from './ipAddress/IpAddress';
import './Footer.css';


const Footer = () => {
	return (
			<footer className="w-100 white ba f6">
			<div className =''>

				<div className='dmc mt2 ml0 dib pl0 '>© 2020 
  					<b className="ttu"> DMC Solutions</b>, All Rights Reserved
  				</div>
				
				<div className = 'ip fl dib'>
					<IpAddress/>  
				</div>	

  			</div>
  				
			</footer>
		);
}

export default Footer;