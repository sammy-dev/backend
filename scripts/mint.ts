import { ethers } from 'hardhat';
import { CarbonCreditNFT } from '../typechain-types'; // Adjust this path if needed

async function main() {
  const [deployer] = await ethers.getSigners();
  const CarbonCreditNFTFactory = await ethers.getContractFactory("CarbonCreditNFT");
  
  // Attach to the deployed contract and cast it to the correct type
  const nft = CarbonCreditNFTFactory.attach('0x4D26a16de37c9719F6fC5a945B47Ab1e2623b168') as CarbonCreditNFT;

  const tx = await nft.mint(
    deployer.address,
    "Green Energy Project",
    "Accra, Ghana",
    "Energy Efficiency",
    2022,
    100,
    "Verified Carbon Standard (VCS)"
  );
  
  await tx.wait();
  console.log("Minted new NFT for carbon credits");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
