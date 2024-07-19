/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IPoolLiquidityPosition,
  IPoolLiquidityPositionInterface,
} from "../../../../contracts/core/interfaces/IPoolLiquidityPosition";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint128",
        name: "netSizeAfter",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "liquidationBufferNetSizeAfter",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint160",
        name: "entryPriceAfterX96",
        type: "uint160",
      },
      {
        indexed: false,
        internalType: "Side",
        name: "sideAfter",
        type: "uint8",
      },
    ],
    name: "GlobalLiquidityPositionNetPositionAdjusted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "realizedProfitGrowthAfterX64",
        type: "uint256",
      },
    ],
    name: "GlobalLiquidityPositionRealizedProfitGrowthChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "int256",
        name: "riskBufferFundAfter",
        type: "int256",
      },
    ],
    name: "GlobalRiskBufferFundChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "riskBufferFundDelta",
        type: "uint128",
      },
    ],
    name: "GlobalRiskBufferFundGovUsed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "lastZeroLossTimeAfter",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "liquidityAfter",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "liquidityTimesUnrealizedLossAfter",
        type: "uint256",
      },
    ],
    name: "GlobalUnrealizedLossMetricsChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint96",
        name: "positionID",
        type: "uint96",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "margin",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "unrealizedLoss",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "realizedProfit",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "LiquidityPositionClosed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "liquidator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint96",
        name: "positionID",
        type: "uint96",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "realizedProfit",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "riskBufferFundDelta",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "liquidationExecutionFee",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "address",
        name: "feeReceiver",
        type: "address",
      },
    ],
    name: "LiquidityPositionLiquidated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint96",
        name: "positionID",
        type: "uint96",
      },
      {
        indexed: false,
        internalType: "int128",
        name: "marginDelta",
        type: "int128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "marginAfter",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "entryRealizedProfitGrowthAfterX64",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "LiquidityPositionMarginAdjusted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint96",
        name: "positionID",
        type: "uint96",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "margin",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "entryUnrealizedLoss",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "realizedProfitGrowthX64",
        type: "uint256",
      },
    ],
    name: "LiquidityPositionOpened",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "liquidityAfter",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "RiskBufferFundPositionDecreased",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "liquidityAfter",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "unlockTimeAfter",
        type: "uint64",
      },
    ],
    name: "RiskBufferFundPositionIncreased",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint96",
        name: "positionID",
        type: "uint96",
      },
      {
        internalType: "int128",
        name: "marginDelta",
        type: "int128",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "adjustLiquidityPositionMargin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint96",
        name: "positionID",
        type: "uint96",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "closeLiquidityPosition",
    outputs: [],
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
      {
        internalType: "uint128",
        name: "liquidityDelta",
        type: "uint128",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "decreaseRiskBufferFundPosition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "globalLiquidityPosition",
    outputs: [
      {
        internalType: "uint128",
        name: "netSize",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "liquidationBufferNetSize",
        type: "uint128",
      },
      {
        internalType: "uint160",
        name: "entryPriceX96",
        type: "uint160",
      },
      {
        internalType: "Side",
        name: "side",
        type: "uint8",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "realizedProfitGrowthX64",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "globalRiskBufferFund",
    outputs: [
      {
        internalType: "int256",
        name: "riskBufferFund",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "globalUnrealizedLossMetrics",
    outputs: [
      {
        internalType: "uint64",
        name: "lastZeroLossTime",
        type: "uint64",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "liquidityTimesUnrealizedLoss",
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
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "riskBufferFundDelta",
        type: "uint128",
      },
    ],
    name: "govUseRiskBufferFund",
    outputs: [],
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
      {
        internalType: "uint128",
        name: "liquidityDelta",
        type: "uint128",
      },
    ],
    name: "increaseRiskBufferFundPosition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint96",
        name: "positionID",
        type: "uint96",
      },
      {
        internalType: "address",
        name: "feeReceiver",
        type: "address",
      },
    ],
    name: "liquidateLiquidityPosition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint96",
        name: "positionID",
        type: "uint96",
      },
    ],
    name: "liquidityPositionAccount",
    outputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint96",
        name: "positionID",
        type: "uint96",
      },
    ],
    name: "liquidityPositions",
    outputs: [
      {
        internalType: "uint128",
        name: "margin",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "entryUnrealizedLoss",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "entryRealizedProfitGrowthX64",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "entryTime",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "margin",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
    ],
    name: "openLiquidityPosition",
    outputs: [
      {
        internalType: "uint96",
        name: "positionID",
        type: "uint96",
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
    name: "riskBufferFundPositions",
    outputs: [
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "uint64",
        name: "unlockTime",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IPoolLiquidityPosition__factory {
  static readonly abi = _abi;
  static createInterface(): IPoolLiquidityPositionInterface {
    return new utils.Interface(_abi) as IPoolLiquidityPositionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPoolLiquidityPosition {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IPoolLiquidityPosition;
  }
}