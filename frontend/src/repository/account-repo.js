import BaseRepository from './base-repository';

export default class AccountRepo extends BaseRepository {

  static url() {
    return {
      save: `${this.baseURL()}/account`,
      all: `${this.baseURL()}/accounts`,
      byKey: `${this.baseURL()}/account`,
    };
  }
}
