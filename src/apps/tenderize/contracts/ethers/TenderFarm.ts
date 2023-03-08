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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export interface TenderFarmInterface extends utils.Interface {
  functions: {
    'CRF()': FunctionFragment;
    'addRewards(uint256)': FunctionFragment;
    'availableRewards(address)': FunctionFragment;
    'farm(uint256)': FunctionFragment;
    'farmFor(address,uint256)': FunctionFragment;
    'farmWithPermit(uint256,uint256,uint8,bytes32,bytes32)': FunctionFragment;
    'harvest()': FunctionFragment;
    'initialize(address,address,address)': FunctionFragment;
    'nextTotalStake()': FunctionFragment;
    'rewardToken()': FunctionFragment;
    'selfPermit(address,uint256,uint256,uint8,bytes32,bytes32)': FunctionFragment;
    'selfPermitIfNecessary(address,uint256,uint256,uint8,bytes32,bytes32)': FunctionFragment;
    'setTenderizer(address)': FunctionFragment;
    'stakeOf(address)': FunctionFragment;
    'stakes(address)': FunctionFragment;
    'tenderizer()': FunctionFragment;
    'token()': FunctionFragment;
    'totalStake()': FunctionFragment;
    'unfarm(uint256)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'CRF'
      | 'addRewards'
      | 'availableRewards'
      | 'farm'
      | 'farmFor'
      | 'farmWithPermit'
      | 'harvest'
      | 'initialize'
      | 'nextTotalStake'
      | 'rewardToken'
      | 'selfPermit'
      | 'selfPermitIfNecessary'
      | 'setTenderizer'
      | 'stakeOf'
      | 'stakes'
      | 'tenderizer'
      | 'token'
      | 'totalStake'
      | 'unfarm',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'CRF', values?: undefined): string;
  encodeFunctionData(functionFragment: 'addRewards', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'availableRewards', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'farm', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(
    functionFragment: 'farmFor',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: 'farmWithPermit',
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
    ],
  ): string;
  encodeFunctionData(functionFragment: 'harvest', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'initialize',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(functionFragment: 'nextTotalStake', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewardToken', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'selfPermit',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
    ],
  ): string;
  encodeFunctionData(
    functionFragment: 'selfPermitIfNecessary',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
    ],
  ): string;
  encodeFunctionData(functionFragment: 'setTenderizer', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'stakeOf', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'stakes', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'tenderizer', values?: undefined): string;
  encodeFunctionData(functionFragment: 'token', values?: undefined): string;
  encodeFunctionData(functionFragment: 'totalStake', values?: undefined): string;
  encodeFunctionData(functionFragment: 'unfarm', values: [PromiseOrValue<BigNumberish>]): string;

  decodeFunctionResult(functionFragment: 'CRF', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'addRewards', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'availableRewards', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'farm', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'farmFor', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'farmWithPermit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'harvest', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nextTotalStake', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'selfPermit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'selfPermitIfNecessary', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setTenderizer', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'stakeOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'stakes', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'tenderizer', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'token', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalStake', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'unfarm', data: BytesLike): Result;

  events: {
    'Farm(address,uint256)': EventFragment;
    'Harvest(address,uint256)': EventFragment;
    'RewardsAdded(uint256)': EventFragment;
    'Unfarm(address,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Farm'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Harvest'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RewardsAdded'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Unfarm'): EventFragment;
}

export interface FarmEventObject {
  account: string;
  amount: BigNumber;
}
export type FarmEvent = TypedEvent<[string, BigNumber], FarmEventObject>;

export type FarmEventFilter = TypedEventFilter<FarmEvent>;

export interface HarvestEventObject {
  account: string;
  amount: BigNumber;
}
export type HarvestEvent = TypedEvent<[string, BigNumber], HarvestEventObject>;

export type HarvestEventFilter = TypedEventFilter<HarvestEvent>;

export interface RewardsAddedEventObject {
  amount: BigNumber;
}
export type RewardsAddedEvent = TypedEvent<[BigNumber], RewardsAddedEventObject>;

export type RewardsAddedEventFilter = TypedEventFilter<RewardsAddedEvent>;

export interface UnfarmEventObject {
  account: string;
  amount: BigNumber;
}
export type UnfarmEvent = TypedEvent<[string, BigNumber], UnfarmEventObject>;

