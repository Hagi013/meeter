class BaseModel {
  static repo() {
    throw 'You should override this method in chile class!!!';
  }

  static apply(obj) {
    throw 'You should override apply method in chile class!!!';
  }

  static validate(obj) {
    throw 'You should override validate method in chile class!!!';
  }

  static save(obj) {
    const instantiated = this.apply(obj);
    if (!instantiated) {
      throw 'Validate Error';
    }
    return this.repo().save(instantiated);
  }

  static findAll() {
    return this.repo().findAll();
  }

  static findByKey(key) {
    return this.repo().findByKey(key);
  }
}

module.exports = BaseModel;