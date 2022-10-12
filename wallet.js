const { ethers } = require("ethers");

(async () => {
    const wallet = ethers.Wallet.createRandom();

    console.log("address: ", wallet.address);
    console.log("privateKey: ", wallet.privateKey);
    console.log("mnemonic: ", wallet.mnemonic);
    console.log("mnemonic phrase: ", wallet.mnemonic.phrase);
})();