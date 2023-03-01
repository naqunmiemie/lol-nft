/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Ming, MingInterface } from "../../contracts/Ming";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
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
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
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
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040805180820182526004808252634d696e6760e01b60208084018281528551808701909652928552840152815191929162000051916003916200024d565b508051620000679060049060208401906200024d565b50506005805460ff19169055506200007f33620000ad565b620000a733620000926012600a62000408565b620000a190620f424062000420565b62000107565b62000499565b600580546001600160a01b03838116610100818102610100600160a81b031985161790945560405193909204169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b038216620001635760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064015b60405180910390fd5b6200017160008383620001dc565b806002600082825462000185919062000442565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b620001e662000203565b620001fe838383620001fe60201b620005361760201c565b505050565b60055460ff16156200024b5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016200015a565b565b8280546200025b906200045d565b90600052602060002090601f0160209004810192826200027f5760008555620002ca565b82601f106200029a57805160ff1916838001178555620002ca565b82800160010185558215620002ca579182015b82811115620002ca578251825591602001919060010190620002ad565b50620002d8929150620002dc565b5090565b5b80821115620002d85760008155600101620002dd565b634e487b7160e01b600052601160045260246000fd5b600181815b808511156200034a5781600019048211156200032e576200032e620002f3565b808516156200033c57918102915b93841c93908002906200030e565b509250929050565b600082620003635750600162000402565b81620003725750600062000402565b81600181146200038b57600281146200039657620003b6565b600191505062000402565b60ff841115620003aa57620003aa620002f3565b50506001821b62000402565b5060208310610133831016604e8410600b8410161715620003db575081810a62000402565b620003e7838362000309565b8060001904821115620003fe57620003fe620002f3565b0290505b92915050565b60006200041960ff84168362000352565b9392505050565b60008160001904831182151516156200043d576200043d620002f3565b500290565b60008219821115620004585762000458620002f3565b500190565b600181811c908216806200047257607f821691505b6020821081036200049357634e487b7160e01b600052602260045260246000fd5b50919050565b610c7580620004a96000396000f3fe608060405234801561001057600080fd5b506004361061011b5760003560e01c806370a08231116100b257806395d89b4111610081578063a9059cbb11610066578063a9059cbb1461023a578063dd62ed3e1461024d578063f2fde38b1461028657600080fd5b806395d89b411461021f578063a457c2d71461022757600080fd5b806370a08231146101bd578063715018a6146101e65780638456cb59146101ee5780638da5cb5b146101f657600080fd5b8063313ce567116100ee578063313ce5671461018657806339509351146101955780633f4ba83a146101a85780635c975abb146101b257600080fd5b806306fdde0314610120578063095ea7b31461013e57806318160ddd1461016157806323b872dd14610173575b600080fd5b610128610299565b6040516101359190610adc565b60405180910390f35b61015161014c366004610b4d565b61032b565b6040519015158152602001610135565b6002545b604051908152602001610135565b610151610181366004610b77565b610343565b60405160128152602001610135565b6101516101a3366004610b4d565b610367565b6101b06103a6565b005b60055460ff16610151565b6101656101cb366004610bb3565b6001600160a01b031660009081526020819052604090205490565b6101b06103b8565b6101b06103ca565b60055461010090046001600160a01b03166040516001600160a01b039091168152602001610135565b6101286103da565b610151610235366004610b4d565b6103e9565b610151610248366004610b4d565b610498565b61016561025b366004610bd5565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6101b0610294366004610bb3565b6104a6565b6060600380546102a890610c08565b80601f01602080910402602001604051908101604052809291908181526020018280546102d490610c08565b80156103215780601f106102f657610100808354040283529160200191610321565b820191906000526020600020905b81548152906001019060200180831161030457829003601f168201915b5050505050905090565b60003361033981858561053b565b5060019392505050565b60003361035185828561065f565b61035c8585856106f1565b506001949350505050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490919061033990829086906103a1908790610c42565b61053b565b6103ae6108cf565b6103b661092f565b565b6103c06108cf565b6103b66000610981565b6103d26108cf565b6103b66109f2565b6060600480546102a890610c08565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091908381101561048b5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b61035c828686840361053b565b6000336103398185856106f1565b6104ae6108cf565b6001600160a01b03811661052a5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610482565b61053381610981565b50565b505050565b6001600160a01b03831661059d5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610482565b6001600160a01b0382166105fe5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610482565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146106eb57818110156106de5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610482565b6106eb848484840361053b565b50505050565b6001600160a01b03831661076d5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610482565b6001600160a01b0382166107cf5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610482565b6107da838383610a2f565b6001600160a01b038316600090815260208190526040902054818110156108695760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610482565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a36106eb565b6005546001600160a01b036101009091041633146103b65760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610482565b610937610a37565b6005805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b600580546001600160a01b038381166101008181027fffffffffffffffffffffff0000000000000000000000000000000000000000ff85161790945560405193909204169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6109fa610a89565b6005805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586109643390565b610536610a89565b60055460ff166103b65760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f74207061757365640000000000000000000000006044820152606401610482565b60055460ff16156103b65760405162461bcd60e51b815260206004820152601060248201527f5061757361626c653a20706175736564000000000000000000000000000000006044820152606401610482565b600060208083528351808285015260005b81811015610b0957858101830151858201604001528201610aed565b81811115610b1b576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610b4857600080fd5b919050565b60008060408385031215610b6057600080fd5b610b6983610b31565b946020939093013593505050565b600080600060608486031215610b8c57600080fd5b610b9584610b31565b9250610ba360208501610b31565b9150604084013590509250925092565b600060208284031215610bc557600080fd5b610bce82610b31565b9392505050565b60008060408385031215610be857600080fd5b610bf183610b31565b9150610bff60208401610b31565b90509250929050565b600181811c90821680610c1c57607f821691505b602082108103610c3c57634e487b7160e01b600052602260045260246000fd5b50919050565b60008219821115610c6357634e487b7160e01b600052601160045260246000fd5b50019056fea164736f6c634300080d000a";

type MingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Ming__factory extends ContractFactory {
  constructor(...args: MingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Ming> {
    return super.deploy(overrides || {}) as Promise<Ming>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Ming {
    return super.attach(address) as Ming;
  }
  override connect(signer: Signer): Ming__factory {
    return super.connect(signer) as Ming__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MingInterface {
    return new utils.Interface(_abi) as MingInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Ming {
    return new Contract(address, _abi, signerOrProvider) as Ming;
  }
}
