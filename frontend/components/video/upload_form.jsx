import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import keys from 'lodash/keys';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      category: "",
      video: "",
    };
    this.handleFile = this.handleFile.bind(this);
    this.publishVideo = this.publishVideo.bind(this);
  }

  publishVideo(e) {
    e.preventDefault();
    let formData = new FormData();
    Object.keys(this.state).forEach((key) => {
      formData.append(`video[${key}]`, this.state[key]);
    });
    this.props.createVideo(formData);
  }

  onDrop(file, error) {
    this.setState({
      title: "",
      description: "",
      category: "",
      video: file[0],
    });

    this.props.receiveFile();
  }


  handleFile(e) {
    e.preventDefault();
    this.setState({
      title: "",
      description: "",
      category: "",
      video: e.currentTarget.files[0],
    });
    this.props.receiveFile();
  }

  update(property) {
    return e => this.setState({
      [property]: e.currentTarget.value
    });
  }

  renderFileUpload() {
    if(this.props.page === 'upload'){
      return(
    <div className='upload-container-div'>
      <Dropzone className='dropzone' onDrop={this.onDrop.bind(this)}>
        <img alt='upload' className='upload-form-icon' src={window.upload}></img>
      </Dropzone>
      <div className='upload-text'>
        <h4>Select files to upload</h4>
        <br/>
        <h5>Or drag and drop video files</h5>
        <br/>
        <input type='file'
          className='upload-input'
          onChange={this.handleFile}
          />
      </div>
    </div>
  );} else if(this.props.page === 'details') {
    return(
      <div className='upload-form-div'>
        <form className='upload-form' onSubmit={this.publishVideo}>
          <input
            type="text"
            placeholder="Title"
            value={this.state.title}
            onChange={this.update('title')}
            />
          <input
            type="text"
            placeholder="Description"
            value={this.state.description}
            onChange={this.update('description')}
            />
          <select onChange={this.update('category')} className='category-dropdown'>
            <option value="auto">Auto & Vehicles</option>
            <option value="fashion">Beauty & Fashion</option>
            <option value="comedy">Comedy</option>
            <option value="education">Education</option>
            <option value="entertainment">Entertainment</option>
            <option value="film">Film & Animation</option>
            <option value="food">Food</option>
            <option value="gaming">Gaming</option>
            <option value="music">Music</option>
            <option value="people">People & Blogs</option>
            <option value="animals">Pets & Animals</option>
            <option value="science">Science & Technology</option>
            <option value="sports">Sports</option>
          </select>
          <input type='submit' value='PUBLISH' className='publish-input'/>
        </form>
      </div>
      );
    }
  }

  renderErrors() {
    return (
      <ul className='error-list-upload'>
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
    <div className='upload-god'>
      {this.renderFileUpload()}
      <br/>
      {this.props.errors &&
        this.renderErrors()
      }
      <br/>
    </div>
  );}
}

export default withRouter(UploadForm);
