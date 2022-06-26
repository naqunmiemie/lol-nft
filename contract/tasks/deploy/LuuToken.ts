import { task } from "hardhat/config";
import type { HardhatRuntimeEnvironment, RunSuperFunction, TaskArguments } from "hardhat/types";

export const LuuTokenAddress = "0x756C577C1489EE3390FF010028FFd9c57329ce20";

task("deploy:LuuToken").setAction(
  async (taskArgs: TaskArguments, hre: HardhatRuntimeEnvironment, runSuper: RunSuperFunction<any>) => {
    const LuuToken = await hre.ethers.getContractFactory("LuuToken");
    const luuToken = await hre.upgrades.deployProxy(LuuToken);
    await luuToken.deployed();
    console.log("LuuToken deployed to:", luuToken.address);
  },
);


task("upgrade:LuuToken").setAction(
  async (taskArgs: TaskArguments, hre: HardhatRuntimeEnvironment, runSuper: RunSuperFunction<any>) => {
    const LuuToken = await hre.ethers.getContractFactory("LuuToken");
    const luuToken = await hre.upgrades.upgradeProxy(LuuTokenAddress, LuuToken);
    console.log("LuuToken upgraded");
  },
);
