import { connect } from 'react-redux';

import LoginPage from '../components/LoginPage';
import { authenticateAndLogin } from '../actions/account';

const mapStateToProps = state => ({
  accountData: state.user.account.accountData,
  isUserLoggedIn: state.user.account.isUserLoggedIn,
  isFetchingAccount: state.user.account.fetchingAccount,
  loginError: state.user.account.loginError,
});

const mapDispatchToProps = dispatch => ({
  handleUserLoggedIn: authData => dispatch(authenticateAndLogin(authData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
