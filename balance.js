const { ethers } = require("ethers");


const userAddress = "0x32eb34d060c12ad0491d260c436d30e5fb13a8cd";

(async () => {
    const provider = new ethers.getDefaultProvider("goerli");
    const balance = await provider.getBalance(userAddress);

    console.log("Balance: " + ethers.utils.formatEther(balance));
})();