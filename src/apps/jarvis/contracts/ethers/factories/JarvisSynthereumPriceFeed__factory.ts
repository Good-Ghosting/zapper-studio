/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type {
  JarvisSynthereumPriceFeed,
  JarvisSynthereumPriceFeedInterface,
  SynthereumChainlinkPriceFeed,
} from '../JarvisSynthereumPriceFeed';

const _abi = [
  {
    inputs: [
      {
        internalType: 'contract ISynthereumFinder',
        name: '_synthereumFinder',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'admin',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'maintainer',
            type: 'address',
          },
        ],
        internalType: 'struct SynthereumChainlinkPriceFeed.Roles',
        name: '_roles',
        type: 'tuple',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'priceIdentifier',
        type: 'bytes32',
      },
    ],
    name: 'RemovePair',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'previousAdminRole',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'newAdminRole',
        type: 'bytes32',
      },
    ],
    name: 'RoleAdminChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'RoleGranted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'RoleRevoked',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'priceIdentifier',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'enum ISynthereumChainlinkPriceFeed.Type',
        name: 'kind',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'aggregator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bytes32[]',
        name: 'intermediatePairs',
        type: 'bytes32[]',
      },
    ],
    name: 'SetPair',
    type: 'event',
  },
  {
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MAINTAINER_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_priceIdentifier',
        type: 'bytes32',
      },
    ],
    name: 'getAggregator',
    outputs: [
      {
        internalType: 'contract AggregatorV3Interface',
        name: 'aggregator',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_priceIdentifier',
        type: 'bytes32',
      },
    ],
    name: 'getLatestPrice',
    outputs: [
      {
        internalType: 'uint256',
        name: 'price',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32[]',
        name: '_priceIdentifiers',
        type: 'bytes32[]',
      },
    ],
    name: 'getLatestPrices',
    outputs: [
      {
        internalType: 'uint256[]',
        name: 'prices',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
    ],
    name: 'getRoleAdmin',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'getRoleMember',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
    ],
    name: 'getRoleMemberCount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_priceIdentifier',
        type: 'bytes32',
      },
      {
        internalType: 'uint80',
        name: '_roundId',
        type: 'uint80',
      },
    ],
    name: 'getRoundPrice',
    outputs: [
      {
        internalType: 'uint256',
        name: 'price',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'hasRole',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_priceIdentifier',
        type: 'bytes32',
      },
    ],
    name: 'isPriceSupported',
    outputs: [
      {
        internalType: 'bool',
        name: 'isSupported',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'pairs',
    outputs: [
      {
        internalType: 'bool',
        name: 'isSupported',
        type: 'bool',
      },
      {
        internalType: 'enum ISynthereumChainlinkPriceFeed.Type',
        name: 'priceType',
        type: 'uint8',
      },
      {
        internalType: 'contract AggregatorV3Interface',
        name: 'aggregator',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_priceIdentifier',
        type: 'bytes32',
      },
    ],
    name: 'removePair',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'enum ISynthereumChainlinkPriceFeed.Type',
        name: '_kind',
        type: 'uint8',
      },
      {
        internalType: 'bytes32',
        name: '_priceIdentifier',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: '_aggregator',
        type: 'address',
      },
      {
        internalType: 'bytes32[]',
        name: '_intermediatePairs',
        type: 'bytes32[]',
      },
    ],
    name: 'setPair',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'synthereumFinder',
    outputs: [
      {
        internalType: 'contract ISynthereumFinder',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

export class JarvisSynthereumPriceFeed__factory {
  static readonly abi = _abi;
  static createInterface(): JarvisSynthereumPriceFeedInterface {
    return new utils.Interface(_abi) as JarvisSynthereumPriceFeedInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): JarvisSynthereumPriceFeed {
    return new Contract(address, _abi, signerOrProvider) as JarvisSynthereumPriceFeed;
  }
}
