import React from 'react';
import VideoPlayerContainer from './video_player_container';
import CommentFormContainer from '../comments/comment_form_container';

const VideoShowContainer = () => {

  return(
    <div className='video-show-container'>
      <VideoPlayerContainer />
      <CommentFormContainer />
    </div>
  );
};

export default VideoShowContainer;


// Added videoPl
