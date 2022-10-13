const {ethers} = require("ethers");

(async () => {
    const wallet = ethers.Wallet.createRandom();

    const keystoreJson = await wallet.encrypt("hello");
    console.log("Key store json: ", keystoreJson);

    const w = await ethers.Wallet.fromEncryptedJson(keystoreJson, "hello");
    console.log("Address: ", w.address);
})();