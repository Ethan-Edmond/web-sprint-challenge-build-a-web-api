// Write your "actions" router here!
const express = require('express');

const router = express.Router();

const Actions = require('./actions-model');

// get insert update remove
const {
  actionLogger,
  validateActionId,
  validateActionPost,
  validateActionPut
} = require('./actions-middleware');

router.use(actionLogger);

router.get('/', (req, res, next) => {
  Actions.get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(500).json({
	message: err.message
      });
    });
});

router.get('/:id', validateActionId, (req, res, next) => {
  Actions.get(req.params.id)
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err => {
      res.status(500).json({
	message: err.message
      });
    });
});

router.post('/', validateActionPost, (req, res, next) => {
  const { project_id, description, notes, completed } = req.body;
  Actions.insert({ project_id, description, notes, completed})
    .then(action => {
      res.status(201).json(action);
    })
    .catch(err => {
      res.status(500).json({
	message: err.message
      });
    });
});

router.put('/:id', validateActionId, validateActionPut, (req, res, next) => {
  const { project_id, description, notes, completed } = req.body;
  Actions.update(req.params.id, { project_id, description, notes, completed})
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err => {
      res.status(500).json({
	message: err.message
      });
    });
});

router.delete('/:id', validateActionId, (req, res, next) => {
  Actions.remove(req.params.id)
    .then(deletedNum => {
      res.status(200).send();
    })
    .catch(err => {
      res.status(500).json({
	message: err.message
      });
    });
});

module.exports = router;
