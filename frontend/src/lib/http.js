import axios from 'axios';

export default class Http {
  static getMethod(obj) {
    return axios({
      method: 'GET',
      url: obj.url,
      params: obj.params,
      headers: {
        'content-type': 'UTF-8',
        authorization: '',
      },
      responseType: 'application/json',
    }).then(res => res.data);
  }

  static postMethod(obj) {
    return axios({
      method: 'POST',
      url: obj.url,
      headers: {
        'content-type': 'UTF-8',
        authorization: '',
      },
      responseType: 'application/json',
      data: obj.body,
    }).then(res => res.data);
  }

}
