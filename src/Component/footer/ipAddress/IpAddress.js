import React from 'react';
import ipify from 'ipify2';


class IpAddress extends React.Component{

	constructor(){
		super();
		this.state = {
			ipv6Address: '',
			ipv4Address:''
		}
	}


	getIpAddress(){
		ipify.ipv4().then(ipv4 => {
			this.setState({ ipv4Address: ipv4 });
		})
			.catch(err => console.log(err));
		ipify.ipv6()
		.then(ipv6 =>{
			this.setState({ipv6Address:ipv6})			
		}) 
		.catch(err => console.log(err));
	}

	componentDidMount(){
		this.getIpAddress();
	}

	render() {
		const { ipv6Address, ipv4Address } = this.state;

		if (ipv4Address === ipv6Address) {
			return (
				<div classname='flex'>
					<p className='dib mr2'>Ipv4 Address: {ipv4Address}</p>					
				</div>
				);
        }

		return(
				<div classname = 'flex'>
					<p className = 'dib mr2'>Ipv4 Address: {ipv4Address}</p>
					<p className= 'dib'>Ipv6 Address: {ipv6Address}</p>
				</div>
			);
	}
}
export default IpAddress;