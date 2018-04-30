'use strict';

var Web3 = require('web3');
var web3 = new Web3();
var net = require('net');

var Log = require('log');

const connection = "IPC";


////////////////////////////////////////////////////////////////////////////////
// PROPERTIES
////////////////////////////////////////////////////////////////////////////////

var repositoryName = '[Connection helper]';
var log = new Log('debug');


////////////////////////////////////////////////////////////////////////////////
// PUBLIC FUNCTIONS
////////////////////////////////////////////////////////////////////////////////

function getRPCProvider() {
    log.info(`-----> ${repositoryName} {getRPCProvider} RPC`);
    web3.setProvider(new web3.providers.HttpProvider("http://localhost:30302"));
}

function getIPCProvider() {
    log.info(`-----> ${repositoryName} {getIPCProvider} IPC`);
    web3 = new Web3('/opt/data/geth.ipc', net);
}

function setConnection() {
    connection === "IPC" ? getIPCProvider() : getRPCProvider();
    return web3;
}

module.exports = {
    setConnection,
}