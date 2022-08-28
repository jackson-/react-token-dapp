require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.9",
  paths: {
    artifacts: './src/artifacts'
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    ropsten: {
      url: "https://ropsten.infura.io/v3/75f266ceb7824dc48eea0f03b10114c9",
      accounts: [`${process.env.ACCOUNT_KEY}`]
    }
  }
};
