import React, { Component } from 'react';
import './modal.css';

export default function Modal(props){
	return(
		<div className="modal">
			{ props.children }
			<button
				onClick={props.handleClick}
				className="modal-close"
			/>
		</div>
	);
}