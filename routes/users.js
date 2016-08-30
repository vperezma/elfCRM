'use strict';

let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource 9');
});

module.exports = router;
