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
          <h2>Hello, {this.props.currentUser.username}</h2>
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
      <p className='hamburger-dropdown'>HamburgerButtonDropdown</p>
      <h1>iVidz</h1>
      <div>Logo Here</div>
      <span>SearchBar</span>
      { this.greeting() }
    </div>
    );
  }
}

export default Navbar;
