const express = require('express');
const app = express();
const mongoose = require('mongoose');

const {
  port,
  host,
  mongoUrl,
} = require('./config/variables');

mongoose.connect(mongoUrl, require('./config/mongoose'));

app.use(express.json());

app.use(require('./api/routes'))

app.use((err, req, res, next) => {
  res.status(500);
  res.send({ error: "Oops, something went wrong." });
});

app.listen(port, host, () => {
  console.log(`🐱‍🏍 Todo api start on port ${port} ✨`)
});
