const pkg = require('../../package');
const os = require('os');
const express = require('express');
const router = express.Router();

module.exports = router;

router.route('/').get((req, res) => {

  res.send({
    name: pkg.description,
    build: pkg.version,
    server: {
      hostname: os.hostname(),
      arch: os.arch(),
      platform: os.platform(),
      release: os.release(),
      type: os.type(),
      uptime: os.uptime(),
      loadAverage: os.loadavg(),
      freemem: os.freemem(),
      totalmem: os.totalmem(),
      cpus: os.cpus()
    }
  });
    
});

