import { connect } from 'react-redux';
import SearchList from './search_list';
import { fetchVideos } from '../../actions/video_actions';

const mapStateToProps = state => ({
  videoList: state.entities.videos.videoList,
  currentUser: state.session.currentUser,
  searchTerm: state.ui.searchTerm
});

const mapDispatchToProps = dispatch => ({
  fetchVideos: (searchTerm) => dispatch(fetchVideos(searchTerm)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchList);
