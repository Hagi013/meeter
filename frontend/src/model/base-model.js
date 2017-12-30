/* eslint-disable no-unused-vars */
export default class BaseModel {
  static repo() {
    throw Error('You should override this method in chile class!!!');
  }

  static apply(_) {
    throw Error('You should override apply method in chile class!!!');
  }

  static applyList(list) {
    if (!Array.isArray(list)) throw Error('This is not Array!!!');
    return list.map(o => this.apply(o));
  }

  static validate(_) {
    throw Error('You should override validate method in chile class!!!');
  }

  static save(obj) {
    const instantiated = this.apply(obj);
    const validated = this.validate(instantiated);
    if (!validated) {
      throw Error('Instatiated Object is failed!');
    }
    console.log(instantiated);
    return this.repo().save(instantiated);
  }

  static async findAll() {
    const all = await this.repo().findAll();
    return this.applyList(all);
  }

  static async findByKey(key) {
    const list = await this.repo().findByKey(key);
    return this.applyList(list);
  }

}
