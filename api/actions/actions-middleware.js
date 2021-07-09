// add middlewares here related to actions

function actionLogger(req, res, next) {
  console.log('----- Action Logger -----');
  console.log('Req Method: ', req.method);
  console.log('Req URL: ', req.protocol + '://' + req.get('host'));
  console.log("TimeStamp: ", Date());
  console.log('-------------------------');
  next();
}

function validateActionId(req, res, next) {
  console.log('Validate Action ID');
  next();
}

function validateAction(req, res, next) {
  console.log('Validate Action');
  next();
}

module.exports = {
  actionLogger,
  validateActionId,
  validateAction
};
