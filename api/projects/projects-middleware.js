// add middlewares here related to projects

function projectLogger(req, res, next) {
  console.log("----- Project Logger -----");
  console.log('Req Method: ', req.method);
  console.log('Req URL: ', req.protocol + '://' + req.get('host') + req.originalUrl);
  console.log("TimeStamp: ", Date());
  console.log('-------------------------');
  next();
}

function validateProjectId(req, res, next) {
  console.log("Validate Project Id");
  next();
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
