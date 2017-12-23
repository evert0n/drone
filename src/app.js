const http = require('http');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const api = require('./api');
const config = require('./config');
const errorResponse = require('./lib/error-response');
const debug = require('debug')('app');

// create app/server
let app = express();
app.server = http.createServer(app);

// logger
app.use(morgan('combined'));

// body parser
app.use(bodyParser.json());

// api router
app.use(api);

// error handler
app.use((error, req, res, next) => {

	if (res.headersSent) {
		return next(error);
	}

	let status = error.status || 500;

  debug(error);
  
	res.status(status).json(errorResponse(error));

});

// init server
app.server.listen(config.app.port, () => {
	debug(`Started on port ${app.server.address().port}`);
});

module.exports = app;