// Write your "actions" router here!
const express = require('express');

const router = express.Router();

const {
  actionLogger,
  validateActionId,
  validateAction
} = require('./actions-middleware');

router.use(actionLogger);

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'get on /api/actions'
  });
});

router.get('/:id', validateActionId, (req, res, next) => {
  res.status(200).json({
	  message: 'get on /api/actions/:id'
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
