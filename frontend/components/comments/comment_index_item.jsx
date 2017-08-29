import React from 'react';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    return(
      <li className='comment-item'>
        <img src={this.props.comment.author.avatar}></img>
      </li>

    );
  }

}
