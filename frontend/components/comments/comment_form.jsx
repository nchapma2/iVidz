import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: ""
    };
    this.cancel = this.cancel.bind(this);
    this.makeComment = this.makeComment.bind(this);
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

  makeComment(e) {
    e.preventDefault();
    if(Object.keys(this.props.currentUser).length === 0){
      this.props.history.push('/login');
    } else {
      const comment = Object.assign({}, this.state, { video_id: this.props.videoId});
      this.props.createComment(comment);
    }
    this.setState({
      body: ""
    });
  }

  render() {
    return(
      <div className='comment-form-container'>
        <h5 className='comment-count'>Comments &#9679; {this.props.commentCount}</h5>
        <div className='comment-form-div'>
            <div className='avatar-square-comment'>
              <img src={this.props.currentUser.avatar}></img>
            </div>
          <form className='comment-form' onSubmit={this.makeComment}>
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

export default withRouter(CommentForm);
