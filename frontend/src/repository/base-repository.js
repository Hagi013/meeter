import Http from '../lib/http';

export default class BaseRepository {

  static baseURL() {
    return process.env.API_ENDPOINT;
  }

  static url() {
    throw Error('You should override this method in chile class!!!');
  }
  static async save(value) {
    const res = await Http.postMethod({
      url: this.url().save,
      body: value,
    });
    return res;
  }

  static async findAll() {
    const res = await Http.getMethod({
      url: this.url().all,
    });
    return res;
  }

  static async findByKye(key) {
    const res = await Http.getMethod({
      url: this.url().byKey,
      params: {
        ID: key,
      },
    });
    return res;
  }
}
