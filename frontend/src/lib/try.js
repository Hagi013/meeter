/* eslint-disable class-methods-use-this,no-use-before-define,no-useless-constructor */

export default class Try {
  constructor(value) {
    this.value = value;
  }

  get() {
    return this.value;
  }

  map() {
    throw Error('You should override this method in chile class!!!');
  }

  static apply(f) {
    this.execute(f);
  }

  static execute(f) {
    try {
      const value = f();
      return new Success(value);
    } catch (e) {
      return new Failure(e);
    }
  }

  static promiseApply(f) {
    return this.execPromise(f);
  }

  static async execPromise(f) {
    try {
      const value = await f().catch((e) => {
        throw Error(e);
      });
      return new Success(value);
    } catch (e) {
      return new Failure(e);
    }
  }

  isSuccess() {
    return false;
  }

  isFailure() {
    return false;
  }
}

class Success extends Try {

  constructor(value) {
    super(value);
  }

  get() {
    return this.value;
  }

  map(f) {
    return new Success(f(this.value));
  }

  isSuccess() {
    return true;
  }

}

class Failure extends Try {

  constructor(value) {
    super(value);
  }

  get() {
    return TypeError('Can\'t extract the value of a Failure(a).');
  }

  map(_) {
    console.log(_);
    return this;
  }

  isFailure() {
    return true;
  }
}
