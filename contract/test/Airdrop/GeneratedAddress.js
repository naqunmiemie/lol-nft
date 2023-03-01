// const { MerkleTree } = require('merkletreejs')
// const keccak256 = require('keccak256')

// let whitelist = [
//     "0xc11cb63bdca7627f74ec69c14612522fdb7a0c20",
//     "0x1499b8312e6fe58b5d1164d4eccf795367c9e1d3",
//     "0x55f510be6ab4c7e07ec6ee637aa83574975d6898",
//     "0xcc2fe3615a45fcacc3534d53be41c6543a0a312d",
//     "0xee226379db83cffc681495730c11fdde79ba4c0c",
//     "0x55f510be6ab4c7e07ec6ee637aa83574975d6898",
//     "0x18b2a687610328590bc8f2e5fedde3b582a49cda"
// ]

// const leafNodes = whitelist.map(addr => keccak256(addr));
// const merkletree = new MerkleTree(leafNodes, keccak256, {sortPairs: true});

// const rootHash = merkletree.getRoot().toString('hex');
// console.log("rootHash is: ", rootHash);
// console.log(merkletree.toString());

// console.log("--------verify------------");
// const claimingAddr2 = leafNodes[0];     
// const hexProof = merkletree.getHexProof(claimingAddr2);    
// console.log(hexProof);      // Proof array as hex strings   
// console.log(merkletree.verify(hexProof, claimingAddr2, rootHash));  

