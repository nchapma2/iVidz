import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class CommentForm extends React.Component {
  constructor(props) {

    super(props);
    this.createVideo = this.props.createComment.bind(this);
    this.state = {
      body: ""
    };
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
        <form className='comment-form' onSubmit={this.createComment}>

          <textarea className='comment-body-input'
            rows='2'
            placeholder='Add a public comment...'
            value={this.state.body}
            onChange={this.update('body')}
            ></textarea>
          <button onClick={this.cancel}>Cancel</button>
          <input className='comment-submit' type='submit' value='Comment' />

        </form>
      </div>
    );
  }
}

export default CommentForm;
