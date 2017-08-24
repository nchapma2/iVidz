import { RECEIVE_ERRORS,
    RECEIVE_CURRENT_USER,
    RECEIVE_USER_SUCCESS,
    RECEIVE_CANCEL
    } from '../actions/session_actions';
import { merge } from 'lodash';

const nullState = {
  currentUser: null,
  errors: [],
  page: 'user'
};

const SessionReducer = (state = nullState, action ) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, nullState, { currentUser });
    case RECEIVE_ERRORS:
      return Object.assign({}, state, { errors: action.errors.responseJSON });
    case RECEIVE_USER_SUCCESS:
      return Object.assign({}, nullState, { page: 'password' } );
    case RECEIVE_CANCEL:
      return nullState;
    default:
      return state;
  }
};

export default SessionReducer;
