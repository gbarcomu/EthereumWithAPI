'use strict';

var Log = require('log');
var connectionHelper = require('../helpers/ethereumConnection.helper');
var readFileHelper = require('../helpers/readFile.helper');

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

function getGreet() {
  var smartContractAddress = readFileHelper.getSmartContractAddress();
  var abi = readFileHelper.getAbi();
  var fromAccount = readFileHelper.getFromAccount()

  return new Promise((resolve, reject) => {
    try {
      var contractFactory = new web3.eth.Contract(abi, smartContractAddress);
      contractFactory.methods["getGreet"]()
        .call({ from: fromAccount })
        .then(result => {
          log.info(`-----> {callSmartContract} OUT --> result: ${JSON.stringify(result)}`);
          resolve(result);
        })
        .catch(error => {
          console.log(`-----> {callSmartContract} (ERROR):`);
          reject(error);
        })

    } catch (error) {
      console.log(`-----> {callSmartContract} (ERROR):`);
      reject(error);
    }
  });
}

////////////////////////////////////////////////////////////////////////////////
// PRIVATE FUNCTIONS
////////////////////////////////////////////////////////////////////////////////

module.exports = {
  getGreet
}