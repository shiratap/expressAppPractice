'use strict';

const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.send('we make it here');
})

module.exports = app;