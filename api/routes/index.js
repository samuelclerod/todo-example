const express = require('express');
const router = express.Router();

const TasksRoutes = require('./TasksRoutes');
router.use('/tasks', TasksRoutes);

router.get('*', (req, res) => {
  res.send({ error: 'Sorry, this is an invalid URL.' });
});

module.exports = router;