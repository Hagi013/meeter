const dynogels = require('dynogels');
const Joi = require('joi');
const BaseRepository = require('./base-repository');

class OrganizationRepo extends BaseRepository {

  static repo() {
    return dynogels.define('Organization', {
      hashKey: 'id',
      schema: {
        id                : Joi.string(),
        name              : Joi.string(),
        phone             : Joi.string().optional(),
        location          : Joi.string().optional(),
      },
      tableName: `organization-${process.env.STAGE}`,
    });
  }

}

module.exports = OrganizationRepo;
