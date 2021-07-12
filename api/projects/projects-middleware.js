// add middlewares here related to projects
const Projects = require('./projects-model');

// get insert update remove getProjectActions
function projectLogger(req, res, next) {
  console.log("----- Project Logger -----");
  console.log('Req Method: ', req.method);
  console.log('Req URL: ', req.protocol + '://' + req.get('host') + req.originalUrl);
  console.log("TimeStamp: ", Date());
  console.log('-------------------------');
  next();
}

function validateProjectId(req, res, next) {
  Projects.get(req.params.id)
    .then(project => {
      if(project) {
        next();
      } else {
        res.status(404).json({
          message: 'Project with specified Id does not exist'
	});
      }
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
}

function validateProjectPost(req, res, next) {
  const { name, description } = req.body;
  const completed = req.body.completed || false;
  req.body.completed = completed;
  if (name && description) { // existence check
    next();
  } else {
    res.status(400).json({
      message: 'Please provide name and description'
    });
  }
}

function validateProjectPut(req, res, next) {
  const { name, description, completed } = req.body;
    if (name && description && (completed !== undefined)) { // existence check
    next();
  } else {
    res.status(400).json({
      message: 'Please provide name and description'
    });
  }
}

// function validateProjectTypes(req, res, next) {
//   if (
//     (typeof name === 'string') &&
//     (typeof description === 'string') &&
//     (typeof completed === 'boolean')
//   ) {
//     next();
//   } else {
//     res.status(400).json({
//       message: 'One of the sections of body has the wrong type'
//     });
//   }
// }

module.exports = {
  projectLogger,
  validateProjectId,
  validateProjectPost,
  validateProjectPut,
//  validateProjectTypes
};
