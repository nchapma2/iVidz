import {
  RECEIVE_SINGLE_COMMENT,
  RECEIVE_COMMENTS
} from '../../actions/comment_actions';
import { RECEIVE_SINGLE_VIDEO } from '../../actions/video_actions';

import { merge } from 'lodash';

const nullState = {
};

const CommentsReducer = ( state = nullState, action ) => {

  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SINGLE_VIDEO:
      return action.video.comments;
    case RECEIVE_SINGLE_COMMENT:
      return Object.assign( {}, state, { [action.comment.id]: action.comment });
    default:
      return state;
  }
};

export default CommentsReducer;
