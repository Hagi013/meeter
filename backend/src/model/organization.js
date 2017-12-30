const moment = require('moment');
const OrganizationRepo = require('../repository/organization-repo');
const BaseModel = require('../model/base-model');
const { emptyCheck, notEmptyCheck } = require('../lib/utils/check-util');

class Organization {
  constructor(obj) {
    this.id = obj.id;
    this.name = obj.name;
    this.phone = obj.phone;
    this.location = obj.location;
  }
}

class OrganizationObject extends BaseModel {
  static repo() {
    return OrganizationRepo;
  }

  static apply(obj) {
    obj.id = notEmptyCheck(obj.id) ? obj.id : moment().format('x');
    if (!this.validate(obj)) return false;
    return new Organization(obj);
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

    if (emptyCheck(obj.name)) {
      console.error('There is no Name.');
      return false;
    }

    return true;
  }
}

module.exports = OrganizationObject;