/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MockRewardFarmCallback,
  MockRewardFarmCallbackInterface,
} from "../../../contracts/test/MockRewardFarmCallback";

const _abi = [
  {
    inputs: [],
    name: "account",
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
    name: "entryPriceAfterX96",
    outputs: [
      {
        internalType: "uint160",
        name: "",
        type: "uint160",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "liquidityAfter",
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
    name: "liquidityDelta",
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
        name: "referee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "oldReferralToken",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "oldReferralParentToken",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newReferralToken",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newReferralParentToken",
        type: "uint256",
      },
    ],
    name: "onChangeReferralToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "int256",
        name: "_liquidityDelta",
        type: "int256",
      },
    ],
    name: "onLiquidityPositionChanged",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "Side",
        name: "_side",
        type: "uint8",
      },
      {
        internalType: "uint128",
        name: "_sizeAfter",
        type: "uint128",
      },
      {
        internalType: "uint160",
        name: "_entryPriceAfterX96",
        type: "uint160",
      },
    ],
    name: "onPositionChanged",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_liquidityAfter",
        type: "uint256",
      },
    ],
    name: "onRiskBufferFundPositionChanged",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pool",
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
    name: "side",
    outputs: [
      {
        internalType: "Side",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sizeAfter",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608080604052346100165761053c908161001c8239f35b600080fdfe60806040818152600436101561001457600080fd5b600091823560e01c908163147b37961461048e5750806315267a481461043d57806316f0115b146103ed57806324675390146103b1578063275240121461033357806358e96f4a146102f75780635dab2420146102a557806366063f921461019a5780638475c0281461015b578063950f5408146100da5763f3ae69621461009b57600080fd5b346100d657817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100d6576020906002549051908152f35b5080fd5b50346100d6577ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101585773ffffffffffffffffffffffffffffffffffffffff6101256104de565b167fffffffffffffffffffffffff0000000000000000000000000000000000000000600154161760015560243560025580f35b80fd5b50346100d657817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100d65760209060ff600454169051908152f35b82346101585760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610158576101d26104de565b6024359060ff82168092036102a1576044356fffffffffffffffffffffffffffffffff8116810361029d576064359273ffffffffffffffffffffffffffffffffffffffff808516809503610299577fffffffffffffffffffffffff000000000000000000000000000000000000000093168360015416176001557fffffffffffffffffffffffffffffff000000000000000000000000000000000070ffffffffffffffffffffffffffffffff006004549360081b1692161717600455600554161760055580f35b8580fd5b8380fd5b8280fd5b50346100d657817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100d65760209073ffffffffffffffffffffffffffffffffffffffff600154169051908152f35b50346100d657817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100d6576020906003549051908152f35b50346100d6577ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101585773ffffffffffffffffffffffffffffffffffffffff61037e6104de565b167fffffffffffffffffffffffff0000000000000000000000000000000000000000600154161760015560243560035580f35b82346101585760a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610158576103e96104de565b5080f35b50346100d657817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100d65773ffffffffffffffffffffffffffffffffffffffff60209254169051908152f35b50346100d657817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100d6576020906fffffffffffffffffffffffffffffffff60045460081c169051908152f35b8390346100d657817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100d65760209073ffffffffffffffffffffffffffffffffffffffff600554168152f35b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361050157565b600080fdfea264697066735822122056be4144084aa660320f16acc87014b0eec8d41cee96758c1e55b870efb39c8a64736f6c63430008180033";

type MockRewardFarmCallbackConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockRewardFarmCallbackConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockRewardFarmCallback__factory extends ContractFactory {
  constructor(...args: MockRewardFarmCallbackConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockRewardFarmCallback> {
    return super.deploy(overrides || {}) as Promise<MockRewardFarmCallback>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MockRewardFarmCallback {
    return super.attach(address) as MockRewardFarmCallback;
  }
  override connect(signer: Signer): MockRewardFarmCallback__factory {
    return super.connect(signer) as MockRewardFarmCallback__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockRewardFarmCallbackInterface {
    return new utils.Interface(_abi) as MockRewardFarmCallbackInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockRewardFarmCallback {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockRewardFarmCallback;
  }
}
