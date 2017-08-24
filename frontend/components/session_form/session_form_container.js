import { connect } from 'react-redux';

import { login,
  logout,
  signup,
  clearErrors,
  checkUsername
  } from '../../actions/session_actions';

import SessionForm from './session_form';

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUsers),
  errors: session.errors,
  page: session.page,
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    clearErrors: () => dispatch(clearErrors()),
    checkUsername: (username) => dispatch(checkUsername(username)),
    formType
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
