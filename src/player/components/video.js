import React, { Component } from 'react';
import './video.css';

export default class Video extends Component {
	componentWillReceiveProps(nextProps){
		if(nextProps.pause !== this.props.pause){
			this.togglePlay();
		}
	}
	togglePlay = () => {
		if(this.props.pause){
			this.video.play()
		}
		else{
			this.video.pause();
		}
	}
	setRef = element => {
		this.video = element;
	}
	render(){
		return(
			<div className="video">
				<video
					// controls
					ref={this.setRef}
					src={this.props.src}
					autoPlay={this.props.autoPlay}
					onSeeked={this.props.handleSeeked}
					onSeeking={this.props.handleSeeking}
					onTimeUpdate={this.props.handleTimeUpdate}
					onLoadedMetadata={this.props.handleLoadedMetadata}
				/>
			</div>
		);
	}
}