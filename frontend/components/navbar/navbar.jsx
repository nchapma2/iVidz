import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

  constructor(props){
    super(props);
  }

  greeting() {

    if(this.props.currentUser){
      return (
        <div className='greeting-div'>
          <div className='avatar-circle user-dropdown' >
            <span className='initials'>{this.props.currentUser.username.slice(0,1)}</span>
          </div>
          <br/>
          <button className='logout-button' onClick={this.props.logout}>Log Out</button>
        </div>
      );
    } else {
      return (
        <div className='navbar-session-links'>
          <Link to='/login'>Log In</Link>
          <Link to='/signup'>Sign Up</Link>
        </div>
      );
    }
  }

  render() {
    return(
    <div className='navbar'>
      <input className='hamburger' type="image"
        src="http://estes-park.com/sites/all/themes/estesparktwo/images/hamburger.png" />
      <h1>iVidz</h1>
      <div>Logo Here</div>
      <input type='text'
        placeholder='Search'
        />
      { this.greeting() }
    </div>
    );
  }
}

export default Navbar;
