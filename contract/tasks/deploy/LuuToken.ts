import { task } from "hardhat/config";
import type { HardhatRuntimeEnvironment, RunSuperFunction, TaskArguments } from "hardhat/types";

export const LuuTokenAddress = "0x8C284C2d6C01c68d5efc200eF2c319338B2444e1";

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
