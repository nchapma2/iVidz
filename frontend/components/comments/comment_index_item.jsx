import React from 'react';
import { Link } from 'react-router-dom';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    return(
      <li className='comment-item'>
        <img src={this.props.comment.author_avatar}></img>
        <div className='comment-div'>
          <div className='comment-header'>
            <Link to={`/api/users/${this.props.comment.author_id}`}>
              {this.props.comment.author_username}
            </Link>
            <p>Timestamp</p>
          </div>
          <p>{this.props.comment.body}</p>
          <div className='comment-footer'>
            <h5>Likes</h5>
            <h5>Like symbol</h5>
          </div>
        </div>
      </li>
    );
  }
}

export default CommentIndexItem;
