import decode from 'jwt-decode';
import { makeActionCreator } from '../../../lib/redux/helper';
import { FETCHING_USER, SET_ACCOUNT, SET_LOGIN_ERROR } from './constant';
import { api } from '../../../lib/core-api/api';
import history from '../../../history';
import { routes } from '../../../routes';
import userStorage from '../../../lib/storage/UserStorage';

export const fetchingUser = makeActionCreator(FETCHING_USER);
export const setLoginError = makeActionCreator(SET_LOGIN_ERROR, 'error');
export const setAccount = makeActionCreator(SET_ACCOUNT, 'accountDetails', 'token', 'refreshToken');

const setUserAuthInformations = (token, refreshToken) => dispatch => {
  const accountInformations = decode(token);
  dispatch(setAccount(accountInformations, token, refreshToken));
  userStorage.setUserInformations(token, refreshToken, accountInformations.exp);
};

export const authenticateAndLogin = userAuthData => (dispatch) => {
  dispatch(fetchingUser());
  api.user.login(userAuthData.email, userAuthData.password)
    .then(data => {
      dispatch(setUserAuthInformations(data.token, data.refreshToken));
      history.push(routes.dashboard);
    })
    .catch(() => dispatch(setLoginError('E-mail ou mot de passe incorrect.')));
};
