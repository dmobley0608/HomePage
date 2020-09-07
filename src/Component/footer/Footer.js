import React from 'react';
import IpAddress from './ipAddress/IpAddress';
import './Footer.css';


const Footer = () => {
	return (
			<footer style={{width:'100%', display:'flex', justifyContent:'center'}}>
				<div style={{display:'flex', width:'100%', justifyContent:'center',  alignItems:'center', alignContent:'center'}}>
					<div className='dmc'>
						<span>© 2020</span> 
	  					<b className=''>  DMC Solutions</b>
	  					<span>, All Rights Reserved</span>						  					
	  				</div>
					  <div className='ip'>
					  <IpAddress />	
					  </div>
					  	  				
	  			</div>  				
			</footer>
		);
}

export default Footer;