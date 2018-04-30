'use strict';

var Log = require('log');
var connectionHelper = require('../helpers/ethereumConnection.helper');

////////////////////////////////////////////////////////////////////////////////
// PROPERTIES
////////////////////////////////////////////////////////////////////////////////

var serviceName = '[Misc service]';
var log = new Log('debug');
var web3 = connectionHelper.setConnection();


////////////////////////////////////////////////////////////////////////////////
// PUBLIC FUNCTIONS
////////////////////////////////////////////////////////////////////////////////

exports.init = function () {
  web3 = connectionHelper.setConnection();
};

function healthcheck(req, res) {
  return new Promise((resolve, reject) => {
    try {
      web3.eth.net.isListening().then(() => {
        resolve(true)
      })
        .catch(error => {
          log.error(`-----> ${serviceName} {healtcheck} (ERROR): ${JSON.stringify(error.stack)}`);
          reject(false);
        })
    } catch (error) {
      log.error(`-----> ${serviceName} {healtcheck} (ERROR): ${JSON.stringify(error.stack)}`);
      reject(false);
    }
  })
}

////////////////////////////////////////////////////////////////////////////////
// PRIVATE FUNCTIONS
////////////////////////////////////////////////////////////////////////////////

module.exports = {
  healthcheck
}