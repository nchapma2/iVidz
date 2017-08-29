import {
  RECEIVE_SINGLE_COMMENT,
  RECEIVE_COMMENTS
} from '../../actions/comment_actions';

import { merge } from 'lodash';

const nullState = {
  comments: {},
};

const CommentsReducer = ( state = nullState, action ) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_COMMENTS:
      return Object.assign( {}, nullState, { comments: action.comments });
    case RECEIVE_SINGLE_COMMENT:
      return Object.assign( {}, state, { [action.comment.id]: action.comment });
    default:
      return state;
  }
};

export default CommentsReducer;
