// add middlewares here related to actions
const Actions = require('./actions-model');

// get, insert, update, remove
function actionLogger(req, res, next) {
  console.log('----- Action Logger -----');
  console.log('Req Method: ', req.method);
  console.log('Req URL: ', req.protocol + '://' + req.get('host') + req.originalUrl);
  console.log('TimeStamp: ', Date());
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
  const { project_id, description, notes } = req.body;
  const completed = req.body.completed || false;
  console.log('Validate Action');
  console.log(project_id, description, notes, completed);

  if (project_id.toString() && description && notes) { // existence check
    if (
      (typeof project_id === 'number') &&
      (typeof description === 'string') &&
      (typeof notes === 'string') &&
      (typeof completed === 'boolean')
    ){ // type check
      next();
    } else {
      res.status(400).json({
        message: 'One of the sections of body has the wrong type'
      });
    }
  } else {
    res.status(400).json({
      message: 'Please provide project id, description and notes'
    });
  }
}

module.exports = {
  actionLogger,
  validateActionId,
  validateAction
};
