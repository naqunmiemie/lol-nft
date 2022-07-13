/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  LuuTokenV2,
  LuuTokenV2Interface,
} from "../../../contracts/LuuTokenV2.sol/LuuTokenV2";

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
    name: "getAddr",
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
    name: "test1",
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
    name: "test2",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "test3",
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
    name: "test4",
    outputs: [],
    stateMutability: "nonpayable",
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
  "0x60a06040523060805234801561001457600080fd5b50608051612ca161004c600039600081816107b20152818161083c01528181610a3401528181610ab90152610b960152612ca16000f3fe6080604052600436106102195760003560e01c806370a082311161011d578063a0ef91df116100b0578063bcdb7b721161007f578063cf9c2e4111610064578063cf9c2e411461056c578063dd62ed3e14610581578063f2fde38b146105c757600080fd5b8063bcdb7b721461052c578063bfd67d8b1461054c57600080fd5b8063a0ef91df146104d1578063a457c2d7146104d9578063a74c2bb6146104f9578063a9059cbb1461050c57600080fd5b80638da5cb5b116100ec5780638da5cb5b1461046d5780638e15f4731461049f57806393bb0d88146104b457806395d89b41146104bc57600080fd5b806370a08231146103f8578063715018a61461042e5780638129fc1c146104435780638456cb591461045857600080fd5b80633f4ba83a116101b05780635c975abb1161017f57806366e41cb71161016457806366e41cb7146103b95780636865b8e7146103ce5780636b59084d146103e357600080fd5b80635c975abb1461038c5780635cd8a76b146103a457600080fd5b80633f4ba83a1461032f57806340c10f19146103445780634f1ef2861461036457806352d1902d1461037757600080fd5b806323b872dd116101ec57806323b872dd146102b1578063313ce567146102d15780633659cfe6146102ed578063395093511461030f57600080fd5b806306fdde031461021e578063095ea7b3146102495780630a8e8e011461027957806318160ddd1461029c575b600080fd5b34801561022a57600080fd5b506102336105e7565b6040516102409190612827565b60405180910390f35b34801561025557600080fd5b50610269610264366004612871565b610679565b6040519015158152602001610240565b34801561028557600080fd5b5061028e610691565b604051908152602001610240565b3480156102a857600080fd5b5060355461028e565b3480156102bd57600080fd5b506102696102cc36600461289b565b610782565b3480156102dd57600080fd5b5060405160128152602001610240565b3480156102f957600080fd5b5061030d6103083660046128d7565b6107a8565b005b34801561031b57600080fd5b5061026961032a366004612871565b61091f565b34801561033b57600080fd5b5061030d61095e565b34801561035057600080fd5b5061030d61035f366004612871565b6109c2565b61030d610372366004612939565b610a2a565b34801561038357600080fd5b5061028e610b89565b34801561039857600080fd5b5060655460ff16610269565b3480156103b057600080fd5b5061030d610c4e565b3480156103c557600080fd5b5061030d610ce5565b3480156103da57600080fd5b5061030d610cf7565b3480156103ef57600080fd5b5061028e610e57565b34801561040457600080fd5b5061028e6104133660046128d7565b6001600160a01b031660009081526033602052604090205490565b34801561043a57600080fd5b5061030d610ed3565b34801561044f57600080fd5b5061030d610f37565b34801561046457600080fd5b5061030d61103c565b34801561047957600080fd5b506097546001600160a01b03165b6040516001600160a01b039091168152602001610240565b3480156104ab57600080fd5b5061028e61109e565b61030d611124565b3480156104c857600080fd5b50610233611243565b61030d611252565b3480156104e557600080fd5b506102696104f4366004612871565b6112d8565b34801561050557600080fd5b5030610487565b34801561051857600080fd5b50610269610527366004612871565b61138d565b34801561053857600080fd5b5061030d6105473660046129df565b61139b565b34801561055857600080fd5b5061030d6105673660046129df565b6114c0565b34801561057857600080fd5b5061030d61152e565b34801561058d57600080fd5b5061028e61059c3660046129f8565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b3480156105d357600080fd5b5061030d6105e23660046128d7565b61181e565b6060603680546105f690612a2b565b80601f016020809104026020016040519081016040528092919081815260200182805461062290612a2b565b801561066f5780601f106106445761010080835404028352916020019161066f565b820191906000526020600020905b81548152906001019060200180831161065257829003601f168201915b5050505050905090565b6000336106878185856118fd565b5060019392505050565b6040516bffffffffffffffffffffffff193360601b1660208201526000908190439042906034016040516020818303038152906040528051906020012060001c6106db9190612a91565b6040516bffffffffffffffffffffffff194160601b166020820152459042906034016040516020818303038152906040528051906020012060001c6107209190612a91565b61072a4442612aa5565b6107349190612aa5565b61073e9190612aa5565b6107489190612aa5565b6107529190612aa5565b60405160200161076491815260200190565b60408051601f19818403018152919052805160209091012092915050565b600033610790858285611a21565b61079b858585611ab3565b60019150505b9392505050565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016300361083a5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b60648201526084015b60405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166108957f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b0316146109005760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608401610831565b6040805160008082526020820190925261091c91839190611cb0565b50565b3360008181526034602090815260408083206001600160a01b03871684529091528120549091906106879082908690610959908790612aa5565b6118fd565b6097546001600160a01b031633146109b85760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610831565b6109c0611e55565b565b6097546001600160a01b03163314610a1c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610831565b610a268282611ef1565b5050565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163003610ab75760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b6064820152608401610831565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610b127f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b031614610b7d5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608401610831565b610a2682826001611cb0565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610c295760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152608401610831565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b60026000610c5b82611fd0565b90508015610c73576000805461ff0019166101001790555b61012e80546001600160a01b03191673a98208a975808fd6aa1585179a0861d357f191421790558015610a26576000805461ff001916905560405160ff831681527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b61091c30670de0b6b3a764000061138d565b6097546001600160a01b03163314610d515760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610831565b6040516370a0823160e01b815230600482015273d9ba894e0097f8cc2bbc9d24d308b98e36dc6d0290819063a9059cbb90339083906370a0823190602401602060405180830381865afa158015610dac573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dd09190612abd565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b1681526001600160a01b03909216600483015260248201526044016020604051808303816000875af1158015610e33573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a269190612ad6565b61012e546040516207335b60ed1b815230600482015260009182916001600160a01b039091169063e66b600090602401600060405180830381865afa158015610ea4573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610ecc9190810190612af8565b5192915050565b6097546001600160a01b03163314610f2d5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610831565b6109c060006120eb565b6000610f436001611fd0565b90508015610f5b576000805461ff0019166101001790555b610fb56040518060400160405280600881526020017f4c7575546f6b656e000000000000000000000000000000000000000000000000815250604051806040016040528060038152602001624c544b60e81b81525061213d565b610fbd6121b2565b610fc5612225565b610fcd612298565b61012d80546001600160a01b031916738a753747a1fa494ec906ce90e9f37563a8af630e179055801561091c576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a150565b6097546001600160a01b031633146110965760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610831565b6109c0612303565b60008061012d60009054906101000a90046001600160a01b03166001600160a01b031663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa1580156110f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111199190612bb8565b509195945050505050565b60655460ff161561116a5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610831565b655af3107a40003410156111c05760405162461bcd60e51b815260206004820181905260248201527f596f75206d75737420706179206174206c6561737420302e30303031206574686044820152606401610831565b60006111ca61109e565b90506000811361121c5760405162461bcd60e51b815260206004820152600f60248201527f457468207072696365206572726f7200000000000000000000000000000000006044820152606401610831565b60006305f5e10061122d8334612c08565b6112379190612a91565b9050610a263382611ef1565b6060603780546105f690612a2b565b6097546001600160a01b031633146112ac5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610831565b60405133904780156108fc02916000818181858888f1935050505015801561091c573d6000803e3d6000fd5b3360008181526034602090815260408083206001600160a01b0387168452909152812054909190838110156113755760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610831565b61138282868684036118fd565b506001949350505050565b600033610687818585611ab3565b60655460ff16156113e15760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610831565b600181116114315760405162461bcd60e51b815260206004820152601c60248201527f596f75206d75737420706179206174206c6561737420312055736474000000006044820152606401610831565b6040516323b872dd60e01b81523360048201523060248201526044810182905273d9ba894e0097f8cc2bbc9d24d308b98e36dc6d029081906323b872dd906064016020604051808303816000875af1158015611491573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114b59190612ad6565b50610a263383611ef1565b61012e546040516323b872dd60e01b8152306004820152336024820152604481018390526001600160a01b03909116906323b872dd90606401600060405180830381600087803b15801561151357600080fd5b505af1158015611527573d6000803e3d6000fd5b5050505050565b60655460ff16156115745760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610831565b61012e546040516207335b60ed1b81523060048201526000916001600160a01b03169063e66b600090602401600060405180830381865afa1580156115bd573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526115e59190810190612af8565b905060008151116116385760405162461bcd60e51b815260206004820152601360248201527f5072697a6520706f6f6c20697320656d707479000000000000000000000000006044820152606401610831565b61164a30670de0b6b3a764000061138d565b6116965760405162461bcd60e51b815260206004820152601360248201527f5472616e736665722066726f6d206572726f72000000000000000000000000006044820152606401610831565b6040516bffffffffffffffffffffffff193360601b166020820152600090439042906034016040516020818303038152906040528051906020012060001c6116de9190612a91565b6040516bffffffffffffffffffffffff194160601b166020820152459042906034016040516020818303038152906040528051906020012060001c6117239190612a91565b61172d4442612aa5565b6117379190612aa5565b6117419190612aa5565b61174b9190612aa5565b6117559190612aa5565b60405160200161176791815260200190565b6040516020818303038152906040528051906020012060001c90506000828351836117929190612c27565b815181106117a2576117a2612c3b565b602090810291909101015161012e546040516323b872dd60e01b8152306004820152336024820152604481018390529192506001600160a01b0316906323b872dd90606401600060405180830381600087803b15801561180157600080fd5b505af1158015611815573d6000803e3d6000fd5b50505050505050565b6097546001600160a01b031633146118785760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610831565b6001600160a01b0381166118f45760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610831565b61091c816120eb565b6001600160a01b03831661195f5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610831565b6001600160a01b0382166119c05760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610831565b6001600160a01b0383811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038381166000908152603460209081526040808320938616835292905220546000198114611aad5781811015611aa05760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610831565b611aad84848484036118fd565b50505050565b6001600160a01b038316611b2f5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610831565b6001600160a01b038216611b915760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610831565b6001600160a01b03831660009081526033602052604090205481811015611c205760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610831565b6001600160a01b03808516600090815260336020526040808220858503905591851681529081208054849290611c57908490612aa5565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051611ca391815260200190565b60405180910390a3611aad565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff1615611ce857611ce38361237e565b505050565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015611d42575060408051601f3d908101601f19168201909252611d3f91810190612abd565b60015b611db45760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f7420555550530000000000000000000000000000000000006064820152608401610831565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8114611e495760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c655555494400000000000000000000000000000000000000000000006064820152608401610831565b50611ce383838361243c565b60655460ff16611ea75760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f74207061757365640000000000000000000000006044820152606401610831565b6065805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b038216611f475760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610831565b8060356000828254611f599190612aa5565b90915550506001600160a01b03821660009081526033602052604081208054839290611f86908490612aa5565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b60008054610100900460ff161561205e578160ff166001148015611ff35750303b155b6120565760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610831565b506000919050565b60005460ff8084169116106120cc5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610831565b506000805460ff191660ff92909216919091179055600190565b919050565b609780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff166121a85760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610831565b610a268282612461565b600054610100900460ff1661221d5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610831565b6109c06124f3565b600054610100900460ff166122905760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610831565b6109c061256a565b600054610100900460ff166109c05760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610831565b60655460ff16156123495760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610831565b6065805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258611ed43390565b6001600160a01b0381163b6123fb5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e7472616374000000000000000000000000000000000000006064820152608401610831565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b612445836125de565b6000825111806124525750805b15611ce357611aad838361261e565b600054610100900460ff166124cc5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610831565b81516124df906036906020850190612762565b508051611ce3906037906020840190612762565b600054610100900460ff1661255e5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610831565b6065805460ff19169055565b600054610100900460ff166125d55760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610831565b6109c0336120eb565b6125e78161237e565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606001600160a01b0383163b61269d5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e747261637400000000000000000000000000000000000000000000000000006064820152608401610831565b600080846001600160a01b0316846040516126b89190612c51565b600060405180830381855af49150503d80600081146126f3576040519150601f19603f3d011682016040523d82523d6000602084013e6126f8565b606091505b50915091506127208282604051806060016040528060278152602001612c6e60279139612729565b95945050505050565b606083156127385750816107a1565b8251156127485782518084602001fd5b8160405162461bcd60e51b81526004016108319190612827565b82805461276e90612a2b565b90600052602060002090601f01602090048101928261279057600085556127d6565b82601f106127a957805160ff19168380011785556127d6565b828001600101855582156127d6579182015b828111156127d65782518255916020019190600101906127bb565b506127e29291506127e6565b5090565b5b808211156127e257600081556001016127e7565b60005b838110156128165781810151838201526020016127fe565b83811115611aad5750506000910152565b60208152600082518060208401526128468160408501602087016127fb565b601f01601f19169190910160400192915050565b80356001600160a01b03811681146120e657600080fd5b6000806040838503121561288457600080fd5b61288d8361285a565b946020939093013593505050565b6000806000606084860312156128b057600080fd5b6128b98461285a565b92506128c76020850161285a565b9150604084013590509250925092565b6000602082840312156128e957600080fd5b6107a18261285a565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715612931576129316128f2565b604052919050565b6000806040838503121561294c57600080fd5b6129558361285a565b915060208084013567ffffffffffffffff8082111561297357600080fd5b818601915086601f83011261298757600080fd5b813581811115612999576129996128f2565b6129ab601f8201601f19168501612908565b915080825287848285010111156129c157600080fd5b80848401858401376000848284010152508093505050509250929050565b6000602082840312156129f157600080fd5b5035919050565b60008060408385031215612a0b57600080fd5b612a148361285a565b9150612a226020840161285a565b90509250929050565b600181811c90821680612a3f57607f821691505b602082108103612a5f57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082612aa057612aa0612a65565b500490565b60008219821115612ab857612ab8612a7b565b500190565b600060208284031215612acf57600080fd5b5051919050565b600060208284031215612ae857600080fd5b815180151581146107a157600080fd5b60006020808385031215612b0b57600080fd5b825167ffffffffffffffff80821115612b2357600080fd5b818501915085601f830112612b3757600080fd5b815181811115612b4957612b496128f2565b8060051b9150612b5a848301612908565b8181529183018401918481019088841115612b7457600080fd5b938501935b83851015612b9257845182529385019390850190612b79565b98975050505050505050565b805169ffffffffffffffffffff811681146120e657600080fd5b600080600080600060a08688031215612bd057600080fd5b612bd986612b9e565b9450602086015193506040860151925060608601519150612bfc60808701612b9e565b90509295509295909350565b6000816000190483118215151615612c2257612c22612a7b565b500290565b600082612c3657612c36612a65565b500690565b634e487b7160e01b600052603260045260246000fd5b60008251612c638184602087016127fb565b919091019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a164736f6c634300080d000a";

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
