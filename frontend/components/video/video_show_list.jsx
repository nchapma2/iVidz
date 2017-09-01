import React from 'react';
import { Link } from 'react-router-dom';
import VideoListItem from './video_list_item';

class VideoShowList extends React.Component {
  constructor(props) {
    super(props);
    this.shuffle = this.shuffle.bind(this);

  }

  componentDidMount() {
    this.props.fetchVideos();
  }

  shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

  render() {
      let videos;
      if(this.props.videoList){

      videos = this.shuffle(this.props.videoList).slice(0,5);
        videos = videos.map(el => (
          <VideoListItem video={el}
            key={`video-list-item${el.id}`} />
        ));
      }

    return(
      <div className='video-show-list-container'>
        <div className='suggested-show-videos'>Suggested Videos</div>
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
