import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import VideoListItem from './video_list_item';

class SearchList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchVideos(this.props.searchTerm);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.searchTerm !== this.props.searchTerm){
      this.props.fetchVideos(nextProps.searchTerm);
    }
  }

  render() {
    let videos;
    if(this.props.videoList){
      videos = this.props.videoList.map(video => (
        <VideoListItem video={video}
          key={`video-list-item${video.id}`} />
      ));
    }

    return (
      <div className='search-list-container'>
        <div className='results'>Results</div>
        <div className='search-div'>
          <ul className='search-list'>
            {videos}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchList);
