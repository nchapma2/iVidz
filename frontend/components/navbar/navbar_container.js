import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchResults } from '../../actions/ui_actions';
import Navbar from './navbar';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  search: (searchTerm) => fetchResults(searchTerm)
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
