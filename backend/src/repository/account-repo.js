const dynogels = require('dynogels');
const Joi = require('joi');
const BaseRepository = require('./base-repository');

class AccountRepo extends BaseRepository {

  static repo() {
    return dynogels.define('Account', {
      hashKey: 'id',
      schema: {
        id                : Joi.string(),
        organization_id   : Joi.string(),
        name              : Joi.string(),
      },
      tableName: `account-${process.env.STAGE}`,
    });
  }

}

module.exports = AccountRepo;
