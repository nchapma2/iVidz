import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
    };
    this.guestLogin = this.guestLogin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  guestLogin() {
    const user = {
      username: "guestAccount",
      password: "hunter12",
    };
    this.props.processForm(user);
  }

  update(property) {
    return e => this.setState({
      [property]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    if(this.props.page === 'user' && this.props.formType === 'login'){
      this.props.checkUsername(this.state.username);
    } else {
      const user = Object.assign({}, this.state);
      this.props.processForm(user);
      }

  }

  navLink() {
    if(this.props.formType === 'login'){
      return <Link to='/signup' onClick={this.props.clearErrors}>Sign Up</Link>;
    } else {
      return <Link to='/login' onClick={this.props.clearErrors}>Login</Link>;
    }
  }

  formHead() {
    if(this.props.formType === 'login'){
      return (
        <div className='login-form-head'>
          <img alt='iVidz' className='session-logo' src={window.logo}></img>
          <br/>
          <br/>
          {this.props.page === 'user' &&
            <h3>Sign in</h3>
          }
          {this.props.page === 'user' &&
            <h5>to continue to iVidz</h5>
          }

          {this.props.page === 'password' &&
            <h3>Welcome, {this.state.username}</h3>
          }
          {this.props.page === 'password' &&
            <button className='cancel-button'
              onClick={this.props.cancel}
              value="Wrong Username?">Not you?</button>
          }
          <br/>
        </div>
      );} else {
      return(
        <div className='login-form-head'>
          <h3>Sign Up</h3>
          <br/>
          <h5>to continue to iVidz</h5>
          <br/>
        </div>
      );
    }
  }

  renderSignup() {
    if(this.props.formType === 'signup'){
      return(
        <div className='signup-div'>
          <div className='input-div'>
            <label className='field-label'>
              Email
            </label>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className='login-field'
                placeholder='Enter your email'
                required
                />
          </div>
          <br/>
            <div className='input-div'>
              <label className='field-label'>
                Username
              </label>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className='login-field'
                placeholder='Enter your username'
                required
              />
            </div>
            <br/>
              <div className='input-div'>
                <label className='field-label'>
                  Password
                </label>
                  <input type="password"
                    placeholder="Enter your password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className='login-field'
                    required
                    />
              </div>
          </div>
      );
    }
  }

  renderForm() {
    if(this.props.page === 'user' && this.props.formType === 'login'){
      return(
        <div className='input-div'>
          <label className='field-label'>
            Username
          </label>
          <input type="text"
            value={this.state.username}
            onChange={this.update('username')}
            className='login-field'
            placeholder='Enter your username'
            required
          />
        </div>
      );
    } else if(this.props.formType === 'login' && this.props.page === 'password') {
      return(
        <div className='input-div'>
          <label className='field-label'>
            Password
          </label>
            <input type="password"
              placeholder="Enter your password"
              value={this.state.password}
              onChange={this.update('password')}
              className='login-field'
              required
            />
          </div>
      );
    }
  }

  renderSubmit() {
    if(this.props.formType === 'signup'){
      return(
        <input type='submit' value='Sign Up!' className='submit-button'/>
      );
    } else if(this.props.page === 'user'){
      return(
        <input type='submit' value='NEXT' className='submit-button'/>
        );
    } else if(this.props.page === 'password') {
      return(
        <input type='submit' value='Log In!' className='submit-button'/>
        );
    }
  }

  renderErrors() {
    return (
      <ul className='error-list'>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return(
      <div className='login-form-container'>
        {this.props.formType === 'login' &&
          <button className='submit-button guest' onClick={this.guestLogin}>Demo Login</button>
        }
        {this.formHead()}
        <br/>
        <br/>
        <form onSubmit={this.handleSubmit} className='login-form'>
          <br/>
          {this.renderSignup()}
          <br/>
          {this.renderForm()}
          <br/>
          {this.props.errors &&
            this.renderErrors()
          }
          <br/>
          <div className='form-footer'>
            {this.navLink()}
            {this.renderSubmit()}
          </div>
        </form>


      </div>
    );
  }
}

export default withRouter(SessionForm);
