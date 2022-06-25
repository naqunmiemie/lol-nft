import { ethers, upgrades } from "hardhat";
import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";

// task("deploy:LuuToken").setAction(async function (taskArguments: TaskArguments, { ethers }) {
//   console.log("LuuToken deployed to:");

//   const LuuToken = await ethers.getContractFactory("LuuToken");
//   const luuToken = await upgrades.deployProxy(LuuToken);
//   await luuToken.deployed();
//   console.log("LuuToken deployed to:", luuToken.address);
// });

async function main() {

  const LuuToken = await ethers.getContractFactory("LuuToken")
  console.log("Deploying Box...")
  const luuToken = await upgrades.deployProxy(LuuToken)
  console.log(luuToken.address," luuToken(proxy) address")  
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})

