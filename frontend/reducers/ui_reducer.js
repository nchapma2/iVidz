import { merge } from 'lodash';
import { RECEIVE_ERRORS, RECEIVE_FILE, RECEIVE_SINGLE_VIDEO } from '../actions/video_actions';
import { CHANGE_LOAD } from '../actions/ui_actions';

const nullState = {
  page: 'upload',
  errors: [],
  loading: false,
};

const uiReducer = ( state = nullState, action ) => {
  Object.freeze(state);

  switch(action.type) {
    case CHANGE_LOAD:
      let loading = !state.loading;
      return Object.assign({}, state, {loading});
    case RECEIVE_FILE:
      return Object.assign({}, nullState, { page: 'details' });
    case RECEIVE_ERRORS:
      return Object.assign({}, state, { errors: action.errors.responseJSON });
    default:
      return state;
  }
};

export default uiReducer;
