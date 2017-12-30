const dynogels = require('dynogels');
const Joi = require('joi');
const BaseRepository = require('./base-repository');

class ScheduleRepo extends BaseRepository {

  static repo() {
    return dynogels.define('Schedule', {
      hashKey: 'id',
      schema: {
        id                : Joi.string(),
        organization_id   : Joi.string(),
        title             : Joi.string().optional(),
        from              : Joi.string().optional(),
        to                : Joi.string().optional(),
        location          : Joi.string().optional(),
        memo              : Joi.string().optional(),
      },
      tableName: `schedule-${process.env.STAGE}`,
      indexes: [{
        type: 'global',
        name: `schedule-byorganization-${process.env.STAGE}`,
        hashKey : 'organization_id',
      }],
    });
  }

}

module.exports = ScheduleRepo;
