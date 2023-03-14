import { expect } from "chai";
import { Signer, utils } from "ethers";
import { ethers } from "hardhat";

import keccak256 from "keccak256";
import MerkleTree from "merkletreejs";

import { Airdrop } from "../../src/types/contracts/Airdrop";
import { Ming } from "../../src/types/contracts/Ming";

var owner: Signer; //管理员
var user: Signer; //白名单地址
var pub: Signer; //非白名单地址

var ownerAddr: string;
var userAddr: string;
var pubAddr: string;

var ming: Ming;
var airdrop: Airdrop;

var errExp = new Error("No expected error occurred");

//第0个是user
let whitelist = [
  "0x6cA3F330D3488A6157A88b7E3C240C40C16D1Df8",
  "0x1499b8312e6fe58b5d1164d4eccf795367c9e1d3",
  "0x55f510be6ab4c7e07ec6ee637aa83574975d6898",
  "0xcc2fe3615a45fcacc3534d53be41c6543a0a312d",
  "0xee226379db83cffc681495730c11fdde79ba4c0c",
  "0x55f510be6ab4c7e07ec6ee637aa83574975d6898",
  "0x18b2a687610328590bc8f2e5fedde3b582a49cda",
];

const leafNodes = whitelist.map(addr => keccak256(addr));
const merkletree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });

const rootHash = merkletree.getRoot().toString("hex");
console.log("rootHash is: ", rootHash);
// console.log(merkletree.toString());

// console.log("--------verify------------");
const claimAddr = leafNodes[0];
const merkleProof = merkletree.getHexProof(claimAddr);
// console.log(merkleProof); // Proof array as hex strings
// console.log(merkletree.verify(merkleProof, claimAddr, rootHash));

describe("Airdrop tests", function () {
  before(async function () {
    owner = (await ethers.getSigners())[0];
    user = (await ethers.getSigners())[1];
    pub = (await ethers.getSigners())[2];
    ownerAddr = await owner.getAddress();
    userAddr = await user.getAddress();
    pubAddr = await pub.getAddress();

    const Ming = await ethers.getContractFactory("Ming");
    ming = await Ming.deploy();
    await ming.deployed();
    console.log("Ming deployed success");

    const Airdrop = await ethers.getContractFactory("Airdrop");
    airdrop = await Airdrop.deploy(ming.address);
    await airdrop.deployed();
    console.log("Airdrop deployed success");

    //授权
    await ming.approve(airdrop.address, utils.parseEther("1000000"));
  });

  describe("Airdrop user", function () {
    it("Invaild proof", async function () {
      await airdrop
        .connect(user)
        .claim(merkletree.getHexProof(whitelist[1]))
        .then(() => {
          throw errExp;
        })
        .catch(error => {
          expect(error.message).to.include("Invaild proof");
        });
    });

    it("claim twice", async function () {
      //检查余额
      expect(await ming.connect(user).balanceOf(userAddr)).to.equal(utils.parseEther("0"));

      //第一次交易
      await airdrop.connect(user).claim(merkleProof);

      //   第二次交易
      await airdrop
        .connect(user)
        .claim(merkleProof)
        .then(() => {
          throw errExp;
        })
        .catch(error => {
          expect(error.message).to.include("address has already claimed");
        });

      //   检查余额
      expect(await ming.connect(user).balanceOf(userAddr)).to.equal(utils.parseEther("1"));
    });
  });

  describe("Airdrop pub", function () {
    it("pub Invaild proof", async function () {
      await airdrop
        .connect(pub)
        .claim(merkletree.getHexProof(pubAddr))
        .then(() => {
          throw errExp;
        })
        .catch(error => {
          expect(error.message).to.include("Invaild proof");
        });
    });
  });
});
