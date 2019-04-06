import ApolloClient from 'apollo-boost';
import { Observable } from 'apollo-client/util/Observable';
import userStorage from '../../storage/UserStorage';
import { refreshUserConnection } from '../authentication';
import history from '../../../history';
import { routes } from '../../../routes';

export class GraphClient {
  constructor() {
    const token = userStorage.getUserInformationsByKey('token');
    this.client = new ApolloClient({
      uri: process.env.REACT_APP_API_GRAPHQL,
      onError: (error) => (
        this.catchClientErrors(error)
      ),
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });

    this.catchClientErrors();
  }

  request(query, variables) {
    return this.client.query({ query, variables });
  }

  catchClientErrors(error) {
    if (error && error.networkError.statusCode === 401) {
      const refreshToken = userStorage.getUserInformationsByKey('refreshToken');
      if (refreshToken) {
        return new Observable(observer => refreshUserConnection(refreshToken).then(user => {
          this.resendGraphRequest(observer, error, user.token);
        }).catch(() => {
          observer.error(error);
          userStorage.resetUserAuthentication();
          history.push(routes.home);
        }));
      }
      userStorage.resetUserAuthentication();
      history.push(routes.home);
    }

    return error;
  }

  resendGraphRequest(observer, error, token) {
    error.operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        authorization: `Bearer ${token}` || null,
      },
    }));
    const subscriber = {
      next: observer.next.bind(observer),
      error: observer.error.bind(observer),
      complete: observer.complete.bind(observer),
    };

    error.forward(error.operation).subscribe(subscriber);
  }
}
