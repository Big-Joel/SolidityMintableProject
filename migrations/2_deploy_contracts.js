var MyToken = artifacts.require("MyToken.sol");
var MyTokenSale = artifacts.require("MyTokenSale");
var MyKycContract = artifacts.require("KycContract");
//var MinterRole = artifacts.require("MinterRole");

require("dotenv").config({path: "../.env"});

module.exports = async function(deployer) {
    let addr = await web3.eth.getAccounts();
    //await deployer.deploy(MyToken, process.env.INITIAL_TOKENS);
    await deployer.deploy(MyToken, 0);
    await deployer.deploy(MyKycContract);
    //await deployer.deploy(MinterRole);
    //await deployer.deploy(MinterRole, 1, addr[0], MyToken.address, MyKycContract.address);
    //await deployer.deploy(MinterRole, 1, addr[0], MyToken.address, MyKycContract.address);
    myTokenSale = await deployer.deploy(MyTokenSale, 1, addr[0], MyToken.address, MyKycContract.address);
    //let instance = await MyToken.deployed();
    //await instance.transfer(MyTokenSale.address, process.env.INITIAL_TOKENS);
    let instance = await MyToken.deployed();
    await instance.addMinter(MyTokenSale.address);

}