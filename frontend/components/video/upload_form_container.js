import { connect } from 'react-redux';
import { receiveFile, createVideo } from '../../actions/session_actions';

import UploadForm from './upload_form';

const mapStateToProps = ({ ui }) => ({
  errors: ui.errors,
  page: ui.page
});

const mapDispatchToProps = (dispatch) => ({
  createVideo: (video) => dispatch(createVideo(video)),
  receiveFile: (videoFile) => dispatch(receiveFile(videoFile))
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadForm);
