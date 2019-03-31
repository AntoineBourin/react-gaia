import { User } from './User';

export class Client {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.user = new User(baseUrl);
  }

  user() {
    return this.user;
  }
}

export default Client;
