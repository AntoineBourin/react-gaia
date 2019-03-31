import { createReducer } from '../../../lib/redux/helper';
import { FETCHING_USER, SET_ACCOUNT, SET_LOGIN_ERROR } from '../actions/constant';

const initialState = {
  fetchingAccount: false,
  accountData: {},
  loginError: null,
};

const actionHandlers = {
  [FETCHING_USER]: state => ({ ...state, fetchingAccount: true }),
  [SET_ACCOUNT]: (state, { accountDetails, token, refreshToken }) => (
    { ...state,
      fetchingAccount: false,
      loginError: null,
      accountData: {
        accountDetails,
        token,
        refreshToken,
      },
    }),
  [SET_LOGIN_ERROR]: (state, { error }) => (
    { ...state, loginError: error, fetchingAccount: false }
  ),
};

export default createReducer(initialState, actionHandlers);
