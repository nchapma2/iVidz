import React from 'react';
import { Link } from 'react-router-dom';
import VideoListItem from './video_list_item';

class VideoShowList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchVideos();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.match.params.videoId !== this.props.match.params.videoId){
      this.props.fetchVideos();
    }
  }

  render() {

    let videos = this.props.videoList.slice(0,7);
        videos = videos.map(el => (
          <VideoListItem video={el}
            key={`video-list-item${el.id}`} />
        ));

    return(
      <div className='video-show-list-container'>
        <div className='suggested-show-videos'>You May Also Like</div>
        <div className='video-show-div'>
          <ul className='video-show-list'>
            {videos}
          </ul>
        </div>
      </div>

    );
  }
}

export default VideoShowList;
