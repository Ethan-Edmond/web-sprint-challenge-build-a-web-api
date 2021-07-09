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

function validateProject(req, res, next) {
  console.log("Validate Project");
  next();
}

module.exports = {
  projectLogger,
  validateProjectId,
  validateProject
};
