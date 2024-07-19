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

export interface PoolIndexerInterface extends utils.Interface {
  functions: {
    "assignPoolIndex(address)": FunctionFragment;
    "indexPools(uint24)": FunctionFragment;
    "indexToken(uint24)": FunctionFragment;
    "poolFactory()": FunctionFragment;
    "poolIndex()": FunctionFragment;
    "poolIndexes(address)": FunctionFragment;
    "tokenIndexes(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "assignPoolIndex"
      | "indexPools"
      | "indexToken"
      | "poolFactory"
      | "poolIndex"
      | "poolIndexes"
      | "tokenIndexes"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "assignPoolIndex",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "indexPools",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "indexToken",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "poolFactory",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "poolIndex", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "poolIndexes",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenIndexes",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "assignPoolIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "indexPools", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "indexToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "poolFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "poolIndex", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "poolIndexes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenIndexes",
    data: BytesLike
  ): Result;

  events: {
    "PoolIndexAssigned(address,address,uint24)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PoolIndexAssigned"): EventFragment;
}

export interface PoolIndexAssignedEventObject {
  pool: string;
  token: string;
  index: number;
}
export type PoolIndexAssignedEvent = TypedEvent<
  [string, string, number],
  PoolIndexAssignedEventObject
>;

export type PoolIndexAssignedEventFilter =
  TypedEventFilter<PoolIndexAssignedEvent>;

export interface PoolIndexer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PoolIndexerInterface;

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
    assignPoolIndex(
      _pool: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    indexPools(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    indexToken(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string] & { token: string }>;

    poolFactory(overrides?: CallOverrides): Promise<[string]>;

    poolIndex(overrides?: CallOverrides): Promise<[number]>;

    poolIndexes(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    tokenIndexes(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[number] & { index: number }>;
  };

  assignPoolIndex(
    _pool: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  indexPools(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  indexToken(
    _index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  poolFactory(overrides?: CallOverrides): Promise<string>;

  poolIndex(overrides?: CallOverrides): Promise<number>;

  poolIndexes(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<number>;

  tokenIndexes(
    _token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<number>;

  callStatic: {
    assignPoolIndex(
      _pool: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<number>;

    indexPools(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    indexToken(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    poolFactory(overrides?: CallOverrides): Promise<string>;

    poolIndex(overrides?: CallOverrides): Promise<number>;

    poolIndexes(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<number>;

    tokenIndexes(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<number>;
  };

  filters: {
    "PoolIndexAssigned(address,address,uint24)"(
      pool?: PromiseOrValue<string> | null,
      token?: PromiseOrValue<string> | null,
      index?: PromiseOrValue<BigNumberish> | null
    ): PoolIndexAssignedEventFilter;
    PoolIndexAssigned(
      pool?: PromiseOrValue<string> | null,
      token?: PromiseOrValue<string> | null,
      index?: PromiseOrValue<BigNumberish> | null
    ): PoolIndexAssignedEventFilter;
  };

  estimateGas: {
    assignPoolIndex(
      _pool: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    indexPools(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    indexToken(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    poolFactory(overrides?: CallOverrides): Promise<BigNumber>;

    poolIndex(overrides?: CallOverrides): Promise<BigNumber>;

    poolIndexes(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenIndexes(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    assignPoolIndex(
      _pool: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    indexPools(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    indexToken(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    poolFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolIndexes(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenIndexes(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
