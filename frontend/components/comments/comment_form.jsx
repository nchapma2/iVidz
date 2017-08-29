import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.createVideo = this.props.createComment.bind(this);
    this.state = {
      body: ""
    };
    this.cancel = this.cancel.bind(this);
  }

  cancel() {
    this.setState({
      body: "",
    });
  }

  update(property) {
    return e => this.setState({
      [property]: e.currentTarget.value
    });
  }


  render() {

    return(
      <div className='comment-form-container'>
        <h5>COMMENTS &#9679; COUNT</h5>
        <div className='comment-form-div'>
            <div className='avatar-square-comment'>
              <span className='initials-comment'>{this.props.currentUser.username.slice(0,1).toUpperCase()}</span>
            </div>
          <form className='comment-form' onSubmit={this.createComment}>
            <textarea className='comment-body-input'
              rows='2'
              placeholder='Add a public comment...'
              value={this.state.body}
              onChange={this.update('body')}
              ></textarea>
            <div className='comment-button-div'>
              <button className='comment-cancel' onClick={this.cancel}>Cancel</button>
              <input className='comment-submit' type='submit' value='Comment' />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CommentForm;
