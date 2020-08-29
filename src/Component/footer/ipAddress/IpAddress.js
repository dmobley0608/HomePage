import React from 'react';
import ipify from 'ipify2';


class IpAddress extends React.Component{

	constructor(){
		super();
		this.state = {
			ipAddress:''
		}
	}


	getIpAddress(){
		// ipify.ipv4().then(ipv4 => console.log(ipv4)).catch(err => console.log(err));
		ipify.ipv6()
		.then(ipv6 =>{
			this.setState({ipAddress:ipv6})			
		}) 
		.catch(err => console.log(err));
	}

	componentDidMount(){
		this.getIpAddress();
	}

	render(){
		const {ipAddress} = this.state;

		return(
				<div>
					<p>Ip Address: {ipAddress}</p>
				</div>
			);
	}
}
export default IpAddress;