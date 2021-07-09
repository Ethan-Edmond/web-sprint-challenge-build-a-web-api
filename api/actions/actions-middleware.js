// add middlewares here related to actions
const Actions = require('./actions-model');

console.log(Actions);
// get, insert, update, remove
function actionLogger(req, res, next) {
  console.log('----- Action Logger -----');
  console.log('Req Method: ', req.method);
  console.log('Req URL: ', req.protocol + '://' + req.get('host'));
  console.log("TimeStamp: ", Date());
  console.log('-------------------------');
  next();
}

function validateActionId(req, res, next) {
  Actions.get(req.params.id)
    .then(action => {
      if(action) {
        next();
      } else {
	res.status(404).json({
	  message: 'Action with specified id does not exist'
	});
      }
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
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
