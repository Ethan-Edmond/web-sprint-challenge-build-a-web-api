// Write your "projects" router here!
const express = require('express');

const router = express.Router();

const Projects = require('./projects-model');
const {
  projectLogger,
  validateProjectId,
  validateProject
} = require('./projects-middleware');

router.use(projectLogger);

router.get('/', (req, res, next) => {
  Projects.get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
});

router.get('/:id', validateProjectId, (req, res, next) => {
  Projects.get(req.params.id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      });
    })
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
  Projects.remove(req.params.id)
    .then(deletedNum => {
      res.status(200).send();
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      });
    })
});

router.get('/:id/actions', validateProjectId, (req, res, next) => {
  Projects.getProjectActions(req.params.id)
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
});

module.exports = router;
