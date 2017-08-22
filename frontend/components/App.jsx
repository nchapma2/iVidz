import React from 'react';
import SessionFormContainer from './session_form/session_form_container';
import { Route } from 'react-router';

const App = () => (
  <div>
    <header>
      <h1>Welcome to uTube</h1>

    </header>
    <Route path='/login' component={SessionFormContainer}/>
    <Route path='/signup' component={SessionFormContainer}/>
  </div>
);

export default App;
