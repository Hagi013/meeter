const HandlerUtil = require('./handler-util');
const Organization = require('../model/organization');


module.exports.postOrganization = (event, context, callback) => {
  console.log(JSON.stringify(event), JSON.stringify(context));

  const organization = JSON.parse(event.body);

  console.log('organization', organization);

  HandlerUtil.handleReturnResponse(Organization.save(organization), context, callback);
};

module.exports.getOrganizations = (event, context, callback) => {
  console.log(JSON.stringify(event), JSON.stringify(context));

  HandlerUtil.handleReturnResponse(Organization.findAll(), context, callback);
};
