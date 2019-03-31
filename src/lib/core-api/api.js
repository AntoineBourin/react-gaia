import Client from './Client';

export const api = new Client(process.env.REACT_APP_API_BASEURL);
