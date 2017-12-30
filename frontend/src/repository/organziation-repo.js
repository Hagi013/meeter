import BaseRepository from './base-repository';

export default class OrganizationRepo extends BaseRepository {

  static url() {
    return {
      save: `${this.baseURL()}/organization`,
      all: `${this.baseURL()}/organizations`,
      byKey: `${this.baseURL()}/organization`,
    };
  }
}
