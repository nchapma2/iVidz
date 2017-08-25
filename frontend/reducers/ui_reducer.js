import { merge } from 'lodash';
import { RECEIVE_ERRORS, RECEIVE_FILE, RECEIVE_SINGLE_VIDEO } from '../actions/video_actions';

const nullState = {
  page: 'upload',
  errors: [],
  currentVideo: null
};

const uiReducer = ( state = nullState, action ) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_FILE:
      return Object.assign({}, nullState, { page: 'details' });
    case RECEIVE_ERRORS:
      return Object.assign({}, state, { errors: action.errors.responseJSON });
    case RECEIVE_SINGLE_VIDEO:
      return Object.assign({}, state, { currentVideo: action.video });
    default:
      return state;
  }
};

export default uiReducer;
