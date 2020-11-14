const HDWalletProvider = require('truffle-hdwallet-provider-privkey');

const privateKey = "";
const infuraEndpointUrl = "";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777",
    },
    kovan: {
      provider: function () {
        return new HDWalletProvider([privateKey], infuraEndpointUrl)
      },
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: 42
    }
  },
  compilers: {
    solc: {
      version: "^0.6.0"
    }
  }
}