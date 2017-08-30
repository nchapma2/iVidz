import { connect } from 'react-redux';
import VideoPlayer from './video_player';
import { fetchSingleVideo } from '../../actions/video_actions';
import { createLike } from '../../actions/like_actions';

const mapStateToProps = (state, { match }) => ({
  videoId: match.params.videoId,
  currentVideo: state.entities.videos.currentVideo
});

const mapDispatchToProps = dispatch => ({
  fetchSingleVideo: (videoId) => dispatch(fetchSingleVideo(videoId)),
  createLike: (like) => dispatch(createLike(like))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);
