import React from 'react';
import { Link } from 'react-router-dom';

class VideoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchVideos();
  }

  render() {
    let videos;
    if(this.props.videoList){
      videos = this.props.videoList.map(video => (
        <VideoListItem video={video}
          key={`video-list-item${video.id}`} />
      ));
    }
    return(
      <div className='video-list-container'>
        <div className='suggested-videos'></div>
        <div className='video-div'>
          <ul className='video-list'>
            {videos}
          </ul>
        </div>
      </div>

    );
  }
}

export default VideoList;
