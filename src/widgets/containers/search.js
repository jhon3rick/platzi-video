import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Search from '../components/search';

import * as actions from '../../actions/index';


class SearchContainer extends Component {
	state = {
		value: 'jhon erick'
	}
	handleSubmit = event => {
		event.preventDefault();
		// console.log('submit', this.input.value);
		// this.props.dispatch({
		// 	type: 'SEARCH_VIDEO',
		// 	payload: {
		// 		query: this.input.value
		// 	}
		// })

		this.props.actions.searchAsyncEntities(this.input.value)

	}
	handleChange = event => {
		this.setState({ value: event.target.value.replace(' ', '-') })
	}
	setInputRef = (element) => {
		this.input = element;
	}
	render(){
		return(
			<Search
				setRef={this.setInputRef}
				handleSubmit={this.handleSubmit}
				handleChange={this.handleChange}
				value={this.state.value}
			/>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(null, mapDispatchToProps)(SearchContainer);