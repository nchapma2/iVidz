import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      active: false
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown(e) {
    // display none in CSS
    // add onclick handler, have state for active class or not
    e.preventDefault();
    const setClass = !this.state.active;
    this.setState({ active: setClass });
  }

  greeting() {

    if(this.props.currentUser){
      return (
        <div className='greeting-div'>
          <div className='avatar-circle user-dropdown' onClick={this.toggleDropdown} >
            <span className='initials'>{this.props.currentUser.username.slice(0,1)}</span>
            <div className={this.state.active ? 'active' : 'inactive'}>
              <Link to={`/api/users/${this.props.currentUser.id}`}>{this.props.currentUser.email}</Link>
              <button className='logout-button' onClick={this.props.logout}>Log Out</button>
            </div>
          </div>
          <br/>
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
      <Link to='/upload'>
        <img alt='upload' className='upload-icon' src={window.upload}></img>
      </Link>
      { this.greeting() }
    </div>
    );
  }
}

export default Navbar;
