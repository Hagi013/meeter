const HandlerUtil = require('./handler-util');
const Message = require('../model/message');
const { emptyCheck } = require('../lib/utils/check-util');


module.exports.postMessage = (event, context, callback) => {
  console.log(JSON.stringify(event), JSON.stringify(context));
  if (emptyCheck(event.body)) HandlerUtil.responseBadRequest(callback);

  const account = JSON.parse(event.body);
  HandlerUtil.handleReturnResponse(Message.save(account) , context, callback);
};

module.exports.getMessages = (event, context, callback) => {
  console.log(JSON.stringify(event), JSON.stringify(context));

  HandlerUtil.handleReturnResponse(Message.findAll() , context, callback);
};

