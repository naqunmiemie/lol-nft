/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { VRFD20, VRFD20Interface } from "../../contracts/VRFD20";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint64",
        name: "subscriptionId",
        type: "uint64",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "have",
        type: "address",
      },
      {
        internalType: "address",
        name: "want",
        type: "address",
      },
    ],
    name: "OnlyCoordinatorCanFulfill",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    name: "DiceLanded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "roller",
        type: "address",
      },
    ],
    name: "DiceRolled",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "player",
        type: "address",
      },
    ],
    name: "house",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "randomWords",
        type: "uint256[]",
      },
    ],
    name: "rawFulfillRandomWords",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "roller",
        type: "address",
      },
    ],
    name: "rollDice",
    outputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a0604052600180546001600160a01b031916736168499c0cffcacd319c818142124b7a15e857ab1790557fd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc600255600380546601000300009c406001600160501b031990911617905534801561007557600080fd5b50604051610c45380380610c45833981016040819052610094916100f8565b6001546001600160a01b0316608081905260008054600380546a01000000000000000000003302600160501b600160f01b03199091161790556001600160401b03909316600160a01b026001600160e01b0319909316909117919091179055610128565b60006020828403121561010a57600080fd5b81516001600160401b038116811461012157600080fd5b9392505050565b608051610afd6101486000396000818160b0015260f20152610afd6000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80631fe543e314610046578063b1cad5e31461005b578063dd02d9e514610084575b600080fd5b61005961005436600461090b565b6100a5565b005b61006e6100693660046109d5565b610132565b60405161007b9190610a05565b60405180910390f35b6100976100923660046109d5565b61022c565b60405190815260200161007b565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146101245760405163073e64fd60e21b81523360048201526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660248201526044015b60405180910390fd5b61012e8282610409565b5050565b6001600160a01b0381166000908152600560205260408120546060910361019b5760405162461bcd60e51b815260206004820152600f60248201527f44696365206e6f7420726f6c6c65640000000000000000000000000000000000604482015260640161011b565b6001600160a01b038216600090815260056020526040902054602919016102045760405162461bcd60e51b815260206004820152601060248201527f526f6c6c20696e2070726f677265737300000000000000000000000000000000604482015260640161011b565b6001600160a01b03821660009081526005602052604090205461022690610495565b92915050565b6003546000906a010000000000000000000090046001600160a01b0316331461025457600080fd5b6001600160a01b038216600090815260056020526040902054156102ba5760405162461bcd60e51b815260206004820152600e60248201527f416c726561647920726f6c6c6564000000000000000000000000000000000000604482015260640161011b565b6000546002546003546040516305d3b1d360e41b8152600481019290925274010000000000000000000000000000000000000000830467ffffffffffffffff166024830152640100000000810461ffff16604483015263ffffffff808216606484015266010000000000009091041660848201526001600160a01b0390911690635d3b1d309060a4016020604051808303816000875af1158015610362573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103869190610a5a565b600081815260046020908152604080832080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0388169081179091558084526005909252808320602a9055519293509183917f3e7fdeab84c01ce5308321caa0b460e1c4ec3c7099223d79634d9a71d99932e391a3919050565b600060148260008151811061042057610420610a73565b60200260200101516104329190610a89565b61043d906001610ac1565b6000848152600460209081526040808320546001600160a01b03168352600590915280822083905551919250829185917f54d97c1f7e5abad75bd421455cd4dd296852a52e1ea721f2cdb66d06fa2082a991a3505050565b604080516102c081018252600961028082018181527f54617267617279656e00000000000000000000000000000000000000000000006102a08401528252825180840184528181527f4c616e6e69737465720000000000000000000000000000000000000000000000602082810191909152808401919091528351808501855260058082527f537461726b00000000000000000000000000000000000000000000000000000082840152848601919091528451808601865260068082527f547972656c6c000000000000000000000000000000000000000000000000000082850152606086810192909252865180880188529485527f426172617468656f6e00000000000000000000000000000000000000000000008585015260808601949094528551808701875260078082527f4d617274656c6c000000000000000000000000000000000000000000000000008286015260a0870191909152865180880188528381527f54756c6c790000000000000000000000000000000000000000000000000000008186015260c0870152865180880188528581527f426f6c746f6e00000000000000000000000000000000000000000000000000008186015260e0870152865180880188528181527f477265796a6f790000000000000000000000000000000000000000000000000081860152610100870152865180880188528381527f417272796e000000000000000000000000000000000000000000000000000000818601526101208701528651808801885260048152634672657960e01b81860152610140870152865180880188528181527f4d6f726d6f6e740000000000000000000000000000000000000000000000000081860152610160870152865180880188528581527f5461726c6579000000000000000000000000000000000000000000000000000081860152610180870152865180880188528381527f4461796e65000000000000000000000000000000000000000000000000000000818601526101a0870152865180880188529283527f556d626572000000000000000000000000000000000000000000000000000000838501526101c08601929092528551808701875260088082527f56616c6572796f6e000000000000000000000000000000000000000000000000828601526101e0870191909152865180880188528181527f4d616e6465726c7900000000000000000000000000000000000000000000000081860152610200870152865180880188529283527f436c6567616e650000000000000000000000000000000000000000000000000083850152610220860192909252855180870187529384527f476c6f766572000000000000000000000000000000000000000000000000000084840152610240850193909352845180860190955284527f4b6172737461726b00000000000000000000000000000000000000000000000090840152610260820192909252806108d9600185610ad9565b601481106108e9576108e9610a73565b60200201519392505050565b634e487b7160e01b600052604160045260246000fd5b6000806040838503121561091e57600080fd5b8235915060208084013567ffffffffffffffff8082111561093e57600080fd5b818601915086601f83011261095257600080fd5b813581811115610964576109646108f5565b8060051b604051601f19603f83011681018181108582111715610989576109896108f5565b6040529182528482019250838101850191898311156109a757600080fd5b938501935b828510156109c5578435845293850193928501926109ac565b8096505050505050509250929050565b6000602082840312156109e757600080fd5b81356001600160a01b03811681146109fe57600080fd5b9392505050565b600060208083528351808285015260005b81811015610a3257858101830151858201604001528201610a16565b81811115610a44576000604083870101525b50601f01601f1916929092016040019392505050565b600060208284031215610a6c57600080fd5b5051919050565b634e487b7160e01b600052603260045260246000fd5b600082610aa657634e487b7160e01b600052601260045260246000fd5b500690565b634e487b7160e01b600052601160045260246000fd5b60008219821115610ad457610ad4610aab565b500190565b600082821015610aeb57610aeb610aab565b50039056fea164736f6c634300080d000a";

type VRFD20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VRFD20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VRFD20__factory extends ContractFactory {
  constructor(...args: VRFD20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    subscriptionId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<VRFD20> {
    return super.deploy(subscriptionId, overrides || {}) as Promise<VRFD20>;
  }
  override getDeployTransaction(
    subscriptionId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(subscriptionId, overrides || {});
  }
  override attach(address: string): VRFD20 {
    return super.attach(address) as VRFD20;
  }
  override connect(signer: Signer): VRFD20__factory {
    return super.connect(signer) as VRFD20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VRFD20Interface {
    return new utils.Interface(_abi) as VRFD20Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): VRFD20 {
    return new Contract(address, _abi, signerOrProvider) as VRFD20;
  }
}
