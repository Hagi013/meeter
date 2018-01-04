import BaseRepository from './base-repository';

export default class MessageRepo extends BaseRepository {

  static url() {
    return {
      save: `${this.baseURL()}/message`,
      all: `${this.baseURL()}/messages`,
      byKey: `${this.baseURL()}/message`,
    };
  }
}
