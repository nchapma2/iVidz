import { connect } from 'react-redux';
import VideoShowList from './video_show_list';
import { fetchVideos } from '../../actions/video_actions';

const mapStateToProps = (state) => ({
  videoList: state.entities.videos.videoList,
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  fetchVideos: () => dispatch(fetchVideos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoShowList);
