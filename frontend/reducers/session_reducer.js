import { RECEIVE_ERRORS,
    RECEIVE_CURRENT_USER,
    RECEIVE_USER_SUCCESS,
    RECEIVE_CANCEL
    } from '../actions/session_actions';
import { RECEIVE_SUBSCRIPTION, DESTROY_SUBSCRIPTION } from '../actions/subscription_actions';
import { merge } from 'lodash';

const nullState = {
  currentUser: null,
  errors: [],
  page: 'user'
};

const SessionReducer = ( state = nullState, action ) => {
  Object.freeze(state);
  let newState;
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
    case RECEIVE_SUBSCRIPTION:
      newState = merge({}, state);
      newState.currentUser.subscribed_channels.push(action.subscription.subscribed_id);
      newState.currentUser.subscriptions.push(action.subscription);
      return newState;
    case DESTROY_SUBSCRIPTION:
      newState = merge({}, state);
      let subscribed_channels = newState.currentUser.subscribed_channels
        .filter(id => id !== action.subscription.subscribed_id);
      let subscriptions = newState.currentUser.subscriptions
        .filter(sub => sub.id !== action.subscription.id);
      newState.currentUser.subscribed_channels = subscribed_channels;
      newState.currentUser.subscriptions = subscriptions;
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
