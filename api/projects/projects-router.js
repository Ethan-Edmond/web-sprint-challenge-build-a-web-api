// Write your "projects" router here!
const express = require('express');

const router = express.Router();

const Projects = require('./projects-model');
const {
  projectLogger,
  validateProjectId,
  validateProjectPost,
  validateProjectPut,
//  validateProjectTypes
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
    });
});

router.post('/', validateProjectPost, (req, res, next) => {
  const { name, description, completed } = req.body;
  const insertObj = {
    name, description, completed
  };
  Projects.insert(insertObj)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
});

router.put('/:id', validateProjectId, validateProjectPut, (req, res, next) => {
  const { name, description, completed } = req.body;
  Projects.update(req.params.id, { name, description, completed })
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      });
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
