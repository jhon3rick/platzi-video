import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import HomeLayout from '../components/home-layout';

import Categories from '../../categories/components/categories';
import Related from '../components/Related';
import VideoPlayerContainer from '../../player/containers/video-player';

import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';

import HandleError from '../../error/containers/handle-error';
import * as actions from '../../actions/index';

import { List as list } from 'immutable';

class Home extends Component {
  // state = {
  //   modalVisible: false
  // }
  handleOpenModal = (id) => {
    // this.setState({
    //   media,
    //   modalVisible: true
    // })

    // this.props.dispatch({
    //   type: 'OPEN_MODAL',
    //   payload: {
    //     mediaId: id
    //   }
    // })

    this.props.actions.openModal(id)
  }
  handleCloseModal = () => {
    // this.setState({
    //   modalVisible: false
    // })
    // this.props.dispatch({ type: 'CLOSE_MODAL'})
    this.props.actions.closeModal()

  }
  render() {
    return (
      <HandleError>
        <HomeLayout>
          <Related/>
          <Categories
            search={this.props.search}
            categories={this.props.categories}
            handleOpenModal={this.handleOpenModal}
            isLoading={this.props.isLoading}
          />
          {
            this.props.modal.get('visibility') &&
            <ModalContainer>
              <Modal
                handleClick={this.handleCloseModal}
              >
                <VideoPlayerContainer
                  autoPlay
                  id={this.props.modal.get('mediaId')}
                  // src={this.state.media.src}
                  // title={this.state.media.title}
                />
              </Modal>
            </ModalContainer>
          }
        </HomeLayout>
      </HandleError>
    )
  }
}

const mapStateToProps = (state, props) => {
  const categories = state.get('data').get('categories').map((categoryId) => {
    return state.get('data').get('entities').get('categories').get(categoryId)
  })

  let searchResults = list();
  const search = state.get('data').get('search');
  if (search) {
    const mediaList = state.get('data').get('entities').get('media');
    searchResults = mediaList.filter((item) => (
      item.get('author').toLowerCase().includes(search.toLowerCase())
    )).toList();
  }
  return {
    modal: state.get('modal'),
    search: searchResults,
    categories: categories,
    isLoading: state.get('isLoading').get('active')
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)