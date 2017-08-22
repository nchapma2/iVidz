import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.signup = APIUtil.signup;
  window.logout = APIUtil.logout;
  window.login = APIUtil.login;
  ReactDOM.render(<h1>Welcome to uTube</h1>, root);
});
