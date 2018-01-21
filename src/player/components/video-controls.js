import React from 'react';
import './video-controls.css';

const VideoControls = (props) => (
	<div className="video-controls">
		{props.children}
	</div>
);

export default VideoControls;