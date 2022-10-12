const { ethers } = require("ethers");


const userAddress = "0x67CF3bF40b2b3b3D68F6c361AEf81F8AEb2dB637";

(async () => {
    const DAIAddress = "0xdc31Ee1784292379Fbb2964b3B9C4124D8F89C60";
    const DAIABI = [
        "function name() view returns (string)",
        "function symbol() view returns (string)",
        "function balanceOf(address) view returns (uint256)",
        "function transfer(address to, uint256 amount)",
        "event Transfer(address indexed from, address indexed to, uint256 amount)"
    ]

    const provider = new ethers.providers.AlchemyProvider("goerli");

    const DAIContract = new ethers.Contract(DAIAddress, DAIABI, provider);

    const balance = await DAIContract.balanceOf(userAddress);

    console.log("Balance: " + ethers.utils.formatEther(balance));
})();