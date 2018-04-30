#!/bin/bash
rm -f /opt/common/Greet.js
echo "var storageOutput=`solc --optimize --combined-json abi,bin,interface /opt/common/Greet.sol`" > /opt/common/Greet.js
cat /opt/common/Greet.js
rm -f /opt/common/transactionHash
geth --exec 'loadScript("/opt/common/deployContract.js")' attach ipc:/opt/data/geth.ipc | head -1 > /opt/common/transactionHash
