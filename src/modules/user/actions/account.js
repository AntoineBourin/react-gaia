import decode from 'jwt-decode';
import { makeActionCreator } from '../../../lib/redux/helper';
import { FETCHING_USER, SET_ACCOUNT, SET_LOGIN_ERROR } from './constant';
import { api } from '../../../lib/core-api/api';

export const fetchingUser = makeActionCreator(FETCHING_USER);
export const setLoginError = makeActionCreator(SET_LOGIN_ERROR, 'error');
export const setAccount = makeActionCreator(SET_ACCOUNT, 'accountDetails', 'token', 'refreshToken');

export const authenticateAndLogin = userAuthData => (dispatch) => {
  dispatch(fetchingUser());
  api.user.login(userAuthData.email, userAuthData.password)
    .then(data => {
      const accountInformations = decode(data.token);
      dispatch(setAccount(accountInformations, data.token, data.refreshToken));
    })
    .catch(() => dispatch(setLoginError('E-mail ou mot de passe incorrect.')));
};
