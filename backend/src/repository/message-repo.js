const dynogels = require('dynogels');
const Joi = require('joi');
const BaseRepository = require('./base-repository');

class MessageRepo extends BaseRepository {

  static repo() {
    return dynogels.define('Message', {
      hashKey: 'id',
      schema: {
        id                : Joi.string(),
        from_id           : Joi.string(),
        to_id             : Joi.string(),
        text              : Joi.string(),
        sent_time         : Joi.string(),
      },
      tableName: `message-${process.env.STAGE}`,
      indexes: [{
        type: 'global',
        name: `message-byfrom-${process.env.STAGE}`,
        hashKey : 'from_id',
        rangeKey : 'to_id',
      },{
        type: 'global',
        name: `message-byto-${process.env.STAGE}`,
        hashKey : 'to_id',
        rangeKey : 'from_id',
      }]
    });
  }
}

module.exports = MessageRepo;
