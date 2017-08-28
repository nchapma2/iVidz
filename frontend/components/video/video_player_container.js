import { connect } from 'react-redux';
import VideoPlayer from './video_player';
import { fetchSingleVideo } from '../../actions/video_actions';

const mapStateToProps = (state, { match }) => ({
  videoId: match.params.videoId,
  currentVideo: state.entities.videos.currentVideo
});

const mapDispatchToProps = dispatch => ({
  fetchSingleVideo: (videoId) => dispatch(fetchSingleVideo(videoId))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);
