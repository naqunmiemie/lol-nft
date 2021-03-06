/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Cha, ChaInterface } from "../../../contracts/LuuTokenV2.sol/Cha";

const _abi = [
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class Cha__factory {
  static readonly abi = _abi;
  static createInterface(): ChaInterface {
    return new utils.Interface(_abi) as ChaInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Cha {
    return new Contract(address, _abi, signerOrProvider) as Cha;
  }
}
