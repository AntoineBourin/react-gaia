import decode from 'jwt-decode';
import { api } from './api';
import userStorage from '../storage/UserStorage';

export const refreshUserConnection = (refreshToken) => (
  api.user.getNewTokenWithRefreshToken(refreshToken)
    .then(data => {
      const accountInformations = decode(data.token);
      userStorage.setUserInformations(data.token, data.refreshToken, accountInformations.exp);

      return data;
    })
);

export const isAuthTokenExpired = () => {
  const expiredAt = userStorage.getUserInformationsByKey('expiredAt');
  const dateNow = Date.now() / 1000;

  if (expiredAt) {
    return dateNow + 600 >= expiredAt;
  }

  return true;
};
