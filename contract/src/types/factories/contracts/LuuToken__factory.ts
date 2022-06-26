/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LuuToken, LuuTokenInterface } from "../../contracts/LuuToken";

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
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawUsdt",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523060805234801561001457600080fd5b5060805161224e61004c600039600081816105950152818161061f015281816108170152818161089c0152610979015261224e6000f3fe6080604052600436106101a15760003560e01c8063715018a6116100e1578063a0ef91df1161008a578063bcdb7b7211610064578063bcdb7b7214610415578063d3635a0214610435578063dd62ed3e14610455578063f2fde38b1461049b57600080fd5b8063a0ef91df146103cd578063a457c2d7146103d5578063a9059cbb146103f557600080fd5b80638da5cb5b116100bb5780638da5cb5b1461038857806393bb0d88146103b057806395d89b41146103b857600080fd5b8063715018a6146103495780638129fc1c1461035e5780638456cb591461037357600080fd5b8063395093511161014e5780634f1ef286116101285780634f1ef286146102d357806352d1902d146102e65780635c975abb146102fb57806370a082311461031357600080fd5b8063395093511461027e5780633f4ba83a1461029e57806340c10f19146102b357600080fd5b806323b872dd1161017f57806323b872dd14610220578063313ce567146102405780633659cfe61461025c57600080fd5b806306fdde03146101a6578063095ea7b3146101d157806318160ddd14610201575b600080fd5b3480156101b257600080fd5b506101bb6104bb565b6040516101c89190611f74565b60405180910390f35b3480156101dd57600080fd5b506101f16101ec366004611fbe565b61054d565b60405190151581526020016101c8565b34801561020d57600080fd5b506035545b6040519081526020016101c8565b34801561022c57600080fd5b506101f161023b366004611fe8565b610565565b34801561024c57600080fd5b50604051601281526020016101c8565b34801561026857600080fd5b5061027c610277366004612024565b61058b565b005b34801561028a57600080fd5b506101f1610299366004611fbe565b610702565b3480156102aa57600080fd5b5061027c610741565b3480156102bf57600080fd5b5061027c6102ce366004611fbe565b6107a5565b61027c6102e1366004612055565b61080d565b3480156102f257600080fd5b5061021261096c565b34801561030757600080fd5b5060655460ff166101f1565b34801561031f57600080fd5b5061021261032e366004612024565b6001600160a01b031660009081526033602052604090205490565b34801561035557600080fd5b5061027c610a31565b34801561036a57600080fd5b5061027c610a95565b34801561037f57600080fd5b5061027c610b73565b34801561039457600080fd5b506097546040516001600160a01b0390911681526020016101c8565b61027c610bd5565b3480156103c457600080fd5b506101bb610c35565b61027c610c44565b3480156103e157600080fd5b506101f16103f0366004611fbe565b610cca565b34801561040157600080fd5b506101f1610410366004611fbe565b610d7f565b34801561042157600080fd5b5061027c610430366004612117565b610d8d565b34801561044157600080fd5b5061027c610450366004612117565b610e6c565b34801561046157600080fd5b50610212610470366004612130565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b3480156104a757600080fd5b5061027c6104b6366004612024565b610f49565b6060603680546104ca90612163565b80601f01602080910402602001604051908101604052809291908181526020018280546104f690612163565b80156105435780601f1061051857610100808354040283529160200191610543565b820191906000526020600020905b81548152906001019060200180831161052657829003601f168201915b5050505050905090565b60003361055b818585611028565b5060019392505050565b60003361057385828561114c565b61057e8585856111de565b60019150505b9392505050565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016300361061d5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b60648201526084015b60405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166106787f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b0316146106e35760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608401610614565b604080516000808252602082019092526106ff918391906113db565b50565b3360008181526034602090815260408083206001600160a01b038716845290915281205490919061055b908290869061073c90879061219d565b611028565b6097546001600160a01b0316331461079b5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610614565b6107a361157b565b565b6097546001600160a01b031633146107ff5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610614565b6108098282611617565b5050565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016300361089a5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b6064820152608401610614565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166108f57f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b0316146109605760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608401610614565b610809828260016113db565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610a0c5760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152608401610614565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b6097546001600160a01b03163314610a8b5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610614565b6107a360006116f6565b6000610aa16001611755565b90508015610ab9576000805461ff0019166101001790555b610b136040518060400160405280600881526020017f4c7575546f6b656e000000000000000000000000000000000000000000000000815250604051806040016040528060038152602001624c544b60e81b815250611870565b610b1b6118e5565b610b23611958565b610b2b6119cb565b80156106ff576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a150565b6097546001600160a01b03163314610bcd5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610614565b6107a3611a36565b655af3107a4000341015610c2b5760405162461bcd60e51b815260206004820181905260248201527f596f75206d75737420706179206174206c6561737420302e30303031206574686044820152606401610614565b6107a33334611617565b6060603780546104ca90612163565b6097546001600160a01b03163314610c9e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610614565b60405133904780156108fc02916000818181858888f193505050501580156106ff573d6000803e3d6000fd5b3360008181526034602090815260408083206001600160a01b038716845290915281205490919083811015610d675760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610614565b610d748286868403611028565b506001949350505050565b60003361055b8185856111de565b60018111610ddd5760405162461bcd60e51b815260206004820152601c60248201527f596f75206d75737420706179206174206c6561737420312055736474000000006044820152606401610614565b6040516323b872dd60e01b81523360048201523060248201526044810182905273d9ba894e0097f8cc2bbc9d24d308b98e36dc6d029081906323b872dd906064016020604051808303816000875af1158015610e3d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e6191906121c3565b506108093383611617565b6097546001600160a01b03163314610ec65760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610614565b60405163a9059cbb60e01b81523360048201526024810182905273d9ba894e0097f8cc2bbc9d24d308b98e36dc6d0290819063a9059cbb906044016020604051808303816000875af1158015610f20573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f4491906121c3565b505050565b6097546001600160a01b03163314610fa35760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610614565b6001600160a01b03811661101f5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610614565b6106ff816116f6565b6001600160a01b03831661108a5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610614565b6001600160a01b0382166110eb5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610614565b6001600160a01b0383811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383811660009081526034602090815260408083209386168352929052205460001981146111d857818110156111cb5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610614565b6111d88484848403611028565b50505050565b6001600160a01b03831661125a5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610614565b6001600160a01b0382166112bc5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610614565b6001600160a01b0383166000908152603360205260409020548181101561134b5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610614565b6001600160a01b0380851660009081526033602052604080822085850390559185168152908120805484929061138290849061219d565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516113ce91815260200190565b60405180910390a36111d8565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff161561140e57610f4483611abe565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015611468575060408051601f3d908101601f19168201909252611465918101906121e5565b60015b6114da5760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f7420555550530000000000000000000000000000000000006064820152608401610614565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc811461156f5760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c655555494400000000000000000000000000000000000000000000006064820152608401610614565b50610f44838383611b89565b60655460ff166115cd5760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f74207061757365640000000000000000000000006044820152606401610614565b6065805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b03821661166d5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610614565b806035600082825461167f919061219d565b90915550506001600160a01b038216600090815260336020526040812080548392906116ac90849061219d565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b609780546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60008054610100900460ff16156117e3578160ff1660011480156117785750303b155b6117db5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610614565b506000919050565b60005460ff8084169116106118515760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610614565b506000805460ff191660ff92909216919091179055600190565b919050565b600054610100900460ff166118db5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610614565b6108098282611bae565b600054610100900460ff166119505760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610614565b6107a3611c40565b600054610100900460ff166119c35760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610614565b6107a3611cb7565b600054610100900460ff166107a35760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610614565b60655460ff1615611a895760405162461bcd60e51b815260206004820152601060248201527f5061757361626c653a20706175736564000000000000000000000000000000006044820152606401610614565b6065805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586115fa3390565b6001600160a01b0381163b611b3b5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e7472616374000000000000000000000000000000000000006064820152608401610614565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b611b9283611d2b565b600082511180611b9f5750805b15610f44576111d88383611d6b565b600054610100900460ff16611c195760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610614565b8151611c2c906036906020850190611eaf565b508051610f44906037906020840190611eaf565b600054610100900460ff16611cab5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610614565b6065805460ff19169055565b600054610100900460ff16611d225760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610614565b6107a3336116f6565b611d3481611abe565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606001600160a01b0383163b611dea5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e747261637400000000000000000000000000000000000000000000000000006064820152608401610614565b600080846001600160a01b031684604051611e0591906121fe565b600060405180830381855af49150503d8060008114611e40576040519150601f19603f3d011682016040523d82523d6000602084013e611e45565b606091505b5091509150611e6d828260405180606001604052806027815260200161221b60279139611e76565b95945050505050565b60608315611e85575081610584565b825115611e955782518084602001fd5b8160405162461bcd60e51b81526004016106149190611f74565b828054611ebb90612163565b90600052602060002090601f016020900481019282611edd5760008555611f23565b82601f10611ef657805160ff1916838001178555611f23565b82800160010185558215611f23579182015b82811115611f23578251825591602001919060010190611f08565b50611f2f929150611f33565b5090565b5b80821115611f2f5760008155600101611f34565b60005b83811015611f63578181015183820152602001611f4b565b838111156111d85750506000910152565b6020815260008251806020840152611f93816040850160208701611f48565b601f01601f19169190910160400192915050565b80356001600160a01b038116811461186b57600080fd5b60008060408385031215611fd157600080fd5b611fda83611fa7565b946020939093013593505050565b600080600060608486031215611ffd57600080fd5b61200684611fa7565b925061201460208501611fa7565b9150604084013590509250925092565b60006020828403121561203657600080fd5b61058482611fa7565b634e487b7160e01b600052604160045260246000fd5b6000806040838503121561206857600080fd5b61207183611fa7565b9150602083013567ffffffffffffffff8082111561208e57600080fd5b818501915085601f8301126120a257600080fd5b8135818111156120b4576120b461203f565b604051601f8201601f19908116603f011681019083821181831017156120dc576120dc61203f565b816040528281528860208487010111156120f557600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b60006020828403121561212957600080fd5b5035919050565b6000806040838503121561214357600080fd5b61214c83611fa7565b915061215a60208401611fa7565b90509250929050565b600181811c9082168061217757607f821691505b60208210810361219757634e487b7160e01b600052602260045260246000fd5b50919050565b600082198211156121be57634e487b7160e01b600052601160045260246000fd5b500190565b6000602082840312156121d557600080fd5b8151801515811461058457600080fd5b6000602082840312156121f757600080fd5b5051919050565b60008251612210818460208701611f48565b919091019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a164736f6c634300080d000a";

type LuuTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LuuTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LuuToken__factory extends ContractFactory {
  constructor(...args: LuuTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LuuToken> {
    return super.deploy(overrides || {}) as Promise<LuuToken>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LuuToken {
    return super.attach(address) as LuuToken;
  }
  override connect(signer: Signer): LuuToken__factory {
    return super.connect(signer) as LuuToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LuuTokenInterface {
    return new utils.Interface(_abi) as LuuTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LuuToken {
    return new Contract(address, _abi, signerOrProvider) as LuuToken;
  }
}
