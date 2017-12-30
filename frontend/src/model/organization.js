import OrganizationRepo from '../repository/organziation-repo';
import BaseModel from './base-model';
import { notEmptyCheck } from '../lib/utils/check-util';

class Organization {
  constructor(obj) {
    this.id = obj.id ? obj.id : '';
    this.name = obj.name;
    this.phone = obj.phone;
    this.location = obj.location;
  }
}

export default class OrganizationObject extends BaseModel {

  static repo() {
    return OrganizationRepo;
  }

  static apply(obj) {
    if (notEmptyCheck(obj)) {
      return new Organization(obj);
    }
    return new Organization({
      id: '',
      name: '',
      phone: '',
      location: '',
    });
  }

  static validate(obj) {
    console.log(`今は特に何もしない。${JSON.stringify(obj)}`);
    return true;
  }
}
