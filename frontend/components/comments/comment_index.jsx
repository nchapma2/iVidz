import React from 'react';
import CommentIndexItem from './comment_index_item';
import { fetchComments } from '../../actions/comment_actions';
import { connect } from 'react-redux';
import { allComments } from '../../reducers/selectors';
import { withRouter } from 'react-router-dom';
import { createLike, destroyLike } from '../../actions/like_actions';

const mapStateToProps = (state, ownProps) => {
  return({
    comments: allComments(state.entities.comments),
    videoId: ownProps.videoId,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => ({
  fetchComments: videoId => dispatch(fetchComments(videoId)),
  destroyLike: like => dispatch(destroyLike(like)),
  createLike: like => dispatch(createLike(like))
});


class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let comments;
    if(this.props.comments){
      comments = this.props.comments.map(comment => (
        <CommentIndexItem comment={comment}
          createLike={this.props.createLike}
          destroyLike={this.props.destroyLike}
          currentUser={this.props.currentUser}
          key={`comment-list-item${comment.id}`}/>
      ));
    }

    return(
      <div className='comment-index-div'>
        <ul className='comment-index'>
            {comments}
        </ul>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentIndex));
