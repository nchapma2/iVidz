import React from 'react';
import { Link } from 'react-router-dom';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleCommentLike = this.handleCommentLike.bind(this);
    this.renderLike = this.renderLike.bind(this);
    this.handleCommentLikeDelete = this.handleCommentLikeDelete.bind(this);
  }

  handleCommentLike(e) {
    e.preventDefault();
    this.props.createLike({
      likeable_type: 'Comment',
      likeable_id: this.props.comment.id
    });
  }

  handleCommentLikeDelete(e) {

    e.preventDefault();
    let likeId;
    this.props.comment.likes.forEach(like => {
      if(this.props.currentUser.id === like.user_id){
        likeId = like.id;
      }
    });
    this.props.destroyLike(likeId);
  }

  renderLike() {
    let liker_ids = this.props.comment.likes.map(like => {
      return like.user_id;
    });

    if(liker_ids.includes(this.props.currentUser.id)){
      return(
        <div className='comment-footer'>
            <div className='like-count-comment'>{this.props.comment.like_ids.length}</div>
          <img onClick={this.handleCommentLikeDelete}
            className='like-symbol' src="https://s3.amazonaws.com/ividz-dev/thumbsup.png" />
        </div>
      );
    } else {
      return(
        <div className='comment-footer'>
          <div className='like-count-comment-unliked'>{this.props.comment.like_ids.length}</div>
          <img onClick={this.handleCommentLike}
            className='like-symbol-unliked' src="https://s3.amazonaws.com/ividz-dev/thumbsup.png" />
        </div>
      );
    }
  }

  render() {
    return(
      <li className='comment-item'>
        <img className='comment-avatar'
          src={this.props.comment.author_avatar} />
        <div className='comment-div'>
          <div className='comment-header'>
            <Link className='user-link'
              to={`/api/users/${this.props.comment.author_id}`}>
              {this.props.comment.author}
            </Link>
            <div className='timestamp-comment'>{this.props.comment.posted}</div>
          </div>
          <div className='comment-body'>{this.props.comment.body}</div>
          {this.renderLike()}
        </div>
      </li>
    );
  }
}

export default CommentIndexItem;
