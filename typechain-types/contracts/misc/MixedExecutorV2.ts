/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface MixedExecutorV2Interface extends utils.Interface {
  functions: {
    "acceptGov()": FunctionFragment;
    "cancelOrderIfFailedStatus()": FunctionFragment;
    "changeGov(address)": FunctionFragment;
    "collectProtocolFeeBatch(uint256)": FunctionFragment;
    "executeAdjustLiquidityPositionMargins(uint128)": FunctionFragment;
    "executeCloseLiquidityPositions(uint128)": FunctionFragment;
    "executeDecreaseOrder(uint256)": FunctionFragment;
    "executeDecreasePositions(uint128)": FunctionFragment;
    "executeDecreaseRiskBufferFundPositions(uint128)": FunctionFragment;
    "executeIncreaseOrder(uint256)": FunctionFragment;
    "executeIncreasePositions(uint128)": FunctionFragment;
    "executeIncreaseRiskBufferFundPositions(uint128)": FunctionFragment;
    "executeOpenLiquidityPositions(uint128)": FunctionFragment;
    "executors(address)": FunctionFragment;
    "feeReceiver()": FunctionFragment;
    "gov()": FunctionFragment;
    "liquidateLiquidityPosition(uint256)": FunctionFragment;
    "liquidatePosition(uint256)": FunctionFragment;
    "liquidator()": FunctionFragment;
    "multicall(bytes[])": FunctionFragment;
    "orderBook()": FunctionFragment;
    "pendingGov()": FunctionFragment;
    "poolIndexer()": FunctionFragment;
    "positionRouter()": FunctionFragment;
    "priceFeed()": FunctionFragment;
    "sampleAndAdjustFundingRateBatch(uint256)": FunctionFragment;
    "setCancelOrderIfFailedStatus(bool)": FunctionFragment;
    "setExecutor(address,bool)": FunctionFragment;
    "setFeeReceiver(address)": FunctionFragment;
    "setPriceX96s(uint256[],uint64)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "acceptGov"
      | "cancelOrderIfFailedStatus"
      | "changeGov"
      | "collectProtocolFeeBatch"
      | "executeAdjustLiquidityPositionMargins"
      | "executeCloseLiquidityPositions"
      | "executeDecreaseOrder"
      | "executeDecreasePositions"
      | "executeDecreaseRiskBufferFundPositions"
      | "executeIncreaseOrder"
      | "executeIncreasePositions"
      | "executeIncreaseRiskBufferFundPositions"
      | "executeOpenLiquidityPositions"
      | "executors"
      | "feeReceiver"
      | "gov"
      | "liquidateLiquidityPosition"
      | "liquidatePosition"
      | "liquidator"
      | "multicall"
      | "orderBook"
      | "pendingGov"
      | "poolIndexer"
      | "positionRouter"
      | "priceFeed"
      | "sampleAndAdjustFundingRateBatch"
      | "setCancelOrderIfFailedStatus"
      | "setExecutor"
      | "setFeeReceiver"
      | "setPriceX96s"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "acceptGov", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "cancelOrderIfFailedStatus",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "changeGov",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "collectProtocolFeeBatch",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "executeAdjustLiquidityPositionMargins",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "executeCloseLiquidityPositions",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "executeDecreaseOrder",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "executeDecreasePositions",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "executeDecreaseRiskBufferFundPositions",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "executeIncreaseOrder",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "executeIncreasePositions",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "executeIncreaseRiskBufferFundPositions",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "executeOpenLiquidityPositions",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "executors",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "feeReceiver",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "gov", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "liquidateLiquidityPosition",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidatePosition",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "multicall",
    values: [PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(functionFragment: "orderBook", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingGov",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "poolIndexer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "positionRouter",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "priceFeed", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sampleAndAdjustFundingRateBatch",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setCancelOrderIfFailedStatus",
    values: [PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "setExecutor",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeReceiver",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setPriceX96s",
    values: [PromiseOrValue<BigNumberish>[], PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "acceptGov", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cancelOrderIfFailedStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "changeGov", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "collectProtocolFeeBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeAdjustLiquidityPositionMargins",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeCloseLiquidityPositions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeDecreaseOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeDecreasePositions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeDecreaseRiskBufferFundPositions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeIncreaseOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeIncreasePositions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeIncreaseRiskBufferFundPositions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeOpenLiquidityPositions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "executors", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "feeReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "liquidateLiquidityPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidatePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "liquidator", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "orderBook", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pendingGov", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "poolIndexer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "positionRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "priceFeed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sampleAndAdjustFundingRateBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCancelOrderIfFailedStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setExecutor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFeeReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPriceX96s",
    data: BytesLike
  ): Result;

  events: {
    "ChangeGovStarted(address,address)": EventFragment;
    "DecreaseOrderCancelFailed(uint256,bytes4,bytes4)": EventFragment;
    "DecreaseOrderCancelSucceeded(uint256,bytes4)": EventFragment;
    "DecreaseOrderExecuteFailed(uint256)": EventFragment;
    "ExecutorUpdated(address,bool)": EventFragment;
    "GovChanged(address,address)": EventFragment;
    "IncreaseOrderCancelFailed(uint256,bytes4,bytes4)": EventFragment;
    "IncreaseOrderCancelSucceeded(uint256,bytes4)": EventFragment;
    "IncreaseOrderExecuteFailed(uint256)": EventFragment;
    "LiquidateLiquidityPositionFailed(address,uint96,bytes4)": EventFragment;
    "LiquidatePositionFailed(address,address,uint8,bytes4)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ChangeGovStarted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DecreaseOrderCancelFailed"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "DecreaseOrderCancelSucceeded"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DecreaseOrderExecuteFailed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExecutorUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GovChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "IncreaseOrderCancelFailed"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "IncreaseOrderCancelSucceeded"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "IncreaseOrderExecuteFailed"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "LiquidateLiquidityPositionFailed"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LiquidatePositionFailed"): EventFragment;
}

export interface ChangeGovStartedEventObject {
  previousGov: string;
  newGov: string;
}
export type ChangeGovStartedEvent = TypedEvent<
  [string, string],
  ChangeGovStartedEventObject
>;

export type ChangeGovStartedEventFilter =
  TypedEventFilter<ChangeGovStartedEvent>;

export interface DecreaseOrderCancelFailedEventObject {
  orderIndex: BigNumber;
  shortenedReason1: string;
  shortenedReason2: string;
}
export type DecreaseOrderCancelFailedEvent = TypedEvent<
  [BigNumber, string, string],
  DecreaseOrderCancelFailedEventObject
>;

export type DecreaseOrderCancelFailedEventFilter =
  TypedEventFilter<DecreaseOrderCancelFailedEvent>;

export interface DecreaseOrderCancelSucceededEventObject {
  orderIndex: BigNumber;
  shortenedReason: string;
}
export type DecreaseOrderCancelSucceededEvent = TypedEvent<
  [BigNumber, string],
  DecreaseOrderCancelSucceededEventObject
>;

export type DecreaseOrderCancelSucceededEventFilter =
  TypedEventFilter<DecreaseOrderCancelSucceededEvent>;

export interface DecreaseOrderExecuteFailedEventObject {
  orderIndex: BigNumber;
}
export type DecreaseOrderExecuteFailedEvent = TypedEvent<
  [BigNumber],
  DecreaseOrderExecuteFailedEventObject
>;

export type DecreaseOrderExecuteFailedEventFilter =
  TypedEventFilter<DecreaseOrderExecuteFailedEvent>;

export interface ExecutorUpdatedEventObject {
  executor: string;
  active: boolean;
}
export type ExecutorUpdatedEvent = TypedEvent<
  [string, boolean],
  ExecutorUpdatedEventObject
>;

export type ExecutorUpdatedEventFilter = TypedEventFilter<ExecutorUpdatedEvent>;

export interface GovChangedEventObject {
  previousGov: string;
  newGov: string;
}
export type GovChangedEvent = TypedEvent<
  [string, string],
  GovChangedEventObject
>;

export type GovChangedEventFilter = TypedEventFilter<GovChangedEvent>;

export interface IncreaseOrderCancelFailedEventObject {
  orderIndex: BigNumber;
  shortenedReason1: string;
  shortenedReason2: string;
}
export type IncreaseOrderCancelFailedEvent = TypedEvent<
  [BigNumber, string, string],
  IncreaseOrderCancelFailedEventObject
>;

export type IncreaseOrderCancelFailedEventFilter =
  TypedEventFilter<IncreaseOrderCancelFailedEvent>;

export interface IncreaseOrderCancelSucceededEventObject {
  orderIndex: BigNumber;
  shortenedReason: string;
}
export type IncreaseOrderCancelSucceededEvent = TypedEvent<
  [BigNumber, string],
  IncreaseOrderCancelSucceededEventObject
>;

export type IncreaseOrderCancelSucceededEventFilter =
  TypedEventFilter<IncreaseOrderCancelSucceededEvent>;

export interface IncreaseOrderExecuteFailedEventObject {
  orderIndex: BigNumber;
}
export type IncreaseOrderExecuteFailedEvent = TypedEvent<
  [BigNumber],
  IncreaseOrderExecuteFailedEventObject
>;

export type IncreaseOrderExecuteFailedEventFilter =
  TypedEventFilter<IncreaseOrderExecuteFailedEvent>;

export interface LiquidateLiquidityPositionFailedEventObject {
  pool: string;
  positionID: BigNumber;
  shortenedReason: string;
}
export type LiquidateLiquidityPositionFailedEvent = TypedEvent<
  [string, BigNumber, string],
  LiquidateLiquidityPositionFailedEventObject
>;

export type LiquidateLiquidityPositionFailedEventFilter =
  TypedEventFilter<LiquidateLiquidityPositionFailedEvent>;

export interface LiquidatePositionFailedEventObject {
  pool: string;
  account: string;
  side: number;
  shortenedReason: string;
}
export type LiquidatePositionFailedEvent = TypedEvent<
  [string, string, number, string],
  LiquidatePositionFailedEventObject
>;

export type LiquidatePositionFailedEventFilter =
  TypedEventFilter<LiquidatePositionFailedEvent>;

export interface MixedExecutorV2 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MixedExecutorV2Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    acceptGov(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    cancelOrderIfFailedStatus(overrides?: CallOverrides): Promise<[boolean]>;

    changeGov(
      _newGov: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    collectProtocolFeeBatch(
      _packedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeAdjustLiquidityPositionMargins(
      _endIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeCloseLiquidityPositions(
      _endIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeDecreaseOrder(
      _packedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeDecreasePositions(
      _endIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeDecreaseRiskBufferFundPositions(
      _endIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeIncreaseOrder(
      _packedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeIncreasePositions(
      _endIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeIncreaseRiskBufferFundPositions(
      _endIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeOpenLiquidityPositions(
      _endIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executors(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    feeReceiver(overrides?: CallOverrides): Promise<[string]>;

    gov(overrides?: CallOverrides): Promise<[string]>;

    liquidateLiquidityPosition(
      _packedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    liquidatePosition(
      _packedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    liquidator(overrides?: CallOverrides): Promise<[string]>;

    multicall(
      data: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    orderBook(overrides?: CallOverrides): Promise<[string]>;

    pendingGov(overrides?: CallOverrides): Promise<[string]>;

    poolIndexer(overrides?: CallOverrides): Promise<[string]>;

    positionRouter(overrides?: CallOverrides): Promise<[string]>;

    priceFeed(overrides?: CallOverrides): Promise<[string]>;

    sampleAndAdjustFundingRateBatch(
      _packedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setCancelOrderIfFailedStatus(
      _cancelOrderIfFailedStatus: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setExecutor(
      _executor: PromiseOrValue<string>,
      _active: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setFeeReceiver(
      _receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setPriceX96s(
      _packedValues: PromiseOrValue<BigNumberish>[],
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  acceptGov(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  cancelOrderIfFailedStatus(overrides?: CallOverrides): Promise<boolean>;

  changeGov(
    _newGov: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  collectProtocolFeeBatch(
    _packedValue: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeAdjustLiquidityPositionMargins(
    _endIndex: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeCloseLiquidityPositions(
    _endIndex: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeDecreaseOrder(
    _packedValue: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeDecreasePositions(
    _endIndex: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeDecreaseRiskBufferFundPositions(
    _endIndex: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeIncreaseOrder(
    _packedValue: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeIncreasePositions(
    _endIndex: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeIncreaseRiskBufferFundPositions(
    _endIndex: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeOpenLiquidityPositions(
    _endIndex: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executors(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  feeReceiver(overrides?: CallOverrides): Promise<string>;

  gov(overrides?: CallOverrides): Promise<string>;

  liquidateLiquidityPosition(
    _packedValue: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  liquidatePosition(
    _packedValue: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  liquidator(overrides?: CallOverrides): Promise<string>;

  multicall(
    data: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  orderBook(overrides?: CallOverrides): Promise<string>;

  pendingGov(overrides?: CallOverrides): Promise<string>;

  poolIndexer(overrides?: CallOverrides): Promise<string>;

  positionRouter(overrides?: CallOverrides): Promise<string>;

  priceFeed(overrides?: CallOverrides): Promise<string>;

  sampleAndAdjustFundingRateBatch(
    _packedValue: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setCancelOrderIfFailedStatus(
    _cancelOrderIfFailedStatus: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setExecutor(
    _executor: PromiseOrValue<string>,
    _active: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setFeeReceiver(
    _receiver: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setPriceX96s(
    _packedValues: PromiseOrValue<BigNumberish>[],
    _timestamp: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptGov(overrides?: CallOverrides): Promise<void>;

    cancelOrderIfFailedStatus(overrides?: CallOverrides): Promise<boolean>;

    changeGov(
      _newGov: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    collectProtocolFeeBatch(
      _packedValue: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    executeAdjustLiquidityPositionMargins(
      _endIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    executeCloseLiquidityPositions(
      _endIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    executeDecreaseOrder(
      _packedValue: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    executeDecreasePositions(
      _endIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    executeDecreaseRiskBufferFundPositions(
      _endIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    executeIncreaseOrder(
      _packedValue: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    executeIncreasePositions(
      _endIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    executeIncreaseRiskBufferFundPositions(
      _endIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    executeOpenLiquidityPositions(
      _endIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    executors(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    feeReceiver(overrides?: CallOverrides): Promise<string>;

    gov(overrides?: CallOverrides): Promise<string>;

    liquidateLiquidityPosition(
      _packedValue: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    liquidatePosition(
      _packedValue: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    liquidator(overrides?: CallOverrides): Promise<string>;

    multicall(
      data: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<string[]>;

    orderBook(overrides?: CallOverrides): Promise<string>;

    pendingGov(overrides?: CallOverrides): Promise<string>;

    poolIndexer(overrides?: CallOverrides): Promise<string>;

    positionRouter(overrides?: CallOverrides): Promise<string>;

    priceFeed(overrides?: CallOverrides): Promise<string>;

    sampleAndAdjustFundingRateBatch(
      _packedValue: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setCancelOrderIfFailedStatus(
      _cancelOrderIfFailedStatus: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    setExecutor(
      _executor: PromiseOrValue<string>,
      _active: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    setFeeReceiver(
      _receiver: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setPriceX96s(
      _packedValues: PromiseOrValue<BigNumberish>[],
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ChangeGovStarted(address,address)"(
      previousGov?: PromiseOrValue<string> | null,
      newGov?: PromiseOrValue<string> | null
    ): ChangeGovStartedEventFilter;
    ChangeGovStarted(
      previousGov?: PromiseOrValue<string> | null,
      newGov?: PromiseOrValue<string> | null
    ): ChangeGovStartedEventFilter;

    "DecreaseOrderCancelFailed(uint256,bytes4,bytes4)"(
      orderIndex?: PromiseOrValue<BigNumberish> | null,
      shortenedReason1?: null,
      shortenedReason2?: null
    ): DecreaseOrderCancelFailedEventFilter;
    DecreaseOrderCancelFailed(
      orderIndex?: PromiseOrValue<BigNumberish> | null,
      shortenedReason1?: null,
      shortenedReason2?: null
    ): DecreaseOrderCancelFailedEventFilter;

    "DecreaseOrderCancelSucceeded(uint256,bytes4)"(
      orderIndex?: PromiseOrValue<BigNumberish> | null,
      shortenedReason?: null
    ): DecreaseOrderCancelSucceededEventFilter;
    DecreaseOrderCancelSucceeded(
      orderIndex?: PromiseOrValue<BigNumberish> | null,
      shortenedReason?: null
    ): DecreaseOrderCancelSucceededEventFilter;

    "DecreaseOrderExecuteFailed(uint256)"(
      orderIndex?: PromiseOrValue<BigNumberish> | null
    ): DecreaseOrderExecuteFailedEventFilter;
    DecreaseOrderExecuteFailed(
      orderIndex?: PromiseOrValue<BigNumberish> | null
    ): DecreaseOrderExecuteFailedEventFilter;

    "ExecutorUpdated(address,bool)"(
      executor?: PromiseOrValue<string> | null,
      active?: PromiseOrValue<boolean> | null
    ): ExecutorUpdatedEventFilter;
    ExecutorUpdated(
      executor?: PromiseOrValue<string> | null,
      active?: PromiseOrValue<boolean> | null
    ): ExecutorUpdatedEventFilter;

    "GovChanged(address,address)"(
      previousGov?: PromiseOrValue<string> | null,
      newGov?: PromiseOrValue<string> | null
    ): GovChangedEventFilter;
    GovChanged(
      previousGov?: PromiseOrValue<string> | null,
      newGov?: PromiseOrValue<string> | null
    ): GovChangedEventFilter;

    "IncreaseOrderCancelFailed(uint256,bytes4,bytes4)"(
      orderIndex?: PromiseOrValue<BigNumberish> | null,
      shortenedReason1?: null,
      shortenedReason2?: null
    ): IncreaseOrderCancelFailedEventFilter;
    IncreaseOrderCancelFailed(
      orderIndex?: PromiseOrValue<BigNumberish> | null,
      shortenedReason1?: null,
      shortenedReason2?: null
    ): IncreaseOrderCancelFailedEventFilter;

    "IncreaseOrderCancelSucceeded(uint256,bytes4)"(
      orderIndex?: PromiseOrValue<BigNumberish> | null,
      shortenedReason?: null
    ): IncreaseOrderCancelSucceededEventFilter;
    IncreaseOrderCancelSucceeded(
      orderIndex?: PromiseOrValue<BigNumberish> | null,
      shortenedReason?: null
    ): IncreaseOrderCancelSucceededEventFilter;

    "IncreaseOrderExecuteFailed(uint256)"(
      orderIndex?: PromiseOrValue<BigNumberish> | null
    ): IncreaseOrderExecuteFailedEventFilter;
    IncreaseOrderExecuteFailed(
      orderIndex?: PromiseOrValue<BigNumberish> | null
    ): IncreaseOrderExecuteFailedEventFilter;

    "LiquidateLiquidityPositionFailed(address,uint96,bytes4)"(
      pool?: PromiseOrValue<string> | null,
      positionID?: PromiseOrValue<BigNumberish> | null,
      shortenedReason?: null
    ): LiquidateLiquidityPositionFailedEventFilter;
    LiquidateLiquidityPositionFailed(
      pool?: PromiseOrValue<string> | null,
      positionID?: PromiseOrValue<BigNumberish> | null,
      shortenedReason?: null
    ): LiquidateLiquidityPositionFailedEventFilter;

    "LiquidatePositionFailed(address,address,uint8,bytes4)"(
      pool?: PromiseOrValue<string> | null,
      account?: PromiseOrValue<string> | null,
      side?: PromiseOrValue<BigNumberish> | null,
      shortenedReason?: null
    ): LiquidatePositionFailedEventFilter;
    LiquidatePositionFailed(
      pool?: PromiseOrValue<string> | null,
      account?: PromiseOrValue<string> | null,
      side?: PromiseOrValue<BigNumberish> | null,
      shortenedReason?: null
    ): LiquidatePositionFailedEventFilter;
  };

  estimateGas: {
    acceptGov(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    cancelOrderIfFailedStatus(overrides?: CallOverrides): Promise<BigNumber>;

    changeGov(
      _newGov: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    collectProtocolFeeBatch(
      _packedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeAdjustLiquidityPositionMargins(
      _endIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeCloseLiquidityPositions(
      _endIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeDecreaseOrder(
      _packedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeDecreasePositions(
      _endIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeDecreaseRiskBufferFundPositions(
      _endIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeIncreaseOrder(
      _packedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeIncreasePositions(
      _endIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeIncreaseRiskBufferFundPositions(
      _endIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeOpenLiquidityPositions(
      _endIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executors(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    feeReceiver(overrides?: CallOverrides): Promise<BigNumber>;

    gov(overrides?: CallOverrides): Promise<BigNumber>;

    liquidateLiquidityPosition(
      _packedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    liquidatePosition(
      _packedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    liquidator(overrides?: CallOverrides): Promise<BigNumber>;

    multicall(
      data: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    orderBook(overrides?: CallOverrides): Promise<BigNumber>;

    pendingGov(overrides?: CallOverrides): Promise<BigNumber>;

    poolIndexer(overrides?: CallOverrides): Promise<BigNumber>;

    positionRouter(overrides?: CallOverrides): Promise<BigNumber>;

    priceFeed(overrides?: CallOverrides): Promise<BigNumber>;

    sampleAndAdjustFundingRateBatch(
      _packedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setCancelOrderIfFailedStatus(
      _cancelOrderIfFailedStatus: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setExecutor(
      _executor: PromiseOrValue<string>,
      _active: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setFeeReceiver(
      _receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setPriceX96s(
      _packedValues: PromiseOrValue<BigNumberish>[],
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptGov(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    cancelOrderIfFailedStatus(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    changeGov(
      _newGov: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    collectProtocolFeeBatch(
      _packedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeAdjustLiquidityPositionMargins(
      _endIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeCloseLiquidityPositions(
      _endIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeDecreaseOrder(
      _packedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeDecreasePositions(
      _endIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeDecreaseRiskBufferFundPositions(
      _endIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeIncreaseOrder(
      _packedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeIncreasePositions(
      _endIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeIncreaseRiskBufferFundPositions(
      _endIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeOpenLiquidityPositions(
      _endIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executors(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    feeReceiver(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gov(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    liquidateLiquidityPosition(
      _packedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    liquidatePosition(
      _packedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    liquidator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    multicall(
      data: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    orderBook(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingGov(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolIndexer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    positionRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceFeed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sampleAndAdjustFundingRateBatch(
      _packedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setCancelOrderIfFailedStatus(
      _cancelOrderIfFailedStatus: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setExecutor(
      _executor: PromiseOrValue<string>,
      _active: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setFeeReceiver(
      _receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setPriceX96s(
      _packedValues: PromiseOrValue<BigNumberish>[],
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}