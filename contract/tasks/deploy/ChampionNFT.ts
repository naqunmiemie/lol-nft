import { task } from "hardhat/config";
import type { HardhatRuntimeEnvironment, RunSuperFunction, TaskArguments } from "hardhat/types";

export const ChampionNFTAddress = "0xa98208A975808FD6aa1585179a0861d357f19142";

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
