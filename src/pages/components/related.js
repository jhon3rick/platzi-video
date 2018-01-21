import React from 'react';
import logo from '../../../images/logo.png';
import './related.css';

export default function Related(props){
	return(
		<div className="related">
			<img src={logo} alt="" width={250}/>
		</div>
	);
}