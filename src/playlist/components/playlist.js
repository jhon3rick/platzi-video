import React from 'react';
// import Media from './media.js';
import MediaContainer from '../containers/media';
import Play from '../../icons/components/play.js';
import './playlist.css';

function Playlist(props) {
  return (
    <div className="playlist">
      {
        props.playlist.map((mediaId) => {
          return (
            <MediaContainer
              id={mediaId}
              key={mediaId}
              openModal={props.handleOpenModal}
            />
          )
        })
      }
    </div>
  )
}

export default Playlist;