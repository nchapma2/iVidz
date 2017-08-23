import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      formPage: 1
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(property) {
    return e => this.setState({
      [property]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    if(this.state.formPage === 1 && this.props.formType === 'login'){
      return(
        this.setState({
          email: this.state.email,
          username: this.state.username,
          password: this.state.password,
          formPage: 2
        })
      );
    } else {
      const user = Object.assign({}, this.state);
      this.props.processForm(user);
      }
  }

  navLink() {
    if(this.props.formType === 'login'){
      return (
        <div className='login-form-head'>
          <h1>iVidz</h1>
          <br/>
          <h4>Please log in</h4>
          <br/>
          <br/>
          <Link to='/signup'>Sign Up Instead!</Link>
        </div>
      );} else {
      return(
        <div className='login-form-head'>
          <h3>Sign Up</h3>
          <br/>
          <h5>to continue to iVidz</h5>
          <br/>
          <Link to='/login'>Login Instead!</Link>
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
              Email:
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
                Username:
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
                  Password:
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
    if(this.state.formPage === 1 && this.props.formType === 'login'){
      return(
        <div className='input-div'>
          <label className='field-label'>
            Username:
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
    } else if(this.props.formType === 'login' && this.state.formPage === 2) {
      return(
        <div className='input-div'>
          <label className='field-label'>
            Password:
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
    } else if(this.state.formPage === 1){
      return(
        <input type='submit' value='Next' className='submit-button'/>
        );
    } else if(this.state.formPage === 2) {
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
        {this.navLink()}
        <br/>
        <br/>
        <form onSubmit={this.handleSubmit} className='login-form'>
          <br/>
          {this.renderSignup()}
          <br/>
          {this.renderForm()}
          <br/>
          {this.renderErrors()}
          <br/>
          {this.renderSubmit()}
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
