import { merge } from 'lodash';
import { RECEIVE_ERRORS, RECEIVE_FILE } from '../actions/video_actions';

const nullState = {
  page: 'upload',
  errors: []
};

const uiReducer = ( state = nullState, action ) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_FILE:
      return Object.assign({}, nullState, { page: 'details' });
    case RECEIVE_ERRORS:
      return Object.assign({}, state, { errors: action.errors.responseJSON });
    default:
      return state;
  }
};

export default uiReducer;
