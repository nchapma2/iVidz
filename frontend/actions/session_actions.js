import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_USER_SUCCESS = 'RECEIVE_USER_SUCCESS';
export const RECEIVE_CANCEL = 'RECEIVE_CANCEL';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: RECEIVE_ERRORS,
  errors: []
});

export const receiveUserSuccess = () => ({
  type: RECEIVE_USER_SUCCESS,
});

export const receiveCancel = () => ({
  type: RECEIVE_CANCEL
});

export const cancel = dispatch => {
  dispatch(receiveCancel());
};

export const checkUsername = (username) => dispatch => (
  APIUtil.checkUsername(username)
    .then(() => dispatch(receiveUserSuccess()),
    errors => dispatch(receiveErrors(errors)))
);

export const signup = user => dispatch => (
  APIUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors)))
);

export const login = user => dispatch => (
  APIUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors)) )
);

export const logout = () => dispatch => {
  APIUtil.logout()
    .then(user => dispatch(receiveCurrentUser(null)));
};
