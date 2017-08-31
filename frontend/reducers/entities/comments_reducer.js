import {
  RECEIVE_SINGLE_COMMENT,
  RECEIVE_COMMENTS
} from '../../actions/comment_actions';
import { RECEIVE_SINGLE_VIDEO } from '../../actions/video_actions';
import { RECEIVE_LIKE, DESTROY_LIKE } from '../../actions/like_actions';

import { merge } from 'lodash';

const nullState = {
};

const CommentsReducer = ( state = nullState, action ) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_COMMENTS:
      return action.comments;
    case RECEIVE_SINGLE_COMMENT:
      return Object.assign( {}, state, { [action.comment.id]: action.comment });
    case RECEIVE_LIKE:
      newState = merge({}, state);
      if(action.like.likeable_type !== 'Comment'){
        return state;
      }
      newState[action.like.likeable_id].like_ids.push(action.like.id);
      newState[action.like.likeable_id].likes.push(action.like);
      return newState;
    case DESTROY_LIKE:
      newState = merge({}, state);
      if(action.like.likeable_type !== 'Comment'){
        return state;
      }
      let like_ids = newState[action.like.likeable_id].like_ids.filter(id => id !== action.like.id);
      let likes = newState[action.like.likeable_id].likes.filter(like => like.id !== action.like.id);
      newState[action.like.likeable_id].like_ids = like_ids;
      newState[action.like.likeable_id].likes = likes;
      return newState;
    default:
      return state;
  }
};

export default CommentsReducer;
