import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers, upgrades } from "hardhat";
import { task } from "hardhat/config";
import type { HardhatRuntimeEnvironment, RunSuperFunction, TaskArguments } from "hardhat/types";

import type { Greeter } from "../../src/types/contracts/Greeter";
import type { Greeter__factory } from "../../src/types/factories/contracts/Greeter__factory";

task("deploy:Greeter")
  .addParam("greeting", "Say hello, be nice")
  .setAction(async function (taskArguments: TaskArguments, { ethers }) {
    const signers: SignerWithAddress[] = await ethers.getSigners();
    const greeterFactory: Greeter__factory = <Greeter__factory>await ethers.getContractFactory("Greeter");
    const greeter: Greeter = <Greeter>await greeterFactory.connect(signers[0]).deploy(taskArguments.greeting);
    await greeter.deployed();
    console.log("Greeter deployed to: ", greeter.address);
  });

task("deploy:Greeter").setAction(
  async (taskArgs: TaskArguments, hre: HardhatRuntimeEnvironment, runSuper: RunSuperFunction<any>) => {
    const Greeter = await hre.ethers.getContractFactory("Greeter") as Greeter__factory;
    const greeter = await hre.upgrades.deployProxy(Greeter) as Greeter;
    await greeter.deployed();
    console.log("Greeter deployed to:", greeter.address);
  },
);
