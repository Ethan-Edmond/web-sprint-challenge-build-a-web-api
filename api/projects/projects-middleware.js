// add middlewares here related to projects

function projectLogger(req, res, next) {
  console.log("----- Project Logger -----");
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
