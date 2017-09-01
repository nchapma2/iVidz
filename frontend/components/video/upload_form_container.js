import { connect } from 'react-redux';
import { receiveFile, createVideo } from '../../actions/video_actions';
import { changeLoad } from '../../actions/ui_actions';

import UploadForm from './upload_form';



const mapStateToProps = ({ ui }) => ({
  errors: ui.errors,
  page: ui.page,
  loading: ui.loading
});

const mapDispatchToProps = (dispatch) => ({
  createVideo: (video) => dispatch(createVideo(video)),
  receiveFile: () => dispatch(receiveFile()),
  changeLoad: () => dispatch(changeLoad())
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadForm);
