const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
require('dotenv').config({
  path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"
})

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

app.use(express.json());

const TasksRoutes = require('./api/routes/TasksRoutes');
app.use('/', TasksRoutes);

app.get('*', (req, res) => {
  res.send({ error: 'Sorry, this is an invalid URL.' });
});
app.use((err, req, res, next) => {
  res.status(500);
  res.send({ error: "Oops, something went wrong." });
});
app.listen(port);

console.log(`🐱‍🏍 Todo api start on port ${port} ✨`)