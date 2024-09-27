import { ethers } from 'hardhat';
import { CarbonCreditNFT } from '../typechain-types'; // Adjust this path if needed

async function main() {
  const CarbonCreditNFTFactory = await ethers.getContractFactory("CarbonCreditNFT");
  const nft: CarbonCreditNFT = await CarbonCreditNFTFactory.deploy();

  await nft.waitForDeployment();

  console.log("CarbonCreditNFT contract deployed to:", nft.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
