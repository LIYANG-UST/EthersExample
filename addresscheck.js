const { ethers } = require("ethers");

(async () => {
    const address = "0x67CF3bF40b2b3b3D68F6c361AEf81F8AEb2dB637";
    const isValid = ethers.utils.isAddress(address);

    console.log("isValid: ", isValid);

    const provider = new ethers.providers.AlchemyProvider();
    const weth = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
    const code = await provider.getCode(weth);
    const isContract = code !== "0x";
    console.log("isContract: ", isContract);
})();