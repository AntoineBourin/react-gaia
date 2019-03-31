import axios from 'axios/index';

export class Resource {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.client = axios.create({
      baseURL,
      timeout: 20000,
      headers: { 'content-type': 'application/json' },
    });
  }

  /**
   * Makes request to API.
   *
   * @param method
   * @param url
   * @param params
   * @param data
   * @param headers
   * @param format
   * @param timeout
   * @param onUploadProgress
   *
   * @returns {AxiosPromise<any>}
   */
  request(
    method,
    url,
    params = {},
    data = {},
    headers = {},
    format = 'json',
    timeout = 20000,
    onUploadProgress = null,
  ) {
    const doRequest = bearer => this.client.request({
      baseURL: this.baseURL,
      url,
      method,
      data,
      headers: {
        ...bearer,
        ...headers,
      },
      params: {
        ...params,
        _format: format,
      },
      timeout,
      onUploadProgress,
    });

    return doRequest();
  }
}

export default Resource;
