import React from 'react';
import VideoPlayerContainer from './video_player_container';
import CommentFormContainer from '../comments/comment_form_container';
import CommentIndex from '../comments/comment_index';
import VideoShowListContainer from './video_show_list_container';
import { withRouter } from 'react-router-dom';

const VideoShowContainer = (props) => {

  return(

    <div className='video-show-container'>
      <div className='left-video'>
        <VideoPlayerContainer match={props.match}/>
        <CommentFormContainer videoId={props.match.params.videoId} match={props.match}/>
        <CommentIndex videoId={props.match.params.videoId}/>
      </div>
      <VideoShowListContainer match={props.match}/>
    </div>
  );
};

export default VideoShowContainer;
