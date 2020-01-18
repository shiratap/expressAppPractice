'use strict';

const router = require('express').Router();

router.get('*', (req, res) => {
  res.send('This page doesnt exist man');
});

module.exports = router;
