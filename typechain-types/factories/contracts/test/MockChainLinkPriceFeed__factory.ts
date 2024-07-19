/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MockChainLinkPriceFeed,
  MockChainLinkPriceFeedInterface,
} from "../../../contracts/test/MockChainLinkPriceFeed";

const _abi = [
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
        internalType: "uint80",
        name: "_roundId",
        type: "uint80",
      },
    ],
    name: "getRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "roundId",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "answer",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "startedAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "answeredInRound",
        type: "uint80",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "roundId",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "answer",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "startedAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "answeredInRound",
        type: "uint80",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxRound",
    outputs: [
      {
        internalType: "uint80",
        name: "",
        type: "uint80",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint80",
        name: "",
        type: "uint80",
      },
    ],
    name: "roundDatas",
    outputs: [
      {
        internalType: "uint80",
        name: "roundId",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "answer",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "startedAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "answeredInRound",
        type: "uint80",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
      },
    ],
    name: "setDecimals",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint80",
        name: "_roundId",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "_answer",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "_startedAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_updatedAt",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "_answeredInRound",
        type: "uint80",
      },
    ],
    name: "setRoundData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080806040523461002357600860ff1960005416176000556105f790816100298239f35b600080fdfe604060808152600436101561001357600080fd5b600090813560e01c80631c12940a14610348578063313ce5671461030b5780637a1395aa146102a057806393c2f482146102585780639a6fc8f51461018e578063a1df4eb6146100e65763feaf968c1461006c57600080fd5b346100e257817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100e2576100de906100a66104d5565b945169ffffffffffffffffffff94851681526020810193909352604083019190915260608201529116608082015290819060a0820190565b0390f35b5080fd5b50346100e25760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100e2576100de8169ffffffffffffffffffff938461012f610468565b168152600160205220918383541692600181015494600282015490600460038401549301541692519586958693608093969591929660a086019769ffffffffffffffffffff809516875260208701526040860152606085015216910152565b50346100e25760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100e2576100de60808269ffffffffffffffffffff94856101d9610468565b1681526001602052206101ea610486565b948082541694858752600183015496876020820152600284015492838383015260046003860154958660608501520154169485910152519586958693608093969591929660a086019769ffffffffffffffffffff809516875260208701526040860152606085015216910152565b50346100e257817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100e25760209069ffffffffffffffffffff600254169051908152f35b82346103085760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103085760043560ff81168091036100e2577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0082541617815580f35b80fd5b50346100e257817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100e25760ff60209254169051908152f35b50346100e25760a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100e257610380610468565b906084359169ffffffffffffffffffff9081841680940361046457600490826103a7610486565b911680825260208201946024358652848184019160443583526060850193606435855260808601998a52806002548481168211610437575b50508a5260016020528920935116957fffffffffffffffffffffffffffffffffffffffffffff000000000000000000009687855416178455516001840155516002830155516003820155019251169082541617905580f35b7fffffffffffffffffffffffffffffffffffffffffffff00000000000000000000161760025580386103df565b8480fd5b6004359069ffffffffffffffffffff8216820361048157565b600080fd5b6040519060a0820182811067ffffffffffffffff8211176104a657604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b69ffffffffffffffffffff806002541660005260016020526040600020906104fb610486565b81835416938482526001840154926020830192848452600286015494604082019786895283600460038a015499606086019a8b52015416966080840197885215610555575050519251955194519351928116959493921690565b94509650509093507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff420192428411610592575116909392829190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea26469706673582212209b1ae1e316c94acb3ca9e73f1b5f49e3b51d74255973b8a660da1a3ccacafc0a64736f6c63430008180033";

type MockChainLinkPriceFeedConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockChainLinkPriceFeedConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockChainLinkPriceFeed__factory extends ContractFactory {
  constructor(...args: MockChainLinkPriceFeedConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockChainLinkPriceFeed> {
    return super.deploy(overrides || {}) as Promise<MockChainLinkPriceFeed>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MockChainLinkPriceFeed {
    return super.attach(address) as MockChainLinkPriceFeed;
  }
  override connect(signer: Signer): MockChainLinkPriceFeed__factory {
    return super.connect(signer) as MockChainLinkPriceFeed__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockChainLinkPriceFeedInterface {
    return new utils.Interface(_abi) as MockChainLinkPriceFeedInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockChainLinkPriceFeed {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockChainLinkPriceFeed;
  }
}