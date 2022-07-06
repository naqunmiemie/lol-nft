import { task } from "hardhat/config";
import type { HardhatRuntimeEnvironment, RunSuperFunction, TaskArguments } from "hardhat/types";

export const ChampionNFTAddress = "0x5A2afAcFC8c84ad42646876d3d026415d1760735";

task("deploy:ChampionNFT").setAction(
  async (taskArgs: TaskArguments, hre: HardhatRuntimeEnvironment, runSuper: RunSuperFunction<any>) => {
    const ChampionNFT = await hre.ethers.getContractFactory("ChampionNFT");
    const championNFT = await hre.upgrades.deployProxy(ChampionNFT);
    await championNFT.deployed();
    console.log("ChampionNFT deployed to:", championNFT.address);
  },
);


task("upgrade:ChampionNFT").setAction(
  async (taskArgs: TaskArguments, hre: HardhatRuntimeEnvironment, runSuper: RunSuperFunction<any>) => {
    const ChampionNFT = await hre.ethers.getContractFactory("ChampionNFT");
    const championNFT = await hre.upgrades.upgradeProxy(ChampionNFTAddress, ChampionNFT);
    console.log("ChampionNFT upgraded");
  },
);
