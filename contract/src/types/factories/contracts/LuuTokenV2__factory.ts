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
  "0x60a06040523060805234801561001457600080fd5b506080516129dd61004c600039600081816105ea015281816106740152818161086c015281816108f101526109ce01526129dd6000f3fe6080604052600436106101c25760003560e01c806370a08231116100f757806395d89b4111610095578063bcdb7b7211610064578063bcdb7b7214610475578063cf9c2e4114610495578063dd62ed3e146104aa578063f2fde38b146104f057600080fd5b806395d89b4114610418578063a0ef91df1461042d578063a457c2d714610435578063a9059cbb1461045557600080fd5b80638456cb59116100d15780638456cb59146103be5780638da5cb5b146103d35780638e15f473146103fb57806393bb0d881461041057600080fd5b806370a082311461035e578063715018a6146103945780638129fc1c146103a957600080fd5b80633f4ba83a1161016457806352d1902d1161013e57806352d1902d146103075780635c975abb1461031c5780635cd8a76b146103345780636865b8e71461034957600080fd5b80633f4ba83a146102bf57806340c10f19146102d45780634f1ef286146102f457600080fd5b806323b872dd116101a057806323b872dd14610241578063313ce567146102615780633659cfe61461027d578063395093511461029f57600080fd5b806306fdde03146101c7578063095ea7b3146101f257806318160ddd14610222575b600080fd5b3480156101d357600080fd5b506101dc610510565b6040516101e99190612563565b60405180910390f35b3480156101fe57600080fd5b5061021261020d3660046125ad565b6105a2565b60405190151581526020016101e9565b34801561022e57600080fd5b506035545b6040519081526020016101e9565b34801561024d57600080fd5b5061021261025c3660046125d7565b6105ba565b34801561026d57600080fd5b50604051601281526020016101e9565b34801561028957600080fd5b5061029d610298366004612613565b6105e0565b005b3480156102ab57600080fd5b506102126102ba3660046125ad565b610757565b3480156102cb57600080fd5b5061029d610796565b3480156102e057600080fd5b5061029d6102ef3660046125ad565b6107fa565b61029d610302366004612675565b610862565b34801561031357600080fd5b506102336109c1565b34801561032857600080fd5b5060655460ff16610212565b34801561034057600080fd5b5061029d610a86565b34801561035557600080fd5b5061029d610b1d565b34801561036a57600080fd5b50610233610379366004612613565b6001600160a01b031660009081526033602052604090205490565b3480156103a057600080fd5b5061029d610c7d565b3480156103b557600080fd5b5061029d610ce1565b3480156103ca57600080fd5b5061029d610de6565b3480156103df57600080fd5b506097546040516001600160a01b0390911681526020016101e9565b34801561040757600080fd5b50610233610e48565b61029d610ece565b34801561042457600080fd5b506101dc610fed565b61029d610ffc565b34801561044157600080fd5b506102126104503660046125ad565b611082565b34801561046157600080fd5b506102126104703660046125ad565b611137565b34801561048157600080fd5b5061029d61049036600461271b565b611145565b3480156104a157600080fd5b5061029d61126a565b3480156104b657600080fd5b506102336104c5366004612734565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b3480156104fc57600080fd5b5061029d61050b366004612613565b61155a565b60606036805461051f90612767565b80601f016020809104026020016040519081016040528092919081815260200182805461054b90612767565b80156105985780601f1061056d57610100808354040283529160200191610598565b820191906000526020600020905b81548152906001019060200180831161057b57829003601f168201915b5050505050905090565b6000336105b0818585611639565b5060019392505050565b6000336105c885828561175d565b6105d38585856117ef565b60019150505b9392505050565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036106725760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b60648201526084015b60405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166106cd7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b0316146107385760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608401610669565b60408051600080825260208201909252610754918391906119ec565b50565b3360008181526034602090815260408083206001600160a01b03871684529091528120549091906105b090829086906107919087906127b7565b611639565b6097546001600160a01b031633146107f05760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610669565b6107f8611b91565b565b6097546001600160a01b031633146108545760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610669565b61085e8282611c2d565b5050565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036108ef5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b6064820152608401610669565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031661094a7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b0316146109b55760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608401610669565b61085e828260016119ec565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610a615760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152608401610669565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b60026000610a9382611d0c565b90508015610aab576000805461ff0019166101001790555b61012e80546001600160a01b03191673a98208a975808fd6aa1585179a0861d357f19142179055801561085e576000805461ff001916905560405160ff831681527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b6097546001600160a01b03163314610b775760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610669565b6040516370a0823160e01b815230600482015273d9ba894e0097f8cc2bbc9d24d308b98e36dc6d0290819063a9059cbb90339083906370a0823190602401602060405180830381865afa158015610bd2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bf691906127cf565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b1681526001600160a01b03909216600483015260248201526044016020604051808303816000875af1158015610c59573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061085e91906127e8565b6097546001600160a01b03163314610cd75760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610669565b6107f86000611e27565b6000610ced6001611d0c565b90508015610d05576000805461ff0019166101001790555b610d5f6040518060400160405280600881526020017f4c7575546f6b656e000000000000000000000000000000000000000000000000815250604051806040016040528060038152602001624c544b60e81b815250611e79565b610d67611eee565b610d6f611f61565b610d77611fd4565b61012d80546001600160a01b031916738a753747a1fa494ec906ce90e9f37563a8af630e1790558015610754576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a150565b6097546001600160a01b03163314610e405760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610669565b6107f861203f565b60008061012d60009054906101000a90046001600160a01b03166001600160a01b031663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa158015610e9f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ec39190612824565b509195945050505050565b60655460ff1615610f145760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610669565b655af3107a4000341015610f6a5760405162461bcd60e51b815260206004820181905260248201527f596f75206d75737420706179206174206c6561737420302e30303031206574686044820152606401610669565b6000610f74610e48565b905060008113610fc65760405162461bcd60e51b815260206004820152600f60248201527f457468207072696365206572726f7200000000000000000000000000000000006044820152606401610669565b60006305f5e100610fd78334612874565b610fe191906128a9565b905061085e3382611c2d565b60606037805461051f90612767565b6097546001600160a01b031633146110565760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610669565b60405133904780156108fc02916000818181858888f19350505050158015610754573d6000803e3d6000fd5b3360008181526034602090815260408083206001600160a01b03871684529091528120549091908381101561111f5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610669565b61112c8286868403611639565b506001949350505050565b6000336105b08185856117ef565b60655460ff161561118b5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610669565b600181116111db5760405162461bcd60e51b815260206004820152601c60248201527f596f75206d75737420706179206174206c6561737420312055736474000000006044820152606401610669565b6040516323b872dd60e01b81523360048201523060248201526044810182905273d9ba894e0097f8cc2bbc9d24d308b98e36dc6d029081906323b872dd906064016020604051808303816000875af115801561123b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061125f91906127e8565b5061085e3383611c2d565b60655460ff16156112b05760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610669565b61012e546040516207335b60ed1b81523060048201526000916001600160a01b03169063e66b600090602401600060405180830381865afa1580156112f9573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261132191908101906128bd565b905060008151116113745760405162461bcd60e51b815260206004820152601360248201527f5072697a6520706f6f6c20697320656d707479000000000000000000000000006044820152606401610669565b61138630670de0b6b3a7640000611137565b6113d25760405162461bcd60e51b815260206004820152601360248201527f5472616e736665722066726f6d206572726f72000000000000000000000000006044820152606401610669565b6040516bffffffffffffffffffffffff193360601b166020820152600090439042906034016040516020818303038152906040528051906020012060001c61141a91906128a9565b6040516bffffffffffffffffffffffff194160601b166020820152459042906034016040516020818303038152906040528051906020012060001c61145f91906128a9565b61146944426127b7565b61147391906127b7565b61147d91906127b7565b61148791906127b7565b61149191906127b7565b6040516020016114a391815260200190565b6040516020818303038152906040528051906020012060001c90506000828351836114ce9190612963565b815181106114de576114de612977565b602090810291909101015161012e546040516323b872dd60e01b8152306004820152336024820152604481018390529192506001600160a01b0316906323b872dd90606401600060405180830381600087803b15801561153d57600080fd5b505af1158015611551573d6000803e3d6000fd5b50505050505050565b6097546001600160a01b031633146115b45760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610669565b6001600160a01b0381166116305760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610669565b61075481611e27565b6001600160a01b03831661169b5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610669565b6001600160a01b0382166116fc5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610669565b6001600160a01b0383811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383811660009081526034602090815260408083209386168352929052205460001981146117e957818110156117dc5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610669565b6117e98484848403611639565b50505050565b6001600160a01b03831661186b5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610669565b6001600160a01b0382166118cd5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610669565b6001600160a01b0383166000908152603360205260409020548181101561195c5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610669565b6001600160a01b038085166000908152603360205260408082208585039055918516815290812080548492906119939084906127b7565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516119df91815260200190565b60405180910390a36117e9565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff1615611a2457611a1f836120ba565b505050565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015611a7e575060408051601f3d908101601f19168201909252611a7b918101906127cf565b60015b611af05760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f7420555550530000000000000000000000000000000000006064820152608401610669565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8114611b855760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c655555494400000000000000000000000000000000000000000000006064820152608401610669565b50611a1f838383612178565b60655460ff16611be35760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f74207061757365640000000000000000000000006044820152606401610669565b6065805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b038216611c835760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610669565b8060356000828254611c9591906127b7565b90915550506001600160a01b03821660009081526033602052604081208054839290611cc29084906127b7565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b60008054610100900460ff1615611d9a578160ff166001148015611d2f5750303b155b611d925760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610669565b506000919050565b60005460ff808416911610611e085760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610669565b506000805460ff191660ff92909216919091179055600190565b919050565b609780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff16611ee45760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610669565b61085e828261219d565b600054610100900460ff16611f595760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610669565b6107f861222f565b600054610100900460ff16611fcc5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610669565b6107f86122a6565b600054610100900460ff166107f85760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610669565b60655460ff16156120855760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610669565b6065805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258611c103390565b6001600160a01b0381163b6121375760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e7472616374000000000000000000000000000000000000006064820152608401610669565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b6121818361231a565b60008251118061218e5750805b15611a1f576117e9838361235a565b600054610100900460ff166122085760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610669565b815161221b90603690602085019061249e565b508051611a1f90603790602084019061249e565b600054610100900460ff1661229a5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610669565b6065805460ff19169055565b600054610100900460ff166123115760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610669565b6107f833611e27565b612323816120ba565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606001600160a01b0383163b6123d95760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e747261637400000000000000000000000000000000000000000000000000006064820152608401610669565b600080846001600160a01b0316846040516123f4919061298d565b600060405180830381855af49150503d806000811461242f576040519150601f19603f3d011682016040523d82523d6000602084013e612434565b606091505b509150915061245c82826040518060600160405280602781526020016129aa60279139612465565b95945050505050565b606083156124745750816105d9565b8251156124845782518084602001fd5b8160405162461bcd60e51b81526004016106699190612563565b8280546124aa90612767565b90600052602060002090601f0160209004810192826124cc5760008555612512565b82601f106124e557805160ff1916838001178555612512565b82800160010185558215612512579182015b828111156125125782518255916020019190600101906124f7565b5061251e929150612522565b5090565b5b8082111561251e5760008155600101612523565b60005b8381101561255257818101518382015260200161253a565b838111156117e95750506000910152565b6020815260008251806020840152612582816040850160208701612537565b601f01601f19169190910160400192915050565b80356001600160a01b0381168114611e2257600080fd5b600080604083850312156125c057600080fd5b6125c983612596565b946020939093013593505050565b6000806000606084860312156125ec57600080fd5b6125f584612596565b925061260360208501612596565b9150604084013590509250925092565b60006020828403121561262557600080fd5b6105d982612596565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561266d5761266d61262e565b604052919050565b6000806040838503121561268857600080fd5b61269183612596565b915060208084013567ffffffffffffffff808211156126af57600080fd5b818601915086601f8301126126c357600080fd5b8135818111156126d5576126d561262e565b6126e7601f8201601f19168501612644565b915080825287848285010111156126fd57600080fd5b80848401858401376000848284010152508093505050509250929050565b60006020828403121561272d57600080fd5b5035919050565b6000806040838503121561274757600080fd5b61275083612596565b915061275e60208401612596565b90509250929050565b600181811c9082168061277b57607f821691505b60208210810361279b57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600082198211156127ca576127ca6127a1565b500190565b6000602082840312156127e157600080fd5b5051919050565b6000602082840312156127fa57600080fd5b815180151581146105d957600080fd5b805169ffffffffffffffffffff81168114611e2257600080fd5b600080600080600060a0868803121561283c57600080fd5b6128458661280a565b94506020860151935060408601519250606086015191506128686080870161280a565b90509295509295909350565b600081600019048311821515161561288e5761288e6127a1565b500290565b634e487b7160e01b600052601260045260246000fd5b6000826128b8576128b8612893565b500490565b600060208083850312156128d057600080fd5b825167ffffffffffffffff808211156128e857600080fd5b818501915085601f8301126128fc57600080fd5b81518181111561290e5761290e61262e565b8060051b915061291f848301612644565b818152918301840191848101908884111561293957600080fd5b938501935b838510156129575784518252938501939085019061293e565b98975050505050505050565b60008261297257612972612893565b500690565b634e487b7160e01b600052603260045260246000fd5b6000825161299f818460208701612537565b919091019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a164736f6c634300080d000a";

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
