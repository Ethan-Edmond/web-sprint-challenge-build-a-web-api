// Write your "projects" router here!
const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'get on /api/projects/'
  });
});

router.get('/:id', (req, res, next) => {
  res.status(200).json({
	  message: 'get on /api/projects/:id'
  });
});

router.post('/', (req, res, next) => {
  res.status(200).json({
    message: 'post on /api/projects/'
  });
});

router.put('/:id', (req, res, next) => {
  res.status(200).json({
	  message: 'put on /api/projects/:id'
  });
});

router.delete('/:id', (req, res, next) => {
  res.status(200).json({
	  message: 'delete on /api/projects/:id'
  });
});

router.get('/:id/actions', (req, res, next) => {
  res.status(200).json({
	  message: 'get on /api/projects/:id/actions'
  });
});

module.exports = router;
