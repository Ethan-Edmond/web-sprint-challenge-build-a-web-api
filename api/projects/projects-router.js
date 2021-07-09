// Write your "projects" router here!
const express = require('express');

const router = express.Router();

const {
  projectLogger,
  validateProjectId,
  validateProject
} = require('./projects-middleware');

router.use(projectLogger);

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'get on /api/projects/'
  });
});

router.get('/:id', validateProjectId, (req, res, next) => {
  res.status(200).json({
	  message: 'get on /api/projects/:id'
  });
});

router.post('/', validateProject, (req, res, next) => {
  res.status(200).json({
    message: 'post on /api/projects/'
  });
});

router.put('/:id', validateProjectId, validateProject, (req, res, next) => {
  res.status(200).json({
	  message: 'put on /api/projects/:id'
  });
});

router.delete('/:id', validateProjectId, (req, res, next) => {
  res.status(200).json({
	  message: 'delete on /api/projects/:id'
  });
});

router.get('/:id/actions', validateProjectId, (req, res, next) => {
  res.status(200).json({
	  message: 'get on /api/projects/:id/actions'
  });
});

module.exports = router;
