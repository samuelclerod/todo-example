const express = require('express');
const router = express.Router();

const {
  list,
  add,
  show,
  update,
  remove
} = require('../controllers/TasksController');

router.get('/', list);

router.post('/', add);

router.get('/:id', show);

router.put('/:id', update);

router.delete('/:id', remove);

module.exports = router;