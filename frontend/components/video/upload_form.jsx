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
    if(!!this.props.errors){
      this.props.history.push('/');
    }
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
            <option selected disabled>Please select a category</option>
            <option value="Auto & Vehicles">Auto & Vehicles</option>
            <option value="Beauty & Fashion">Beauty & Fashion</option>
            <option value="Comedy">Comedy</option>
            <option value="Education">Education</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Film & Animation">Film & Animation</option>
            <option value="Food">Food</option>
            <option value="Gaming">Gaming</option>
            <option value="Music">Music</option>
            <option value="People & Blogs">People & Blogs</option>
            <option value="Pets & Animals">Pets & Animals</option>
            <option value="Science & Technology">Science & Technology</option>
            <option value="Sports">Sports</option>
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
