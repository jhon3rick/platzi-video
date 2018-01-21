import React from 'react';
import './timer.css';

const leftPad = (number) => {
	const pad = `00${number}`;
	return pad.substring(pad.length - 2, pad.length);
}
const formattedTime = (secs) => {
	const minutes = parseInt(secs / 60, 10);
	const seconds = parseInt(secs % 60, 10);

	return `${leftPad(minutes)} : ${leftPad(seconds)}`;
}
const Timer = (props) => {
	return(
		<div className="timer">
			<p>
				<span>{formattedTime(props.currentTime)} / {formattedTime(props.duration)}</span>
			</p>
		</div>
	);
};

export default Timer;