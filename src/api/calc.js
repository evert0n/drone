const express = require('express');
const router = express.Router();
const calc = require('calculatorjs');

module.exports = router;

router.route('/').post((req, res) => {

    let errors = [];
    
    if (!req.body) req.body = {};
    
    if (!req.body.type) {
      req.body.type = 'arithmetic';
    }
    
    if (!req.body.expression) {
      errors.push({
        name: 'MissingProperty',
        message: 'Missing property `expression` in request payload',
        property: 'expression'
      });
    }

    if (errors.length) {
      return res.status(400).json({
        name: 'RequiredData',
        errors: errors
      });
    }
    
    let results = null;
    
    try {
      results = calc(req.body.expression); 
    } catch (e) {
      let error = {
        name: 'InvalidExpression', 
        message: 'The expression is invalid', 
        expression: req.body.expression
      }
      return res.status(400).json(error);
    }
    
    res.status(200).send({
      type: req.body.type,
      expression: req.body.expression,
      results: results 
    });
  
});