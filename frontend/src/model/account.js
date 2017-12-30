import AccountRepo from '../repository/account-repo';
import BaseModel from './base-model';
import { notEmptyCheck } from '../lib/utils/check-util';


class Account {
  constructor(obj) {
    this.id = obj.id ? obj.id : '';
    this.organization_id = obj.organization_id;
    this.name = obj.name;
  }
}

export default class AccountObject extends BaseModel {

  static repo() {
    return AccountRepo;
  }

  static apply(obj) {
    if (notEmptyCheck(obj)) {
      return new Account(obj);
    }
    return new Account({
      id: '',
      organization_id: '',
      name: '',
    });
  }

  static validate(obj) {
    console.log(`今は特に何もしない。${obj}`);
  }
}
