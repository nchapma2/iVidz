import React from 'react';
import SessionFormContainer from './session_form/session_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import NavbarContainer from './navbar/navbar_container';


const App = () => (
  <div>
    <header className='header'>
      <NavbarContainer />
    </header>
    <Route exact path='/' />
    <AuthRoute path='/login' component={SessionFormContainer}/>
    <AuthRoute path='/signup' component={SessionFormContainer}/>
  </div>
);

export default App;
