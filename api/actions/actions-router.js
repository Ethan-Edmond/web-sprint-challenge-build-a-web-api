// Write your "actions" router here!
const express = require('express');

const router = express.Router();

const Actions = require('./actions-model');

// get insert update remove
const {
  actionLogger,
  validateActionId,
  validateAction
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

router.post('/', validateAction, (req, res, next) => {
  res.status(200).json({
    message: 'post on /api/actions'
  });

});

router.put('/:id', validateActionId, validateAction, (req, res, next) => {
  res.status(200).json({
	  message: 'put on /api/actions/:id'
  });

});

router.delete('/:id', validateActionId, (req, res, next) => {
  res.status(200).json({
	  message: 'delete on /api/actions/:id'
  });

});

module.exports = router;
