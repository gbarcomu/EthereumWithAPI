'use strict';

var Log = require('log');
var fs = require('fs');
var path = require('path');
var connectionHelper = require('../helpers/ethereumConnection.helper');

////////////////////////////////////////////////////////////////////////////////
// PROPERTIES
////////////////////////////////////////////////////////////////////////////////

var repositoryName = '[Utils helper]';
var log = new Log('debug');
var web3 = connectionHelper.setConnection();
let fromAccount;
let abi;
let smartContractAddress;

loadFromAccount();
loadAbi();
loadContractAddress();

////////////////////////////////////////////////////////////////////////////////
// PUBLIC FUNCTIONS
////////////////////////////////////////////////////////////////////////////////

function loadFromAccount() {
    fs.readFile('/opt/common/accountAddress', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        console.log("Loaded account address: " + data);
        fromAccount = data;
    });
}

function loadAbi() {
    fs.readFile('/opt/common/Greet.js', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        abi = JSON.parse(JSON.parse(data.substring(18)).contracts['/opt/common/Greet.sol:Greet'].abi);
        console.log("Loaded abi: " + abi);
    });
}

function loadContractAddress() {
    fs.readFile('/opt/common/transactionHash', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        web3.eth.getTransactionReceipt(data.substring(0,66))
            .then(result => {
                smartContractAddress = result.contractAddress
                console.log("Loaded Smart Contract address: " + smartContractAddress);
            })
            .catch(err => {
                console.log(err)
            });
    });
}

function getFromAccount() {
    return fromAccount;
}
function getAbi() {
    return abi;
}
function getSmartContractAddress() {
    return smartContractAddress;
}

module.exports = {
    getFromAccount,
    getAbi,
    getSmartContractAddress
}