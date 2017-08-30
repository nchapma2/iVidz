import React from 'react';
import CommentIndexItem from './comment_index_item';
import { fetchComments } from '../../actions/comment_actions';
import { connect } from 'react-redux';
import { allComments } from '../../reducers/selectors';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ entities }, ownProps) => {
  return({
    comments: allComments(entities.comments),
    videoId: ownProps.videoId
  });
};

const mapDispatchToProps = dispatch => ({
  fetchComments: videoId => dispatch(fetchComments(videoId))
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