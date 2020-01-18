'use strict';

const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.send('Takeover page');
});

app.listen(3000, () => {
  console.log('Listening on 3000');
});
