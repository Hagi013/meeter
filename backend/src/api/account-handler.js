const HandlerUtil = require('./handler-util');
const Account = require('../model/account');
const { emptyCheck } = require('../lib/utils/check-util');


module.exports.postAccount = (event, context, callback) => {
  console.log(JSON.stringify(event), JSON.stringify(context));
  if (emptyCheck(event.body)) HandlerUtil.responseBadRequest(callback);

  const account = JSON.parse(event.body);
  HandlerUtil.handleReturnResponse(Account.save(account) , context, callback);
};

module.exports.getAccounts = (event, context, callback) => {
  console.log(JSON.stringify(event), JSON.stringify(context));

  HandlerUtil.handleReturnResponse(Account.findAll() , context, callback);
};

