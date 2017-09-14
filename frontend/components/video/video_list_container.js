import { connect } from 'react-redux';
import VideoList from './video_list';
import { fetchVideos } from '../../actions/video_actions';

const mapStateToProps = (state) => ({
  videoList: state.entities.videos.videoList,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchVideos: (searchTerm) => dispatch(fetchVideos(searchTerm)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
