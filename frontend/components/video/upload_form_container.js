import { connect } from 'react-redux';
import { createVideo } from '../../util/video_util';

import UploadForm from './upload_form';

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
  createVideo: (video) => dispatch(createVideo(video))
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadForm);
