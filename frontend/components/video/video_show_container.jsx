import React from 'react';
import VideoPlayerContainer from './video_player_container';
import CommentFormContainer from '../comments/comment_form_container';
import { withRouter } from 'react-router-dom';

const VideoShowContainer = (props) => {

  return(

    <div className='video-show-container'>
      <VideoPlayerContainer match={props.match}/>
      <CommentFormContainer match={props.match} />
    </div>
  );
};

export default VideoShowContainer;


// Added videoPl
