import React from 'react';
import { bindActionCreators } from 'redux';
import Media from '../components/media';
import { connect } from 'react-redux';

import * as actions from '../../actions/index';

class MediaContainer extends React.Component{
	openModal = (id) => {
		// this.props.dispatch({
    //   type: 'OPEN_MODAL',
    //   payload: {
    //     mediaId: id
    //   }
		// })

		this.props.actions.openModal(id)
	}
	render(){
		return <Media openModal={this.openModal} {...this.props.data.toJS()}/>
	}
}

const mapStateToProps = (state, props) => {
	return {
		// data: state.data.entities.media[props.id]
		data: state.get('data').get('entities').get('media').get(props.id)
	}
}

const mapDispatchToProps = (dispatch) => {
	return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(MediaContainer);