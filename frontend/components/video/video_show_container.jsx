import React from 'react';
import VideoPlayerContainer from './video_player_container';
import CommentFormContainer from '../comments/comment_form_container';
import CommentIndex from '../comments/comment_index';
import { withRouter } from 'react-router-dom';

const VideoShowContainer = (props) => {

  return(

    <div className='video-show-container'>
      <VideoPlayerContainer match={props.match}/>
      <CommentFormContainer videoId={props.match.params.videoId} match={props.match}/>
      <CommentIndex videoId={props.match.params.videoId}/>
    </div>
  );
};

export default VideoShowContainer;


// Added videoPl
