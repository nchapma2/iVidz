import React from 'react';
import { Link } from 'react-router-dom';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleLike() {
    
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
              {this.props.comment.author_username}
            </Link>
            <p>Timestamp</p>
          </div>
          <p className='comment-body'>{this.props.comment.body}</p>
          <div className='comment-footer'>
            <h5>Likes</h5>
            <img onClick={this.handleLike}
              className='like-symbol' src="https://s3.amazonaws.com/ividz-dev/seeds/thumbs-up-512.jpg" />
          </div>
        </div>
      </li>
    );
  }
}

export default CommentIndexItem;
