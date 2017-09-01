import React from 'react';
import { Link, withRouter } from 'react-router-dom';



class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.handleVideoLike = this.handleVideoLike.bind(this);
    this.renderLike = this.renderLike.bind(this);
    this.handleVideoLikeDelete = this.handleVideoLikeDelete.bind(this);
    this.renderSubscribe = this.renderSubscribe.bind(this);
    this.handleSubscription = this.handleSubscription.bind(this);
    this.handleSubscriptionDelete = this.handleSubscriptionDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchSingleVideo(this.props.videoId)
      .then(() => this.props.fetchComments(this.props.videoId));
  }

  componentWillReceiveProps(nextProps){
    if(this.props.videoId !== nextProps.match.params.videoId){
      this.props.fetchSingleVideo(nextProps.match.params.videoId)
        .then(() => this.props.fetchComments(this.props.videoId));
    }
  }

  handleVideoLike(e) {
    e.preventDefault();
    this.props.createLike({
      likeable_type: 'Video',
      likeable_id: this.props.videoId
    });
  }

  handleVideoLikeDelete(e) {
    e.preventDefault();
    let likeId;
    this.props.currentVideo.video.likes.forEach(like => {
      if(this.props.currentUser.id === like.user_id){
        likeId = like.id;
      }
    });
    this.props.destroyLike(likeId);
  }

  handleSubscription(e) {
    e.preventDefault();
    this.props.createSubscription({
      subscribed_id: this.props.currentVideo.video.uploader_id
    });
  }

  handleSubscriptionDelete(e) {
    e.preventDefault();

    let subId;
    this.props.currentUser.subscriptions.forEach(sub => {
      if(this.props.currentUser.id === sub.subscriber_id){
        subId = sub.id;
      }
    });
    this.props.destroySubscription(subId);
  }

  renderSubscribe() {
    if(Object.keys(this.props.currentUser).length !== 0){
      if(this.props.currentUser.subscribed_channels.includes(this.props.currentVideo.video.uploader_id)){
        return(
          <div className='subscriber-div'>
            <button onClick={this.handleSubscriptionDelete}
              className='subscribe-button-unsub'>Unsubscribe</button>
            <div className='subscriber-count'>{this.props.currentVideo.video.uploader_sub_count}</div>
          </div>
        );
      } else {
        return(
          <div className='subscriber-div'>
            <button onClick={this.handleSubscription}
              className='subscribe-button'>Subscribe</button>
            <div className='subscriber-count'>{this.props.currentVideo.video.uploader_sub_count}</div>
          </div>
        );
      }
    }
  }



  renderLike() {

    let liker_ids = this.props.currentVideo.video.likes.map(like => {
      return like.user_id;
    });

      if(liker_ids.includes(this.props.currentUser.id)){
        return(
          <div className='like-div'>
            <div className='like-count-video'>{this.props.currentVideo.video.like_ids.length}</div>
            <img onClick={this.handleVideoLikeDelete}
              className='like-symbol-video' src="https://s3.amazonaws.com/ividz-dev/thumbsup.png" />
          </div>
        );
      } else {
        return(
          <div className='like-div'>
            <div className='like-count-video-unliked'>{this.props.currentVideo.video.like_ids.length}</div>
            <img onClick={this.handleVideoLike}
              className='like-symbol-video-unliked' src="https://s3.amazonaws.com/ividz-dev/thumbsup.png" />
          </div>
        );
      }
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
              <div className='video-title'>{this.props.currentVideo.video.title}</div>
              {this.renderLike()}
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
                    to={`/users/${this.props.currentVideo.video.uploader_id}`}>{this.props.currentVideo.video.uploader_username}
                  </Link>
                  <br/>
                  {this.renderSubscribe()}
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
              <h4>Published {this.props.currentVideo.video.posted} ago</h4>
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
