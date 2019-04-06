import get from 'lodash/get';
import { Resource } from './Resource';

export class User extends Resource {
  login(email, password) {
    return this.request(
      'POST',
      '/api/login_check',
      {},
      {
        username: email,
        password,
      },
    ).then(({ data }) => ({
      token: get(data, 'token'),
      refreshToken: get(data, 'refresh_token'),
    }));
  }

  getNewTokenWithRefreshToken(refreshToken) {
    return this.request(
      'GET',
      '/api/token/refresh',
      {
        refresh_token: refreshToken,
      },
      {},
      { 'content-type': '' },
    ).then(({ data }) => ({
      token: get(data, 'token'),
      refreshToken: get(data, 'refresh_token'),
    }));
  }
}
