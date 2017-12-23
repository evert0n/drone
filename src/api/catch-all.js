const express = require('express');
const router = express.Router();

module.exports = router;

router.route('/').all((req, res) => {

	return res.status(404).json({code: 404, name: 'NotFound', message: 'Not found'});

});