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

    let initial;
    if(this.props.currentVideo.uploader){
      initial = this.props.currentVideo.uploader.username.slice(0,1).toUpperCase();
    }

    return(
        <div className='video-player-div'>
          <video className='video-player' controls src={this.props.currentVideo.video}>
          </video>
          <br />
          <div className='video-details-1'>
            <h3 >{this.props.currentVideo.title}</h3>

            <div className='user-details-div'>
              <div className='avatar-circle video'>
                <span className='initials video'>{initial}</span>
              </div>
              {this.props.currentVideo.uploader &&
                <div className='user-details'>
                    <Link className='username-video'
                      to={`/users/${this.props.currentVideo.uploader.id}`}>{this.props.currentVideo.uploader.username}</Link>
                  <br/>
                  <div className='subscriber-div'>
                    <button className='subscribe-button'>Subscribe</button>
                    <div className='subscriber-count'>10</div>
                  </div>
                  <div className='view-count'>{this.props.currentVideo.views} views</div>
                </div>
              }
            </div>
          </div>
          <br/>
          <div className='video-details-2'>
            <h4>Published at</h4>
            <p>{this.props.currentVideo.description}</p>
            <div className='category-div'>
              <h5>Category:</h5>
              <p>{this.props.currentVideo.category}</p>
            </div>
          </div>
        </div>
    );
  }
}


export default VideoPlayer;
