const pkg = require('../../package');
const express = require('express');
const router = express.Router();

module.exports = router;

router.route('/').get((req, res) => {

  res.send({
    name: pkg.description,
    build: pkg.version
  });
    
});

