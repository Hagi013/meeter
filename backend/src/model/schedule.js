const moment = require('moment');
const ScheduleRepo = require('../repository/schedule-repo');
const OrganiztionRepo = require('../repository/organization-repo');
const BaseModel = require('../model/base-model');
const { emptyCheck, notEmptyCheck } = require('../lib/utils/check-util');

class Schedule {
  constructor(obj) {
    this.id = obj.id;
    this.organization_id = obj.organization_id;
    this.title = obj.title;
    this.from = obj.from;
    this.to = obj.to;
    this.location = obj.location;
    this.memo = obj.memo;
  }
}

class ScheduleObject extends BaseModel {
  static repo() {
    return ScheduleRepo;
  }

  static apply(obj) {
    obj.id = notEmptyCheck(obj.id) ? obj.id : moment().format('x');
    if (!this.validate(obj)) return false;
    return new Schedule(obj);
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
      console.error('There is no Name.');
      return false;
    }

    if (!OrganiztionRepo.findByKey(obj.organization_id)) {
      console.error(`There is no organization_id organization in organization-${process.env.STAGE}.`);
      return false;
    }

    return true;
  }
}

module.exports = ScheduleObject;