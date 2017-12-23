
const express = require('express');
const pkg = require('./package');
const os = require('os');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send({
    name: pkg.description,
    version: 1,
    build: pkg.version,
    server: {
      uptime: os.uptime(),
      loadAverage: os.loadavg()
    }
  });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);