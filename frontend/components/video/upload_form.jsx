import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Dropzone from 'react-dropzone';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      category: "",
      video: "",
    };
  }
  onDrop(hello, goodbye) {

  }

  handleFile() {

  }

  renderFileUpload() {
    return(
    <div className='upload-container-div'>
      <Dropzone className='dropzone' onDrop={this.onDrop}>
        <img alt='upload' className='upload-form-icon' src={window.upload}></img>
        <h4>Select files to upload</h4>
        <br/>
        <h5>Or drag and drop video files</h5>
        <br/>
        <input type='file'
          className='upload-input'
          onChange={this.handleFile}
          />
      </Dropzone>
    </div>
  )}

  renderFileForm () {
    return(
      <div className='upload-form-div'>

      </div>
    );
  }

  render() {
    return(
      {this.state.page === 'file' &&
        this.renderFileupload()
      }
    );
  }
}

export default withRouter(UploadForm);
