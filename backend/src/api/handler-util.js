
class HandlerUtil {

  static handleReturnResponse(func, context, callback) {
    func
      .then(data => {
        console.log(`Return Obj ${JSON.stringify(data)}`);
        this.returnResponse(data, 200, callback);
      })
      .catch(err => {
        console.error(err);
        this.responseInternalError(callback);
      });
  }

  static responseBadRequest(callback) {
    this.returnResponse({}, 400, callback);
  }

  static responseInternalError(callback) {
    this.returnResponse({}, 500, callback);
  }

  static returnResponse(data, statusCode, callback) {
    const response = {
      statusCode: statusCode,
      headers: {
        'Access-Control-Allow-Origin': '*', // Required for CORS support to work
      },
      body: JSON.stringify(data),
    };

    callback(null, response);
  }

}

module.exports = HandlerUtil;
