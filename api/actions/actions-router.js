// Write your "actions" router here!
const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'get on /api/actions'
  });
});

router.get('/:id', (req, res, next) => {
  res.status(200).json({
	  message: 'get on /api/actions/:id'
  });

});

router.post('/', (req, res, next) => {
  res.status(200).json({
    message: 'post on /api/actions'
  });

});

router.put('/:id', (req, res, next) => {
  res.status(200).json({
	  message: 'put on /api/actions/:id'
  });

});

router.delete('/:id', (req, res, next) => {
  res.status(200).json({
	  message: 'delete on /api/actions/:id'
  });

});

module.exports = router;
