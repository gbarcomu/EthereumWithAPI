'use strict';

var Log = require('log');

var smartContractService = require('../services/smartContract.service');



////////////////////////////////////////////////////////////////////////////////
// PROPERTIES
////////////////////////////////////////////////////////////////////////////////

var controllerName = '[SmartContract controller]';
var log = new Log('debug');


////////////////////////////////////////////////////////////////////////////////
// PUBLIC FUNCTIONS
////////////////////////////////////////////////////////////////////////////////

function getGreet(req, res) {
  try {
    smartContractService.getGreet()
      .then(result => {
        res.status(200).send({ "result": true, "response": result, "message": "Successfully retrieved greet" });
      })
      .catch(error => {
        log.error(error)
        res.status(500).send({ "result": false, "message": "Not able to call method getGreet" });
      })
  }
  catch (error) {
    log.error(error)
    res.status(500).send({ "result": false, "message": "Not able to call method getGreet" });
  }
}

////////////////////////////////////////////////////////////////////////////////
// PRIVATE FUNCTIONS
////////////////////////////////////////////////////////////////////////////////


module.exports = {
  getGreet
}