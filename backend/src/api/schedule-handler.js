const HandlerUtil = require('./handler-util');
const Schedule = require('../model/schedule');
const { emptyCheck } = require('../lib/utils/check-util');


module.exports.postSchedule = (event, context, callback) => {
  console.log(JSON.stringify(event), JSON.stringify(context));
  if (emptyCheck(event.body)) HandlerUtil.responseBadRequest(callback);

  const schedule = JSON.parse(event.body);

  console.log('schedule', schedule);

  HandlerUtil.handleReturnResponse(Schedule.save(schedule), context, callback);
};

module.exports.getSchedules = (event, context, callback) => {
  console.log(JSON.stringify(event), JSON.stringify(context));

  HandlerUtil.handleReturnResponse(Schedule.findAll(), context, callback);
};
