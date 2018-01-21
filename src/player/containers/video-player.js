import React, { Component } from 'react';
import { connect } from 'react-redux';

// components
import VideoPlayer from '../components/video-player'
import Video from '../components/video';
import VideoTitle from '../components/video-title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import VideoControls from '../components/video-controls';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume from '../components/volume';
import FullScreen from '../components/full-screen';

class VideoPlayerContainer extends Component {
	state = {
		pause: true,
		loading: false,
		duration: 0,
		currentTime: 0
	}
	togglePlay = (event) => {
		this.setState({ pause: !this.state.pause })
	}
	componentDidMount(){
		this.setState({ pause: (!this.props.autoPlay) })
	}
	handleLoadedMetadata = event => {
		this.video = event.target;
		this.setState({
			duration: this.video.duration
		});
	}
	handleTimeUpdate = event => {
		this.setState({
			currentTime: this.video.currentTime
		});
	}
	handleProgressChange = event => {
		this.video.currentTime = event.target.value;
	}
	handleSeeked = event => {
		this.setState({
			loading: false
		});
	}
	handleSeeking = event => {
		this.setState({
			loading: true
		});
	}
	handleVolumeChange = event => {
		this.video.volume = event.target.value;
	}
	handleFullScreenClick = event => {
		if(!document.webkitIsFullScreen){ this.player.webkitRequestFullscreen(); }
		else{ document.webkitExitFullscreen(); }
	}
	setRef = element => {
		this.player = element;
	}
	render(){
		return(
			<VideoPlayer
				setRef={this.setRef}
			>
				<VideoTitle title={this.props.media.get('title')} />
				<VideoControls>
					<PlayPause
						pause={this.state.pause}
						handleClick={this.togglePlay}
					/>
					<Timer
						duration={this.state.duration}
						currentTime={this.state.currentTime}
					/>
					<ProgressBar
						value={this.state.currentTime}
						duration={this.state.duration}
						handleProgressChange={this.handleProgressChange}
					/>
					<Volume
						handleVolumeChange={this.handleVolumeChange}
					/>
					<FullScreen
						handleFullScreenClick={this.handleFullScreenClick}
					/>
				</VideoControls>
				<Spinner
					active={this.state.loading}
				/>
				<Video
					pause={this.state.pause}
					autoPlay={this.props.autoPlay}
					handleSeeked={this.handleSeeked}
					handleSeeking={this.handleSeeking}
					handleTimeUpdate={this.handleTimeUpdate}
					handleLoadedMetadata={this.handleLoadedMetadata}
					src={this.props.media.get('src')}
				/>
			</VideoPlayer>
		);
	}
}

const mapsStateToProps = (state, props) => {
	return{
		media: state.get('data').get('entities').get('media').get(props.id)
	}
}

export default connect(mapsStateToProps)(VideoPlayerContainer);