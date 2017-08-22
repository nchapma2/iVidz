import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const nullState = {
  currentUser: null,
  errors: [],
};

const SessionReducer = (state = nullState, action ) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
    const currentUser = action.currentUser;
      return merge({}, nullState, { currentUser });
    default:
      return state;
  }
};

export default SessionReducer;
