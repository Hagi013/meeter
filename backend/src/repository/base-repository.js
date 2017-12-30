class BaseRepository {

  static repo() {
    throw 'You should override this method in chile class!!!';
  }

  static save(obj) {
    return new Promise((resolved, rejected) => {
      this.repo().create(obj, (err, res) => {
        if (err) {
          console.error(err);
          rejected(err);
        }
        resolved(res);
      });
    });
  }

  static findAll() {
    return this.wrapPromise(
        this.repo().scan().loadAll()
      )
      .then(res => res.Items);
  }

  static findByKey(key) {
    return this.wrapPromise(this.repo().query(key).loadAll());
  }

  static wrapPromise(query) {
    return new Promise((resolved, rejected) => {
      query.exec((err, res) => {
        if (err) {
          console.error(err);
          rejected(err);
        }
        resolved(res);
      });
    });
  }

}

module.exports = BaseRepository;