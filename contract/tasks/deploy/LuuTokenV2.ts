import { task } from "hardhat/config";
import type { HardhatRuntimeEnvironment, RunSuperFunction, TaskArguments } from "hardhat/types";
import { LuuTokenAddress } from "./LuuToken";

task("upgrade:LuuTokenV2").setAction(
  async (taskArgs: TaskArguments, hre: HardhatRuntimeEnvironment, runSuper: RunSuperFunction<any>) => {
    const LuuTokenV2 = await hre.ethers.getContractFactory("LuuTokenV2");
    const luuTokenV2 = await hre.upgrades.upgradeProxy(LuuTokenAddress, LuuTokenV2);
    console.log("LuuTokenV2 upgraded");
  },
);
