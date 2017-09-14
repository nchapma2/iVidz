import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class VideoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.location = props.location.pathname === '/' ? ' home' : "";
  }

  render() {
    return(
      <li className={`video-list-item` + this.location}>
        <Link className='video-link'
          to={`/videos/${this.props.video.id}`}>
          <img className='video-thumbnail'
            src={this.props.video.thumb}
          />
        </Link>
        <div className='video-item-details'>
          <div className='video-item-title'>{this.props.video.title}</div>
          <div className='video-item-uploader'>{this.props.video.uploader}</div>
          <div className='video-item-footer'>
            <div className='video-item-views'>{this.props.video.views} views</div>
            <div className='video-item-date'>&#9679; {this.props.video.posted} ago</div>
          </div>
        </div>
      </li>
    );
  }
}

export default withRouter(VideoListItem);
