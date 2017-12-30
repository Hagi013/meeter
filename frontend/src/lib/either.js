/* eslint-disable no-unused-vars,no-use-before-define,class-methods-use-this */
export default class Either {
  constructor(value) {
    this.value = value;
  }

  get() {
    return this.value;
  }

  static left(a) {
    return new Left(a);
  }

  static right(a) {
    return new Right(a);
  }

  static fromNullable(val) {
    return val !== null && val !== undefined ? Either.right(val) : Either.left(val);
  }

  static of(a) {
    return Either.right(a);
  }
}

class Left extends Either {
  map(_) {
    return this;
  }

  get() {
    throw new TypeError('Can\'t extract the value of a Left(a).');
  }

  getOrElse(other) {
    return other;
  }

  orElse(f) {
    return f(this.value);
  }

  chain(f) {
    return this.value;
  }

  getOrElseThrow(a) {
    throw new Error(a);
  }

  filter(f) {
    return this;
  }

  toString() {
    return `Either.Left(${this.value})`;
  }
}


class Right extends Either {
  map(f) {
    return Either.of(f(this.value));
  }

  get() {
    return this.value;
  }

  getOrElse(other) {
    return this.value;
  }

  orElse(f) {
    return this;
  }

  chain(f) {
    return f(this.value);
  }

  getOrElseThrow(_) {
    return this.value;
  }

  filter(f) {
    return Either.fromNullable(f(this.value) ? this.value : null);
  }

  toString() {
    return `Either.Right(${this.value})`;
  }

}
