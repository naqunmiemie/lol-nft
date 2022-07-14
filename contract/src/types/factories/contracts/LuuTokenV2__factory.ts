/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  LuuTokenV2,
  LuuTokenV2Interface,
} from "../../contracts/LuuTokenV2";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
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
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
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
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "buyChampionNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "buyLuuTokenByEth",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "buyLuuTokenByUsdt",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "getLatestPrice",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
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
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initializeV2",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "luckyDraw",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "mint",
    outputs: [],
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
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawEth",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawUsdt",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523060805234801561001457600080fd5b50608051612c6861004c600039600081816106150152818161069f015281816108970152818161091c01526109f90152612c686000f3fe6080604052600436106101cd5760003560e01c806370a08231116100f757806395d89b4111610095578063bcdb7b7211610064578063bcdb7b72146104a0578063cf9c2e41146104c0578063dd62ed3e146104d5578063f2fde38b1461051b57600080fd5b806395d89b4114610443578063a0ef91df14610458578063a457c2d714610460578063a9059cbb1461048057600080fd5b80638456cb59116100d15780638456cb59146103e95780638da5cb5b146103fe5780638e15f4731461042657806393bb0d881461043b57600080fd5b806370a0823114610389578063715018a6146103bf5780638129fc1c146103d457600080fd5b80633f4ba83a1161016f5780635c975abb1161013e5780635c975abb146103275780635cd8a76b1461033f5780635ec96453146103545780636865b8e71461037457600080fd5b80633f4ba83a146102ca57806340c10f19146102df5780634f1ef286146102ff57806352d1902d1461031257600080fd5b806323b872dd116101ab57806323b872dd1461024c578063313ce5671461026c5780633659cfe61461028857806339509351146102aa57600080fd5b806306fdde03146101d2578063095ea7b3146101fd57806318160ddd1461022d575b600080fd5b3480156101de57600080fd5b506101e761053b565b6040516101f491906127c2565b60405180910390f35b34801561020957600080fd5b5061021d61021836600461280a565b6105cd565b60405190151581526020016101f4565b34801561023957600080fd5b506035545b6040519081526020016101f4565b34801561025857600080fd5b5061021d610267366004612836565b6105e5565b34801561027857600080fd5b50604051601281526020016101f4565b34801561029457600080fd5b506102a86102a3366004612877565b61060b565b005b3480156102b657600080fd5b5061021d6102c536600461280a565b610782565b3480156102d657600080fd5b506102a86107c1565b3480156102eb57600080fd5b506102a86102fa36600461280a565b610825565b6102a861030d3660046128db565b61088d565b34801561031e57600080fd5b5061023e6109ec565b34801561033357600080fd5b5060655460ff1661021d565b34801561034b57600080fd5b506102a8610ab1565b34801561036057600080fd5b506102a861036f366004612983565b610b48565b34801561038057600080fd5b506102a8610dae565b34801561039557600080fd5b5061023e6103a4366004612877565b6001600160a01b031660009081526033602052604090205490565b3480156103cb57600080fd5b506102a8610f0e565b3480156103e057600080fd5b506102a8610f72565b3480156103f557600080fd5b506102a8611077565b34801561040a57600080fd5b506097546040516001600160a01b0390911681526020016101f4565b34801561043257600080fd5b5061023e6110d9565b6102a861115f565b34801561044f57600080fd5b506101e761127e565b6102a861128d565b34801561046c57600080fd5b5061021d61047b36600461280a565b611313565b34801561048c57600080fd5b5061021d61049b36600461280a565b6113c8565b3480156104ac57600080fd5b506102a86104bb366004612983565b6113d6565b3480156104cc57600080fd5b506102a86114fb565b3480156104e157600080fd5b5061023e6104f036600461299c565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b34801561052757600080fd5b506102a8610536366004612877565b6117b9565b60606036805461054a906129d5565b80601f0160208091040260200160405190810160405280929190818152602001828054610576906129d5565b80156105c35780601f10610598576101008083540402835291602001916105c3565b820191906000526020600020905b8154815290600101906020018083116105a657829003601f168201915b5050505050905090565b6000336105db818585611898565b5060019392505050565b6000336105f38582856119bc565b6105fe858585611a4e565b60019150505b9392505050565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016300361069d5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b60648201526084015b60405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166106f87f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b0316146107635760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608401610694565b6040805160008082526020820190925261077f91839190611c4b565b50565b3360008181526034602090815260408083206001600160a01b03871684529091528120549091906105db90829086906107bc908790612a25565b611898565b6097546001600160a01b0316331461081b5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610694565b610823611df0565b565b6097546001600160a01b0316331461087f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610694565b6108898282611e8c565b5050565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016300361091a5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b6064820152608401610694565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166109757f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b0316146109e05760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608401610694565b61088982826001611c4b565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610a8c5760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152608401610694565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b60026000610abe82611f6b565b90508015610ad6576000805461ff0019166101001790555b61012e80546001600160a01b03191673a98208a975808fd6aa1585179a0861d357f191421790558015610889576000805461ff001916905560405160ff831681527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b60655460ff1615610b8e5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610694565b61012e5460405163020604bf60e21b8152600481018390526001600160a01b03909116903090829063081812fc90602401602060405180830381865afa158015610bdc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c009190612a3d565b6001600160a01b031614610c565760405162461bcd60e51b815260206004820152601660248201527f617070726f766564206c6f7365206566666963616379000000000000000000006044820152606401610694565b6040516331a9108f60e11b8152600481018390526000906001600160a01b03831690636352211e90602401602060405180830381865afa158015610c9e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cc29190612a3d565b9050610d3781836001600160a01b031663cb15c135866040518263ffffffff1660e01b8152600401610cf691815260200190565b602060405180830381865afa158015610d13573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061049b9190612a5a565b610d4057600080fd5b6040516323b872dd60e01b81526001600160a01b038281166004830152336024830152604482018590528316906323b872dd906064015b600060405180830381600087803b158015610d9157600080fd5b505af1158015610da5573d6000803e3d6000fd5b50505050505050565b6097546001600160a01b03163314610e085760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610694565b6040516370a0823160e01b815230600482015273d9ba894e0097f8cc2bbc9d24d308b98e36dc6d0290819063a9059cbb90339083906370a0823190602401602060405180830381865afa158015610e63573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e879190612a5a565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b1681526001600160a01b03909216600483015260248201526044016020604051808303816000875af1158015610eea573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108899190612a73565b6097546001600160a01b03163314610f685760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610694565b6108236000612086565b6000610f7e6001611f6b565b90508015610f96576000805461ff0019166101001790555b610ff06040518060400160405280600881526020017f4c7575546f6b656e000000000000000000000000000000000000000000000000815250604051806040016040528060038152602001624c544b60e81b8152506120d8565b610ff861214d565b6110006121c0565b611008612233565b61012d80546001600160a01b031916738a753747a1fa494ec906ce90e9f37563a8af630e179055801561077f576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a150565b6097546001600160a01b031633146110d15760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610694565b61082361229e565b60008061012d60009054906101000a90046001600160a01b03166001600160a01b031663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa158015611130573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111549190612aaf565b509195945050505050565b60655460ff16156111a55760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610694565b655af3107a40003410156111fb5760405162461bcd60e51b815260206004820181905260248201527f596f75206d75737420706179206174206c6561737420302e30303031206574686044820152606401610694565b60006112056110d9565b9050600081136112575760405162461bcd60e51b815260206004820152600f60248201527f457468207072696365206572726f7200000000000000000000000000000000006044820152606401610694565b60006305f5e1006112688334612aff565b6112729190612b34565b90506108893382611e8c565b60606037805461054a906129d5565b6097546001600160a01b031633146112e75760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610694565b60405133904780156108fc02916000818181858888f1935050505015801561077f573d6000803e3d6000fd5b3360008181526034602090815260408083206001600160a01b0387168452909152812054909190838110156113b05760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610694565b6113bd8286868403611898565b506001949350505050565b6000336105db818585611a4e565b60655460ff161561141c5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610694565b6001811161146c5760405162461bcd60e51b815260206004820152601c60248201527f596f75206d75737420706179206174206c6561737420312055736474000000006044820152606401610694565b6040516323b872dd60e01b81523360048201523060248201526044810182905273d9ba894e0097f8cc2bbc9d24d308b98e36dc6d029081906323b872dd906064016020604051808303816000875af11580156114cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114f09190612a73565b506108893383611e8c565b60655460ff16156115415760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610694565b61012e546040516207335b60ed1b81523060048201526000916001600160a01b03169063e66b600090602401600060405180830381865afa15801561158a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526115b29190810190612b48565b905060008151116116055760405162461bcd60e51b815260206004820152601360248201527f5072697a6520706f6f6c20697320656d707479000000000000000000000000006044820152606401610694565b61161730670de0b6b3a76400006113c8565b6116635760405162461bcd60e51b815260206004820152601360248201527f5472616e736665722066726f6d206572726f72000000000000000000000000006044820152606401610694565b6040516bffffffffffffffffffffffff193360601b166020820152600090439042906034016040516020818303038152906040528051906020012060001c6116ab9190612b34565b6040516bffffffffffffffffffffffff194160601b166020820152459042906034016040516020818303038152906040528051906020012060001c6116f09190612b34565b6116fa4442612a25565b6117049190612a25565b61170e9190612a25565b6117189190612a25565b6117229190612a25565b60405160200161173491815260200190565b6040516020818303038152906040528051906020012060001c905060008283518361175f9190612bee565b8151811061176f5761176f612c02565b602090810291909101015161012e546040516323b872dd60e01b8152306004820152336024820152604481018390529192506001600160a01b0316906323b872dd90606401610d77565b6097546001600160a01b031633146118135760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610694565b6001600160a01b03811661188f5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610694565b61077f81612086565b6001600160a01b0383166118fa5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610694565b6001600160a01b03821661195b5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610694565b6001600160a01b0383811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038381166000908152603460209081526040808320938616835292905220546000198114611a485781811015611a3b5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610694565b611a488484848403611898565b50505050565b6001600160a01b038316611aca5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610694565b6001600160a01b038216611b2c5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610694565b6001600160a01b03831660009081526033602052604090205481811015611bbb5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610694565b6001600160a01b03808516600090815260336020526040808220858503905591851681529081208054849290611bf2908490612a25565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051611c3e91815260200190565b60405180910390a3611a48565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff1615611c8357611c7e83612319565b505050565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015611cdd575060408051601f3d908101601f19168201909252611cda91810190612a5a565b60015b611d4f5760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f7420555550530000000000000000000000000000000000006064820152608401610694565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8114611de45760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c655555494400000000000000000000000000000000000000000000006064820152608401610694565b50611c7e8383836123d7565b60655460ff16611e425760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f74207061757365640000000000000000000000006044820152606401610694565b6065805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b038216611ee25760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610694565b8060356000828254611ef49190612a25565b90915550506001600160a01b03821660009081526033602052604081208054839290611f21908490612a25565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b60008054610100900460ff1615611ff9578160ff166001148015611f8e5750303b155b611ff15760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610694565b506000919050565b60005460ff8084169116106120675760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610694565b506000805460ff191660ff92909216919091179055600190565b919050565b609780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff166121435760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610694565b61088982826123fc565b600054610100900460ff166121b85760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610694565b61082361248e565b600054610100900460ff1661222b5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610694565b610823612505565b600054610100900460ff166108235760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610694565b60655460ff16156122e45760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610694565b6065805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258611e6f3390565b6001600160a01b0381163b6123965760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e7472616374000000000000000000000000000000000000006064820152608401610694565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b6123e083612579565b6000825111806123ed5750805b15611c7e57611a4883836125b9565b600054610100900460ff166124675760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610694565b815161247a9060369060208501906126fd565b508051611c7e9060379060208401906126fd565b600054610100900460ff166124f95760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610694565b6065805460ff19169055565b600054610100900460ff166125705760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610694565b61082333612086565b61258281612319565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606001600160a01b0383163b6126385760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e747261637400000000000000000000000000000000000000000000000000006064820152608401610694565b600080846001600160a01b0316846040516126539190612c18565b600060405180830381855af49150503d806000811461268e576040519150601f19603f3d011682016040523d82523d6000602084013e612693565b606091505b50915091506126bb8282604051806060016040528060278152602001612c35602791396126c4565b95945050505050565b606083156126d3575081610604565b8251156126e35782518084602001fd5b8160405162461bcd60e51b815260040161069491906127c2565b828054612709906129d5565b90600052602060002090601f01602090048101928261272b5760008555612771565b82601f1061274457805160ff1916838001178555612771565b82800160010185558215612771579182015b82811115612771578251825591602001919060010190612756565b5061277d929150612781565b5090565b5b8082111561277d5760008155600101612782565b60005b838110156127b1578181015183820152602001612799565b83811115611a485750506000910152565b60208152600082518060208401526127e1816040850160208701612796565b601f01601f19169190910160400192915050565b6001600160a01b038116811461077f57600080fd5b6000806040838503121561281d57600080fd5b8235612828816127f5565b946020939093013593505050565b60008060006060848603121561284b57600080fd5b8335612856816127f5565b92506020840135612866816127f5565b929592945050506040919091013590565b60006020828403121561288957600080fd5b8135610604816127f5565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156128d3576128d3612894565b604052919050565b600080604083850312156128ee57600080fd5b82356128f9816127f5565b915060208381013567ffffffffffffffff8082111561291757600080fd5b818601915086601f83011261292b57600080fd5b81358181111561293d5761293d612894565b61294f601f8201601f191685016128aa565b9150808252878482850101111561296557600080fd5b80848401858401376000848284010152508093505050509250929050565b60006020828403121561299557600080fd5b5035919050565b600080604083850312156129af57600080fd5b82356129ba816127f5565b915060208301356129ca816127f5565b809150509250929050565b600181811c908216806129e957607f821691505b602082108103612a0957634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115612a3857612a38612a0f565b500190565b600060208284031215612a4f57600080fd5b8151610604816127f5565b600060208284031215612a6c57600080fd5b5051919050565b600060208284031215612a8557600080fd5b8151801515811461060457600080fd5b805169ffffffffffffffffffff8116811461208157600080fd5b600080600080600060a08688031215612ac757600080fd5b612ad086612a95565b9450602086015193506040860151925060608601519150612af360808701612a95565b90509295509295909350565b6000816000190483118215151615612b1957612b19612a0f565b500290565b634e487b7160e01b600052601260045260246000fd5b600082612b4357612b43612b1e565b500490565b60006020808385031215612b5b57600080fd5b825167ffffffffffffffff80821115612b7357600080fd5b818501915085601f830112612b8757600080fd5b815181811115612b9957612b99612894565b8060051b9150612baa8483016128aa565b8181529183018401918481019088841115612bc457600080fd5b938501935b83851015612be257845182529385019390850190612bc9565b98975050505050505050565b600082612bfd57612bfd612b1e565b500690565b634e487b7160e01b600052603260045260246000fd5b60008251612c2a818460208701612796565b919091019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a164736f6c634300080d000a";

type LuuTokenV2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LuuTokenV2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LuuTokenV2__factory extends ContractFactory {
  constructor(...args: LuuTokenV2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LuuTokenV2> {
    return super.deploy(overrides || {}) as Promise<LuuTokenV2>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LuuTokenV2 {
    return super.attach(address) as LuuTokenV2;
  }
  override connect(signer: Signer): LuuTokenV2__factory {
    return super.connect(signer) as LuuTokenV2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LuuTokenV2Interface {
    return new utils.Interface(_abi) as LuuTokenV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LuuTokenV2 {
    return new Contract(address, _abi, signerOrProvider) as LuuTokenV2;
  }
}