// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Airdrop is Ownable {
    bytes32 public merkleRoot = 0x9243a73f24467ae4c63c33f3ded1f04fa9e455d61ad9ab5316e72a400c7ee7f1;
    address public immutable mingAddr;

    mapping(address => bool) public whitelistClaimed;

    constructor(address mingAddr_) {
        mingAddr = mingAddr_;
    }

    // verify the provided _merkleProof
    function claim(bytes32[] calldata _merkleProof) public {
        require(!whitelistClaimed[msg.sender], "address has already claimed.");

        bytes32 leaf = keccak256(abi.encodePacked(msg.sender));
        require(MerkleProof.verify(_merkleProof, merkleRoot, leaf), "Invaild proof.");

        whitelistClaimed[msg.sender] = true;
        IERC20(mingAddr).transferFrom(owner(), msg.sender, 10**18);
    }

    function setRootHash(bytes32 roothash_) external onlyOwner {
        merkleRoot = roothash_;
    }
}

// import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

// contract Airdrop {
//     address public immutable token;
//     bytes32 public immutable merkleRoot;

//     // This is a packed array of booleans.
//     mapping(uint256 => uint256) private claimedBitMap;

//     constructor(address token_, bytes32 merkleRoot_) {
//         token = token_;
//         merkleRoot = merkleRoot_;
//     }

//     function isClaimed(uint256 index) public view returns (bool) {
//         uint256 claimedWordIndex = index / 256;
//         uint256 claimedBitIndex = index % 256;
//         uint256 claimedWord = claimedBitMap[claimedWordIndex];
//         uint256 mask = (1 << claimedBitIndex);
//         return claimedWord & mask == mask;
//     }

//     function _setClaimed(uint256 index) private {
//         uint256 claimedWordIndex = index / 256;
//         uint256 claimedBitIndex = index % 256;
//         claimedBitMap[claimedWordIndex] = claimedBitMap[claimedWordIndex] | (1 << claimedBitIndex);
//     }

//     function claim(uint256 index, address account, uint256 amount, bytes32[] calldata merkleProof) external {
//         require(!isClaimed(index), 'MerkleDistributor: Drop already claimed.');

//         // Verify the merkle proof.
//         bytes32 node = keccak256(abi.encodePacked(index, account, amount));
//         require(MerkleProof.verify(merkleProof, merkleRoot, node), 'MerkleDistributor: Invalid proof.');

//         // Mark it claimed and send the token.
//         _setClaimed(index);
//         require(IERC20(token).transfer(account, amount), 'MerkleDistributor: Transfer failed.');

//     }
// }
