import { User } from './User';
import { GraphClient } from './graphql/GraphClient';

export class Client {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.user = new User(baseUrl);
    this.graphClient = new GraphClient();
  }

  user() {
    return this.user;
  }

  graphClient() {
    return this.graphClient;
  }
}

export default Client;
