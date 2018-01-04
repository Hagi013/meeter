/* eslint-disable no-nested-ternary */
import MessageRepo from '../repository/message-repo';
import BaseModel from './base-model';
import { notEmptyCheck } from '../lib/utils/check-util';

class Message {
  constructor(obj) {
    this.id = obj.id ? obj.id : '';
    this.fromId = obj.from_id ? obj.from_id : obj.fromId ? obj.fromId : '';
    this.toId = obj.to_id ? obj.to_id : obj.toId ? obj.toId : '';
    this.text = obj.text;
    this.sentTime = obj.sent_time ? obj.sent_time : obj.sentTime ? obj.sentTime : '';
  }
}

export default class MessageObject extends BaseModel {

  static repo() {
    return MessageRepo;
  }

  static apply(obj) {
    if (notEmptyCheck(obj)) {
      return new Message(obj);
    }
    return new Message({
      id: '',
      from_id: '',
      to_id: '',
      text: '',
      sent_time: '',
    });
  }

  static validation(obj) {
    console.log(`今は特に何もしない。${JSON.stringify(obj)}`);
    return true;
  }
}
