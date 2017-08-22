import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session_api_util';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  // testing on window
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signup = APIUtil.signup;
  window.logout = APIUtil.logout;
  window.login = APIUtil.login;

  ReactDOM.render(<h1>Welcome to uTube</h1>, root);
});
