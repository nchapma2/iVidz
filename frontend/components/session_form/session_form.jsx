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
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(() => {
        this.setState({username: "", email: "", password: ""});
      });
  }

  navLink() {
    if(this.props.formType === 'login'){
      return (
        <div className='login-form-head'>
          <h3>Welcome Back to uTube!</h3>
          <h4>Please log in</h4>
          <br/>
          <Link to='/signup'>Sign Up Instead!</Link>
        </div>
      );} else {
      return(
        <div className='login-form-head'>
          <h3>Welcome to uTube!</h3>
          <h4>Please sign up</h4>
          <br/>
          <Link to='/login'>Login Instead!</Link>
        </div>
      );
    }
  }

  renderEmail() {
    if(this.props.formType === 'signup'){
      return(
        <label className='field-label'>
          <span>Email: </span>
          <input type="text"
            value={this.state.email}
            onChange={this.update('email')}
            className='login-field'
            />
        </label>
      );
    }
  }

  renderErrors() {
    return (
      <ul>
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
        <form onSubmit={this.handleSubmit} className='login-form'>
          <br/>
          {this.renderEmail()}
          <br/>
          <label className='field-label'>
            <span>Username: </span>
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              className='login-field'
              />
          </label>
          <br/>
          <label className='field-label'>
            <span>Password (at least six characters): </span>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className='login-field'
              />
          </label>
          <br/>
          <input type='submit' value='Submit'/>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
