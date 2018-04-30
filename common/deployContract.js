loadScript('/opt/common/Greet.js');
var abi = storageOutput.contracts['/opt/common/Greet.sol:Greet'].abi;
var storageContract = eth.contract(JSON.parse(abi));
var bytecode = storageOutput.contracts['/opt/common/Greet.sol:Greet'].bin;
if (bytecode.substring(0, 1) != '0x') {
    bytecode = '0x' + bytecode;
}
personal.unlockAccount(eth.accounts[0], 'letmepass12');
var deployTransationObject = { from: eth.accounts[0], data: bytecode, gas: 1000000 };
var storageInstance = storageContract.new(deployTransationObject);

console.log(storageInstance.transactionHash); // This is used as output of shell script, do not modify

