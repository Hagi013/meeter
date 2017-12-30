const moment = require('moment');
const AccountRepo = require('../repository/account-repo');
const BaseModel = require('../model/base-model');
const { emptyCheck, notEmptyCheck } = require('../lib/utils/check-util');

class Account {
  constructor(obj) {
    this.id = obj.id;
    this.organization_id = obj.organization_id;
    this.name = obj.name;
  }
}

class AccountObject extends BaseModel {
  static repo() {
    return AccountRepo;
  }

  static apply(obj) {
    obj.id = notEmptyCheck(obj.id) ? obj.id : moment().format('x');
    if (!this.validate(obj)) return false;
    return new Account(obj);
  }

  static validate(obj) {
    if (emptyCheck(obj)) {
      console.error('Empty object...');
      return false;
    }

    if (emptyCheck(obj.id)) {
      console.error('There is no Id.');
      return false;
    }

    if (emptyCheck(obj.organization_id)) {
      console.error('There is no organization_id.');
      return false;
    }

    if (emptyCheck(obj.name)) {
      console.error('There is no Name.');
      return false;
    }

    return true;
  }
}

module.exports = AccountObject;