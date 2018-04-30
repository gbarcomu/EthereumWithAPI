mkdir -p /opt/data/keystore
cp /opt/common/UTC* /opt/data/keystore
geth --datadir /opt/data init /opt/common/genesis.json
geth --datadir /opt/data --networkid 9 --port 30302 --nodekey /opt/common/bootnode.key &
npm config set unsafe-perm true
npm install scrypt --prefix /opt/node --silent
npm install --prefix /opt/node
/opt/common/miningProcess.sh &
/opt/common/compileAndDeployContract.sh &
sleep 5
npm run start --prefix /opt/node