export type UnfarmEventFilter = TypedEventFilter<UnfarmEvent>;

export interface TenderFarm extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TenderFarmInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    CRF(overrides?: CallOverrides): Promise<[BigNumber]>;

    addRewards(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    availableRewards(_for: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    farm(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    farmFor(
      _for: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    farmWithPermit(
      _amount: PromiseOrValue<BigNumberish>,
      _deadline: PromiseOrValue<BigNumberish>,
      _v: PromiseOrValue<BigNumberish>,
      _r: PromiseOrValue<BytesLike>,
      _s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    harvest(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    initialize(
      _stakeToken: PromiseOrValue<string>,
      _rewardToken: PromiseOrValue<string>,
      _tenderizer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    nextTotalStake(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardToken(overrides?: CallOverrides): Promise<[string]>;

    selfPermit(
      _token: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      _deadline: PromiseOrValue<BigNumberish>,
      _v: PromiseOrValue<BigNumberish>,
      _r: PromiseOrValue<BytesLike>,
      _s: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    selfPermitIfNecessary(
      _token: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      _deadline: PromiseOrValue<BigNumberish>,
      _v: PromiseOrValue<BigNumberish>,
      _r: PromiseOrValue<BytesLike>,
      _s: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    setTenderizer(
      _tenderizer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    stakeOf(_of: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    stakes(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber] & { stake: BigNumber; lastCRF: BigNumber }>;

    tenderizer(overrides?: CallOverrides): Promise<[string]>;

    token(overrides?: CallOverrides): Promise<[string]>;

    totalStake(overrides?: CallOverrides): Promise<[BigNumber]>;

    unfarm(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  CRF(overrides?: CallOverrides): Promise<BigNumber>;

  addRewards(
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  availableRewards(_for: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  farm(
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  farmFor(
    _for: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  farmWithPermit(
    _amount: PromiseOrValue<BigNumberish>,
    _deadline: PromiseOrValue<BigNumberish>,
    _v: PromiseOrValue<BigNumberish>,
    _r: PromiseOrValue<BytesLike>,
    _s: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  harvest(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  initialize(
    _stakeToken: PromiseOrValue<string>,
    _rewardToken: PromiseOrValue<string>,
    _tenderizer: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  nextTotalStake(overrides?: CallOverrides): Promise<BigNumber>;

  rewardToken(overrides?: CallOverrides): Promise<string>;

  selfPermit(
    _token: PromiseOrValue<string>,
    _value: PromiseOrValue<BigNumberish>,
    _deadline: PromiseOrValue<BigNumberish>,
    _v: PromiseOrValue<BigNumberish>,
    _r: PromiseOrValue<BytesLike>,
    _s: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  selfPermitIfNecessary(
    _token: PromiseOrValue<string>,
    _value: PromiseOrValue<BigNumberish>,
    _deadline: PromiseOrValue<BigNumberish>,
    _v: PromiseOrValue<BigNumberish>,
    _r: PromiseOrValue<BytesLike>,
    _s: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  setTenderizer(
    _tenderizer: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  stakeOf(_of: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  stakes(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<[BigNumber, BigNumber] & { stake: BigNumber; lastCRF: BigNumber }>;

  tenderizer(overrides?: CallOverrides): Promise<string>;

  token(overrides?: CallOverrides): Promise<string>;

  totalStake(overrides?: CallOverrides): Promise<BigNumber>;

  unfarm(
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    CRF(overrides?: CallOverrides): Promise<BigNumber>;

    addRewards(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    availableRewards(_for: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    farm(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    farmFor(
      _for: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    farmWithPermit(
      _amount: PromiseOrValue<BigNumberish>,
      _deadline: PromiseOrValue<BigNumberish>,
      _v: PromiseOrValue<BigNumberish>,
      _r: PromiseOrValue<BytesLike>,
      _s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<void>;

    harvest(overrides?: CallOverrides): Promise<void>;

    initialize(
      _stakeToken: PromiseOrValue<string>,
      _rewardToken: PromiseOrValue<string>,
      _tenderizer: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    nextTotalStake(overrides?: CallOverrides): Promise<BigNumber>;

    rewardToken(overrides?: CallOverrides): Promise<string>;

    selfPermit(
      _token: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      _deadline: PromiseOrValue<BigNumberish>,
      _v: PromiseOrValue<BigNumberish>,
      _r: PromiseOrValue<BytesLike>,
      _s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<void>;

    selfPermitIfNecessary(
      _token: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      _deadline: PromiseOrValue<BigNumberish>,
      _v: PromiseOrValue<BigNumberish>,
      _r: PromiseOrValue<BytesLike>,
      _s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<void>;

    setTenderizer(_tenderizer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    stakeOf(_of: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    stakes(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber] & { stake: BigNumber; lastCRF: BigNumber }>;

    tenderizer(overrides?: CallOverrides): Promise<string>;

    token(overrides?: CallOverrides): Promise<string>;

    totalStake(overrides?: CallOverrides): Promise<BigNumber>;

    unfarm(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'Farm(address,uint256)'(account?: PromiseOrValue<string> | null, amount?: null): FarmEventFilter;
    Farm(account?: PromiseOrValue<string> | null, amount?: null): FarmEventFilter;

    'Harvest(address,uint256)'(account?: PromiseOrValue<string> | null, amount?: null): HarvestEventFilter;
    Harvest(account?: PromiseOrValue<string> | null, amount?: null): HarvestEventFilter;

    'RewardsAdded(uint256)'(amount?: null): RewardsAddedEventFilter;
    RewardsAdded(amount?: null): RewardsAddedEventFilter;

    'Unfarm(address,uint256)'(account?: PromiseOrValue<string> | null, amount?: null): UnfarmEventFilter;
    Unfarm(account?: PromiseOrValue<string> | null, amount?: null): UnfarmEventFilter;
  };

  estimateGas: {
    CRF(overrides?: CallOverrides): Promise<BigNumber>;

    addRewards(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    availableRewards(_for: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    farm(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    farmFor(
      _for: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    farmWithPermit(
      _amount: PromiseOrValue<BigNumberish>,
      _deadline: PromiseOrValue<BigNumberish>,
      _v: PromiseOrValue<BigNumberish>,
      _r: PromiseOrValue<BytesLike>,
      _s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    harvest(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    initialize(
      _stakeToken: PromiseOrValue<string>,
      _rewardToken: PromiseOrValue<string>,
      _tenderizer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    nextTotalStake(overrides?: CallOverrides): Promise<BigNumber>;

    rewardToken(overrides?: CallOverrides): Promise<BigNumber>;

    selfPermit(
      _token: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      _deadline: PromiseOrValue<BigNumberish>,
      _v: PromiseOrValue<BigNumberish>,
      _r: PromiseOrValue<BytesLike>,
      _s: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    selfPermitIfNecessary(
      _token: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      _deadline: PromiseOrValue<BigNumberish>,
      _v: PromiseOrValue<BigNumberish>,
      _r: PromiseOrValue<BytesLike>,
      _s: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    setTenderizer(
      _tenderizer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    stakeOf(_of: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    stakes(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    tenderizer(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    totalStake(overrides?: CallOverrides): Promise<BigNumber>;

    unfarm(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    CRF(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addRewards(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    availableRewards(_for: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    farm(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    farmFor(
      _for: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    farmWithPermit(
      _amount: PromiseOrValue<BigNumberish>,
      _deadline: PromiseOrValue<BigNumberish>,
      _v: PromiseOrValue<BigNumberish>,
      _r: PromiseOrValue<BytesLike>,
      _s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    harvest(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    initialize(
      _stakeToken: PromiseOrValue<string>,
      _rewardToken: PromiseOrValue<string>,
      _tenderizer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    nextTotalStake(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    selfPermit(
      _token: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      _deadline: PromiseOrValue<BigNumberish>,
      _v: PromiseOrValue<BigNumberish>,
      _r: PromiseOrValue<BytesLike>,
      _s: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    selfPermitIfNecessary(
      _token: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      _deadline: PromiseOrValue<BigNumberish>,
      _v: PromiseOrValue<BigNumberish>,
      _r: PromiseOrValue<BytesLike>,
      _s: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    setTenderizer(
      _tenderizer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    stakeOf(_of: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stakes(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tenderizer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalStake(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unfarm(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}
