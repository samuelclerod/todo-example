const express = require('express');
const app = express();
const mongoose = require('mongoose');

require('dotenv').config({
  path: process.env.NODE_ENV === "dev" ? ".env.dev" : ".env"
})

const {
  port,
  host,
  mongodb,
} = require('./config/variables');

mongoose.connect(process.env.MONGODB_URL, require('./config/mongoose'));

app.use(express.json());

app.use(require('./api/routes'))

app.use((err, req, res, next) => {
  res.status(500);
  res.send({ error: "Oops, something went wrong." });
});

app.listen(port, host, () => {
  console.log(`🐱‍🏍 Todo api start on port ${port} ✨`)
});
