import React from 'react';
import './video-player.css';

const VideoPlayer = (props) => (
	<div
		ref={props.setRef}
		className="video-player"
	>
		{props.children}
	</div>
);

export default VideoPlayer;