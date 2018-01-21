import React from 'react';
import './video-title.css';

const VideoTitle = (props) => (
	<div className="video-title">
		<h2>{props.title}</h2>
	</div>
);

export default VideoTitle;