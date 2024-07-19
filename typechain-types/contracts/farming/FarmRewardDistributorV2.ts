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

export declare namespace FarmRewardDistributorV2 {
  export type LockupFreeRateParameterStruct = {
    period: PromiseOrValue<BigNumberish>;
    lockupFreeRate: PromiseOrValue<BigNumberish>;
  };

  export type LockupFreeRateParameterStructOutput = [number, number] & {
    period: number;
    lockupFreeRate: number;
  };
}

export interface FarmRewardDistributorV2Interface extends utils.Interface {
  functions: {
    "EFC()": FunctionFragment;
    "REWARD_TYPE_LIQUIDITY()": FunctionFragment;
    "REWARD_TYPE_POSITION()": FunctionFragment;
    "REWARD_TYPE_REFERRAL_LIQUIDITY()": FunctionFragment;
    "REWARD_TYPE_REFERRAL_POSITION()": FunctionFragment;
    "REWARD_TYPE_RISK_BUFFER_FUND()": FunctionFragment;
    "acceptGov()": FunctionFragment;
    "changeGov(address)": FunctionFragment;
    "collectBatch(address,uint256,uint256[],bytes,address)": FunctionFragment;
    "collectedReferralRewards(uint16,address,uint16)": FunctionFragment;
    "collectedRewards(address,address,uint16)": FunctionFragment;
    "collectors(address)": FunctionFragment;
    "distributorV1()": FunctionFragment;
    "feeDistributor()": FunctionFragment;
    "gov()": FunctionFragment;
    "lockupFreeRates(uint16)": FunctionFragment;
    "nonces(address)": FunctionFragment;
    "pendingGov()": FunctionFragment;
    "poolIndexer()": FunctionFragment;
    "rewardTypesDescriptions(uint16)": FunctionFragment;
    "setCollector(address,bool)": FunctionFragment;
    "setLockupFreeRates((uint16,uint32)[])": FunctionFragment;
    "setRewardType(uint16,string)": FunctionFragment;
    "signer()": FunctionFragment;
    "token()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "EFC"
      | "REWARD_TYPE_LIQUIDITY"
      | "REWARD_TYPE_POSITION"
      | "REWARD_TYPE_REFERRAL_LIQUIDITY"
      | "REWARD_TYPE_REFERRAL_POSITION"
      | "REWARD_TYPE_RISK_BUFFER_FUND"
      | "acceptGov"
      | "changeGov"
      | "collectBatch"
      | "collectedReferralRewards"
      | "collectedRewards"
      | "collectors"
      | "distributorV1"
      | "feeDistributor"
      | "gov"
      | "lockupFreeRates"
      | "nonces"
      | "pendingGov"
      | "poolIndexer"
      | "rewardTypesDescriptions"
      | "setCollector"
      | "setLockupFreeRates"
      | "setRewardType"
      | "signer"
      | "token"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "EFC", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "REWARD_TYPE_LIQUIDITY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "REWARD_TYPE_POSITION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "REWARD_TYPE_REFERRAL_LIQUIDITY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "REWARD_TYPE_REFERRAL_POSITION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "REWARD_TYPE_RISK_BUFFER_FUND",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "acceptGov", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "changeGov",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "collectBatch",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "collectedReferralRewards",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "collectedRewards",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "collectors",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "distributorV1",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feeDistributor",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "gov", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "lockupFreeRates",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "nonces",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingGov",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "poolIndexer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardTypesDescriptions",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setCollector",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "setLockupFreeRates",
    values: [FarmRewardDistributorV2.LockupFreeRateParameterStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setRewardType",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "signer", values?: undefined): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;

  decodeFunctionResult(functionFragment: "EFC", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "REWARD_TYPE_LIQUIDITY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "REWARD_TYPE_POSITION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "REWARD_TYPE_REFERRAL_LIQUIDITY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "REWARD_TYPE_REFERRAL_POSITION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "REWARD_TYPE_RISK_BUFFER_FUND",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "acceptGov", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "changeGov", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "collectBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collectedReferralRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collectedRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "collectors", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "distributorV1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeDistributor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lockupFreeRates",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pendingGov", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "poolIndexer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardTypesDescriptions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCollector",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLockupFreeRates",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRewardType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "signer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;

  events: {
    "ChangeGovStarted(address,address)": EventFragment;
    "CollectorUpdated(address,bool)": EventFragment;
    "GovChanged(address,address)": EventFragment;
    "LockupFreeRateSet(uint16,uint32)": EventFragment;
    "RewardCollected(address,address,uint16,uint16,uint32,address,uint200)": EventFragment;
    "RewardLockedAndBurned(address,uint16,address,uint256,uint256)": EventFragment;
    "RewardTypeDescriptionSet(uint16,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ChangeGovStarted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CollectorUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GovChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LockupFreeRateSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardCollected"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardLockedAndBurned"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardTypeDescriptionSet"): EventFragment;
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

export interface CollectorUpdatedEventObject {
  collector: string;
  enabled: boolean;
}
export type CollectorUpdatedEvent = TypedEvent<
  [string, boolean],
  CollectorUpdatedEventObject
>;

export type CollectorUpdatedEventFilter =
  TypedEventFilter<CollectorUpdatedEvent>;

export interface GovChangedEventObject {
  previousGov: string;
  newGov: string;
}
export type GovChangedEvent = TypedEvent<
  [string, string],
  GovChangedEventObject
>;

export type GovChangedEventFilter = TypedEventFilter<GovChangedEvent>;

export interface LockupFreeRateSetEventObject {
  period: number;
  lockupFreeRate: number;
}
export type LockupFreeRateSetEvent = TypedEvent<
  [number, number],
  LockupFreeRateSetEventObject
>;

export type LockupFreeRateSetEventFilter =
  TypedEventFilter<LockupFreeRateSetEvent>;

export interface RewardCollectedEventObject {
  pool: string;
  account: string;
  rewardType: number;
  referralToken: number;
  nonce: number;
  receiver: string;
  amount: BigNumber;
}
export type RewardCollectedEvent = TypedEvent<
  [string, string, number, number, number, string, BigNumber],
  RewardCollectedEventObject
>;

export type RewardCollectedEventFilter = TypedEventFilter<RewardCollectedEvent>;

export interface RewardLockedAndBurnedEventObject {
  account: string;
  period: number;
  receiver: string;
  lockedOrUnlockedAmount: BigNumber;
  burnedAmount: BigNumber;
}
export type RewardLockedAndBurnedEvent = TypedEvent<
  [string, number, string, BigNumber, BigNumber],
  RewardLockedAndBurnedEventObject
>;

export type RewardLockedAndBurnedEventFilter =
  TypedEventFilter<RewardLockedAndBurnedEvent>;

export interface RewardTypeDescriptionSetEventObject {
  rewardType: number;
  description: string;
}
export type RewardTypeDescriptionSetEvent = TypedEvent<
  [number, string],
  RewardTypeDescriptionSetEventObject
>;

export type RewardTypeDescriptionSetEventFilter =
  TypedEventFilter<RewardTypeDescriptionSetEvent>;

export interface FarmRewardDistributorV2 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FarmRewardDistributorV2Interface;

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
    EFC(overrides?: CallOverrides): Promise<[string]>;

    REWARD_TYPE_LIQUIDITY(overrides?: CallOverrides): Promise<[number]>;

    REWARD_TYPE_POSITION(overrides?: CallOverrides): Promise<[number]>;

    REWARD_TYPE_REFERRAL_LIQUIDITY(
      overrides?: CallOverrides
    ): Promise<[number]>;

    REWARD_TYPE_REFERRAL_POSITION(overrides?: CallOverrides): Promise<[number]>;

    REWARD_TYPE_RISK_BUFFER_FUND(overrides?: CallOverrides): Promise<[number]>;

    acceptGov(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    changeGov(
      _newGov: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    collectBatch(
      _account: PromiseOrValue<string>,
      _nonceAndLockupPeriod: PromiseOrValue<BigNumberish>,
      _packedPoolRewardValues: PromiseOrValue<BigNumberish>[],
      _signature: PromiseOrValue<BytesLike>,
      _receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    collectedReferralRewards(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    collectedRewards(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    collectors(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    distributorV1(overrides?: CallOverrides): Promise<[string]>;

    feeDistributor(overrides?: CallOverrides): Promise<[string]>;

    gov(overrides?: CallOverrides): Promise<[string]>;

    lockupFreeRates(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    nonces(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    pendingGov(overrides?: CallOverrides): Promise<[string]>;

    poolIndexer(overrides?: CallOverrides): Promise<[string]>;

    rewardTypesDescriptions(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    setCollector(
      _collector: PromiseOrValue<string>,
      _enabled: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setLockupFreeRates(
      _parameters: FarmRewardDistributorV2.LockupFreeRateParameterStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setRewardType(
      _rewardType: PromiseOrValue<BigNumberish>,
      _description: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    signer(overrides?: CallOverrides): Promise<[string]>;

    token(overrides?: CallOverrides): Promise<[string]>;
  };

  EFC(overrides?: CallOverrides): Promise<string>;

  REWARD_TYPE_LIQUIDITY(overrides?: CallOverrides): Promise<number>;

  REWARD_TYPE_POSITION(overrides?: CallOverrides): Promise<number>;

  REWARD_TYPE_REFERRAL_LIQUIDITY(overrides?: CallOverrides): Promise<number>;

  REWARD_TYPE_REFERRAL_POSITION(overrides?: CallOverrides): Promise<number>;

  REWARD_TYPE_RISK_BUFFER_FUND(overrides?: CallOverrides): Promise<number>;

  acceptGov(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  changeGov(
    _newGov: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  collectBatch(
    _account: PromiseOrValue<string>,
    _nonceAndLockupPeriod: PromiseOrValue<BigNumberish>,
    _packedPoolRewardValues: PromiseOrValue<BigNumberish>[],
    _signature: PromiseOrValue<BytesLike>,
    _receiver: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  collectedReferralRewards(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  collectedRewards(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  collectors(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  distributorV1(overrides?: CallOverrides): Promise<string>;

  feeDistributor(overrides?: CallOverrides): Promise<string>;

  gov(overrides?: CallOverrides): Promise<string>;

  lockupFreeRates(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<number>;

  nonces(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<number>;

  pendingGov(overrides?: CallOverrides): Promise<string>;

  poolIndexer(overrides?: CallOverrides): Promise<string>;

  rewardTypesDescriptions(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  setCollector(
    _collector: PromiseOrValue<string>,
    _enabled: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setLockupFreeRates(
    _parameters: FarmRewardDistributorV2.LockupFreeRateParameterStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setRewardType(
    _rewardType: PromiseOrValue<BigNumberish>,
    _description: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  token(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    EFC(overrides?: CallOverrides): Promise<string>;

    REWARD_TYPE_LIQUIDITY(overrides?: CallOverrides): Promise<number>;

    REWARD_TYPE_POSITION(overrides?: CallOverrides): Promise<number>;

    REWARD_TYPE_REFERRAL_LIQUIDITY(overrides?: CallOverrides): Promise<number>;

    REWARD_TYPE_REFERRAL_POSITION(overrides?: CallOverrides): Promise<number>;

    REWARD_TYPE_RISK_BUFFER_FUND(overrides?: CallOverrides): Promise<number>;

    acceptGov(overrides?: CallOverrides): Promise<void>;

    changeGov(
      _newGov: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    collectBatch(
      _account: PromiseOrValue<string>,
      _nonceAndLockupPeriod: PromiseOrValue<BigNumberish>,
      _packedPoolRewardValues: PromiseOrValue<BigNumberish>[],
      _signature: PromiseOrValue<BytesLike>,
      _receiver: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    collectedReferralRewards(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collectedRewards(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collectors(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    distributorV1(overrides?: CallOverrides): Promise<string>;

    feeDistributor(overrides?: CallOverrides): Promise<string>;

    gov(overrides?: CallOverrides): Promise<string>;

    lockupFreeRates(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number>;

    nonces(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<number>;

    pendingGov(overrides?: CallOverrides): Promise<string>;

    poolIndexer(overrides?: CallOverrides): Promise<string>;

    rewardTypesDescriptions(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    setCollector(
      _collector: PromiseOrValue<string>,
      _enabled: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    setLockupFreeRates(
      _parameters: FarmRewardDistributorV2.LockupFreeRateParameterStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    setRewardType(
      _rewardType: PromiseOrValue<BigNumberish>,
      _description: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    signer(overrides?: CallOverrides): Promise<string>;

    token(overrides?: CallOverrides): Promise<string>;
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

    "CollectorUpdated(address,bool)"(
      collector?: PromiseOrValue<string> | null,
      enabled?: null
    ): CollectorUpdatedEventFilter;
    CollectorUpdated(
      collector?: PromiseOrValue<string> | null,
      enabled?: null
    ): CollectorUpdatedEventFilter;

    "GovChanged(address,address)"(
      previousGov?: PromiseOrValue<string> | null,
      newGov?: PromiseOrValue<string> | null
    ): GovChangedEventFilter;
    GovChanged(
      previousGov?: PromiseOrValue<string> | null,
      newGov?: PromiseOrValue<string> | null
    ): GovChangedEventFilter;

    "LockupFreeRateSet(uint16,uint32)"(
      period?: PromiseOrValue<BigNumberish> | null,
      lockupFreeRate?: null
    ): LockupFreeRateSetEventFilter;
    LockupFreeRateSet(
      period?: PromiseOrValue<BigNumberish> | null,
      lockupFreeRate?: null
    ): LockupFreeRateSetEventFilter;

    "RewardCollected(address,address,uint16,uint16,uint32,address,uint200)"(
      pool?: null,
      account?: PromiseOrValue<string> | null,
      rewardType?: PromiseOrValue<BigNumberish> | null,
      referralToken?: PromiseOrValue<BigNumberish> | null,
      nonce?: null,
      receiver?: null,
      amount?: null
    ): RewardCollectedEventFilter;
    RewardCollected(
      pool?: null,
      account?: PromiseOrValue<string> | null,
      rewardType?: PromiseOrValue<BigNumberish> | null,
      referralToken?: PromiseOrValue<BigNumberish> | null,
      nonce?: null,
      receiver?: null,
      amount?: null
    ): RewardCollectedEventFilter;

    "RewardLockedAndBurned(address,uint16,address,uint256,uint256)"(
      account?: PromiseOrValue<string> | null,
      period?: PromiseOrValue<BigNumberish> | null,
      receiver?: PromiseOrValue<string> | null,
      lockedOrUnlockedAmount?: null,
      burnedAmount?: null
    ): RewardLockedAndBurnedEventFilter;
    RewardLockedAndBurned(
      account?: PromiseOrValue<string> | null,
      period?: PromiseOrValue<BigNumberish> | null,
      receiver?: PromiseOrValue<string> | null,
      lockedOrUnlockedAmount?: null,
      burnedAmount?: null
    ): RewardLockedAndBurnedEventFilter;

    "RewardTypeDescriptionSet(uint16,string)"(
      rewardType?: PromiseOrValue<BigNumberish> | null,
      description?: null
    ): RewardTypeDescriptionSetEventFilter;
    RewardTypeDescriptionSet(
      rewardType?: PromiseOrValue<BigNumberish> | null,
      description?: null
    ): RewardTypeDescriptionSetEventFilter;
  };

  estimateGas: {
    EFC(overrides?: CallOverrides): Promise<BigNumber>;

    REWARD_TYPE_LIQUIDITY(overrides?: CallOverrides): Promise<BigNumber>;

    REWARD_TYPE_POSITION(overrides?: CallOverrides): Promise<BigNumber>;

    REWARD_TYPE_REFERRAL_LIQUIDITY(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    REWARD_TYPE_REFERRAL_POSITION(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    REWARD_TYPE_RISK_BUFFER_FUND(overrides?: CallOverrides): Promise<BigNumber>;

    acceptGov(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    changeGov(
      _newGov: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    collectBatch(
      _account: PromiseOrValue<string>,
      _nonceAndLockupPeriod: PromiseOrValue<BigNumberish>,
      _packedPoolRewardValues: PromiseOrValue<BigNumberish>[],
      _signature: PromiseOrValue<BytesLike>,
      _receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    collectedReferralRewards(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collectedRewards(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collectors(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    distributorV1(overrides?: CallOverrides): Promise<BigNumber>;

    feeDistributor(overrides?: CallOverrides): Promise<BigNumber>;

    gov(overrides?: CallOverrides): Promise<BigNumber>;

    lockupFreeRates(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nonces(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pendingGov(overrides?: CallOverrides): Promise<BigNumber>;

    poolIndexer(overrides?: CallOverrides): Promise<BigNumber>;

    rewardTypesDescriptions(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setCollector(
      _collector: PromiseOrValue<string>,
      _enabled: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setLockupFreeRates(
      _parameters: FarmRewardDistributorV2.LockupFreeRateParameterStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setRewardType(
      _rewardType: PromiseOrValue<BigNumberish>,
      _description: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    signer(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    EFC(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    REWARD_TYPE_LIQUIDITY(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    REWARD_TYPE_POSITION(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    REWARD_TYPE_REFERRAL_LIQUIDITY(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    REWARD_TYPE_REFERRAL_POSITION(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    REWARD_TYPE_RISK_BUFFER_FUND(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    acceptGov(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    changeGov(
      _newGov: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    collectBatch(
      _account: PromiseOrValue<string>,
      _nonceAndLockupPeriod: PromiseOrValue<BigNumberish>,
      _packedPoolRewardValues: PromiseOrValue<BigNumberish>[],
      _signature: PromiseOrValue<BytesLike>,
      _receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    collectedReferralRewards(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    collectedRewards(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    collectors(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    distributorV1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeDistributor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gov(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lockupFreeRates(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nonces(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pendingGov(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolIndexer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardTypesDescriptions(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setCollector(
      _collector: PromiseOrValue<string>,
      _enabled: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setLockupFreeRates(
      _parameters: FarmRewardDistributorV2.LockupFreeRateParameterStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setRewardType(
      _rewardType: PromiseOrValue<BigNumberish>,
      _description: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    signer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
