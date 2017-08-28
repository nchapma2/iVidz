import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSingleVideo(this.props.videoId);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.videoId !== nextProps.match.params.videoId){
      this.props.fetchSingleVideo(nextProps.match.params.videoId);
    }
  }


  render() {
    return(
        <div className='video-player-div'>
          <video className='video-player' width="600" height="450" controls src={this.props.currentVideo.video}>
          </video>
        </div>
    );
  }
}


export default VideoPlayer;
