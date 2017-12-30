const moment = require('moment');
const MessageRepo = require('../repository/message-repo');
const AccountRepo = require('../repository/account-repo');
const BaseModel = require('../model/base-model');
const { emptyCheck, notEmptyCheck } = require('../lib/utils/check-util');

class Message {
  constructor(obj) {
    this.id = obj.id;
    this.from_id = obj.from_id;
    this.to_id = obj.to_id;
    this.text = obj.text;
    this.sent_time = obj.sent_time;
  }
}

class MessageObject extends BaseModel {
  static repo() {
    return MessageRepo;
  }

  static apply(obj) {
    const now = moment().format('x');
    const itemAddedObj = Object.assign(obj, {
      id: notEmptyCheck(obj.id) ? obj.id : now,
      sent_time: notEmptyCheck(obj.sent_time) ? obj.sent_time : now,
    });

    if (!this.validate(itemAddedObj)) return false;
    return new Message(itemAddedObj);
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

    if (emptyCheck(obj.from_id)) {
      console.error('There is no from_id.');
      return false;
    }

    if (!AccountRepo.findByKey(obj.from_id)) {
      console.error(`There is no from_id account in account-${process.env.STAGE}.`);
      return false;
    }


    if (emptyCheck(obj.to_id)) {
      console.error('There is no to_id.');
      return false;
    }

    if (!AccountRepo.findByKey(obj.to_id)) {
      console.error(`There is no to_id account in account-${process.env.STAGE}.`);
      return false;
    }

    if (emptyCheck(obj.text)) {
      console.error('There is no text.');
      return false;
    }

    if (emptyCheck(obj.sent_time)) {
      console.error('There is no sent_time.');
      return false;
    }


    return true;
  }
}

module.exports = MessageObject;