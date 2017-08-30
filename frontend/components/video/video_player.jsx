import React from 'react';
import { Link, withRouter } from 'react-router-dom';



class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.handleVideoLike = this.handleVideoLike.bind(this);
  }

  componentDidMount() {
    this.props.fetchSingleVideo(this.props.videoId);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.videoId !== nextProps.match.params.videoId){
      this.props.fetchSingleVideo(nextProps.match.params.videoId);
    }
  }

  handleVideoLike(e) {
    e.preventDefault();
    this.props.createLike({
      likeable_type: 'Video',
      likeable_id: this.props.videoId
    });
  }

  render() {

    return(

        <div className='video-player-div'>
          {Object.keys(this.props.currentVideo).length !== 0 &&
            <video className='video-player' controls src={this.props.currentVideo.video.video}>
            </video>
          }
          <br />
          <div className='video-details-1'>
          {Object.keys(this.props.currentVideo).length !== 0 &&
            <div className='detail-1-header'>
              <h3>{this.props.currentVideo.video.title}</h3>
              <div className='like-div'>
                <div className='like-count-video'>{this.props.currentVideo.video.like_ids.length}</div>
                <img onClick={this.handleVideoLike}
                  className='like-symbol-video' src="https://s3.amazonaws.com/ividz-dev/thumbsup.png" />
              </div>
            </div>
            }
            <div className='user-details-div'>
              <div className='avatar-square-video'>
                {Object.keys(this.props.currentVideo).length !== 0 &&
                  <img className='uploader-avatar' src={this.props.currentVideo.video.uploader_avatar} />
                }
              </div>
              {Object.keys(this.props.currentVideo).length !== 0 &&
                <div className='user-details'>
                    <Link className='username-video'
                      to={`/users/${this.props.currentVideo.video.uploader.id}`}>{this.props.currentVideo.video.uploader.username}</Link>
                  <br/>
                  <div className='subscriber-div'>
                    <button className='subscribe-button'>Subscribe</button>
                    <div className='subscriber-count'>10</div>
                  </div>
                </div>
              }
              {Object.keys(this.props.currentVideo).length !== 0 &&
                <div className='view-count'>{this.props.currentVideo.video.views} views</div>
                }
            </div>
          </div>
          <br/>
          {Object.keys(this.props.currentVideo).length !== 0 &&
            <div className='video-details-2'>
              <h4>Published at</h4>
              <p>{this.props.currentVideo.video.description}</p>
              <div className='category-div'>
                <h5>Category:</h5>
                <p>{this.props.currentVideo.video.category}</p>
              </div>
            </div>
          }
        </div>
    );
  }
}


export default VideoPlayer;
