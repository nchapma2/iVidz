import React from 'react';
import { Link } from 'react-router-dom';


class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: false,
      search: "",
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown(e) {
    e.preventDefault();
    const setClass = !this.state.active;
    this.setState({ active: setClass });
  }

  search(e) {
    e.preventDefault();
    debugger
  }

  update() {
    e.preventDefault();
    e.currentTarget
  }

  greeting() {

    if(this.props.currentUser){
      return (
        <div className='greeting-div'>
          <div className='avatar-circle user-dropdown' onClick={this.toggleDropdown} >
            <span className='initials'>{this.props.currentUser.username.slice(0,1).toUpperCase()}</span>
            <div className={this.state.active ? 'active' : 'inactive'}>
              <Link className='email-link'
                to={`/api/users/${this.props.currentUser.id}`}>{this.props.currentUser.email}
              </Link>
              <div className='dropdown-button-container'>
                <button className='add-account-button'>Add Account</button>
                <button className='logout-button' onClick={this.props.logout}>Log Out</button>
              </div>
            </div>
          </div>
          <br/>
        </div>
      );
    } else {
      return (
        <div className='navbar-session-links'>
          <Link className='navbar-link' to='/login'>Sign In</Link>
        </div>
      );
    }
  }

  render() {
    return(
    <div className='navbar'>
      <input className='hamburger' type="image"
        src="https://s3.amazonaws.com/ividz-dev/seeds/hamburger.png" />
      <Link to="/" className='home-link'>
        <img alt='iVidz' className='logo' src={window.logo}></img>
      </Link>
      <div className='searchbar-div'>
        <form className='search-form' onSubmit={this.search}>
          <input type='text'
            placeholder='Search'
            className='search-input'
            />
          <div className='search-icon'>
            <input className='search-button' type='submit' value=""></input>
          </div>
        </form>
      </div>
      <Link to='/upload' className='upload-link'>
        <img alt='upload' className='upload-icon' src={window.upload}></img>
      </Link>
      { this.greeting() }
    </div>
    );
  }
}

export default Navbar;
