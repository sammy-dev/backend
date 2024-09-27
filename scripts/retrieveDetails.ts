// scripts/retrieveDetails.ts
import { ethers } from 'hardhat';
import { CarbonCreditNFT } from '../typechain-types'; // Adjust this path if needed

async function main() {
    const [deployer] = await ethers.getSigners();
    const CarbonCreditNFTFactory = await ethers.getContractFactory("CarbonCreditNFT");

    // Use your deployed contract address
    const contractAddress = '0xDe07ed2039677c55895F09918636357fCA2179AD';
    const nft = CarbonCreditNFTFactory.attach(contractAddress) as CarbonCreditNFT;

    const tokenId = 1; // Replace with the desired token ID
    const details = await nft.getCarbonCreditDetails(tokenId);
    console.log("Carbon Credit Details:", details);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
