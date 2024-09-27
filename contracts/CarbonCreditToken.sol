// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract CarbonCreditNFT is ERC721 {
    uint256 public currentTokenId;
    address public owner;

    struct CarbonCredit {
        string projectName;
        string projectLocation;
        string projectType;
        uint256 vintageYear;
        uint256 numberOfCredits;
        string certificationStandard;
    }

    mapping(uint256 => CarbonCredit) public carbonCredits;

    constructor() ERC721("CarbonCreditNFT", "CCN") {
        owner = msg.sender;
    }

    function mint(
        address recipient, 
        string memory projectName, 
        string memory projectLocation, 
        string memory projectType, 
        uint256 vintageYear, 
        uint256 numberOfCredits, 
        string memory certificationStandard
    ) public returns (uint256) {
        uint256 newItemId = ++currentTokenId;
        _safeMint(recipient, newItemId);

        carbonCredits[newItemId] = CarbonCredit({
            projectName: projectName,
            projectLocation: projectLocation,
            projectType: projectType,
            vintageYear: vintageYear,
            numberOfCredits: numberOfCredits,
            certificationStandard: certificationStandard
        });

        return newItemId;
    }

    function getCarbonCreditDetails(uint256 tokenId) public view returns (CarbonCredit memory) {
        return carbonCredits[tokenId];
    }
}
