const express = require('express');
const router = express.Router();

const {
  list,
  add,
  show,
  update,
  remove
} = require('../controllers/TasksController');

router.get('/tasks', list);

router.post('/tasks', add);

router.get('/tasks/:id', show);

router.put('/tasks/:id', update);

router.delete('/tasks/:id', remove);

module.exports = router;