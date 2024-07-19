/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  RewardCollectorV2,
  RewardCollectorV2Interface,
} from "../../../contracts/plugins/RewardCollectorV2";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract Router",
        name: "_router",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_EQU",
        type: "address",
      },
      {
        internalType: "contract IEFC",
        name: "_EFC",
        type: "address",
      },
      {
        internalType: "contract PositionFarmRewardDistributor",
        name: "_distributor",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "requiredAmount",
        type: "uint256",
      },
    ],
    name: "InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        internalType: "address",
        name: "requiredCaller",
        type: "address",
      },
    ],
    name: "InvalidCaller",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "SafeERC20FailedOperation",
    type: "error",
  },
  {
    inputs: [],
    name: "EFC",
    outputs: [
      {
        internalType: "contract IEFC",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "EQU",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_tokenIDs",
        type: "uint256[]",
      },
    ],
    name: "collectArchitectRewardBatch",
    outputs: [
      {
        internalType: "uint256",
        name: "rewardDebt",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IPool[]",
        name: "_pools",
        type: "address[]",
      },
    ],
    name: "collectFarmLiquidityRewardBatch",
    outputs: [
      {
        internalType: "uint256",
        name: "rewardDebt",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IPool[]",
        name: "_pools",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_referralTokens",
        type: "uint256[]",
      },
    ],
    name: "collectFarmReferralRewardBatch",
    outputs: [
      {
        internalType: "uint256",
        name: "rewardDebt",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IPool[]",
        name: "_pools",
        type: "address[]",
      },
    ],
    name: "collectFarmRiskBufferFundRewardBatch",
    outputs: [
      {
        internalType: "uint256",
        name: "rewardDebt",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_nonce",
        type: "uint32",
      },
      {
        components: [
          {
            internalType: "address",
            name: "pool",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "totalReward",
            type: "uint256",
          },
        ],
        internalType: "struct PositionFarmRewardDistributor.PoolTotalReward[]",
        name: "_poolTotalRewards",
        type: "tuple[]",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "collectPositionFarmRewardBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IPool[]",
        name: "_pools",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_referralTokens",
        type: "uint256[]",
      },
    ],
    name: "collectReferralFeeBatch",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
    ],
    name: "collectStakingRewardBatch",
    outputs: [
      {
        internalType: "uint256",
        name: "rewardDebt",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
    ],
    name: "collectV3PosStakingRewardBatch",
    outputs: [
      {
        internalType: "uint256",
        name: "rewardDebt",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "distributor",
    outputs: [
      {
        internalType: "contract PositionFarmRewardDistributor",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]",
      },
    ],
    name: "multicall",
    outputs: [
      {
        internalType: "bytes[]",
        name: "results",
        type: "bytes[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "router",
    outputs: [
      {
        internalType: "contract Router",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amountMinimum",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "sweepToken",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x610100346100e057601f61169338819003918201601f19168301916001600160401b038311848410176100e5578084926080946040528339810103126100e05780516001600160a01b039182821682036100e05760208101519083821682036100e05760408101519084821682036100e0576060015193841684036100e05760c05260a05260805260e05260405161159790816100fc8239608051818181610108015281816101e0015281816106550152610dba015260a0518161051c015260c051818181610f3d01526112f7015260e05181818161058b0152610c360152f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe608060408181526004918236101561001657600080fd5b600092833560e01c9182631420f80214610ef357508163165d961414610d7e5781631c99e1b014610b76578163422d241314610aeb5781635a4c4fa414610a605781638bd19a3b146109c0578163aad3131f14610934578163ac9650d8146106c9578163bb63478c146105af578163bfe1092814610540578163c2aa99a5146104d1578163df2ab5bb1461025e578163e161674b14610130575063f887ea40146100bf57600080fd5b3461012c57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261012c576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b5080fd5b83833461012c5760206060610190946101c061014b36610f92565b9199909261015983856112db565b88519a8b9788977f03dbee4d00000000000000000000000000000000000000000000000000000000895288015260648701916111ee565b917ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc858403016024860152611179565b30604483015203818573ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165af19182156102535791610219575b6020925051908152f35b90506020823d60201161024b575b8161023460209383610ffb565b8101031261024657602091519061020f565b600080fd5b3d9150610227565b9051903d90823e3d90fd5b919050346104cd5760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126104cd57813573ffffffffffffffffffffffffffffffffffffffff928382168092036104c957602491823595604435958616809603610246578451957f70a08231000000000000000000000000000000000000000000000000000000008752308488015260209788888781875afa9788156104bf578398610490575b5080881061045c5750855190888201907fa9059cbb0000000000000000000000000000000000000000000000000000000082528683015287604483015260448252608082019167ffffffffffffffff8184108185111761042f5760c082019081118482101761042f57846103bc938c959382938c52601e85527f416464726573733a206c6f772d6c6576656c2063616c6c206661696c6564000060a0820152519082895af16103b5611461565b9086611491565b918251928315159283610407575b50505090506103dc5750505051908152f35b8351917f5274afe7000000000000000000000000000000000000000000000000000000008352820152fd5b91938180945001031261012c578701519081159182150361042c5750803880896103ca565b80fd5b876041887f4e487b7100000000000000000000000000000000000000000000000000000000600052526000fd5b84604491878a8a51937fcf479181000000000000000000000000000000000000000000000000000000008552840152820152fd5b9097508881813d83116104b8575b6104a88183610ffb565b8101031261024657519638610308565b503d61049e565b87513d85823e3d90fd5b8480fd5b8280fd5b50503461012c57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261012c576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b50503461012c57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261012c576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b83833461012c57602092837ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126104cd57803567ffffffffffffffff81116106c557610601859136908401610f61565b84517f525c8656000000000000000000000000000000000000000000000000000000008152938492839261063b9230923392918601611245565b03818673ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165af19283156106ba579261068b575b5051908152f35b9091508281813d83116106b3575b6106a38183610ffb565b8101031261024657519083610684565b503d610699565b8251903d90823e3d90fd5b8380fd5b8391503461012c57602091827ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261042c5767ffffffffffffffff9180358381116104cd5761071d9036908301610f61565b91909361072983611283565b9461073688519687610ffb565b8386527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe061076385611283565b0187865b82811061092457505050845b8481106107f657505050505083519280840190808552835180925280868601968360051b870101940192955b8287106107ac5785850386f35b9091929382806107e6837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc08a6001960301865288516110dc565b960192019601959291909261079f565b8060051b8201357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18336030181121561092057820180359084821161091c57890190803603821361091c579061084d9136916110a5565b89519060608201828110868211176108ee579188806108d2937f206661696c6564000000000000000000000000000000000000000000000000008f8f7f416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c9060019a998352602788528701528501528d81519101305af46108cb611461565b9030611491565b6108dc828a61129b565b526108e7818961129b565b5001610773565b6041877f4e487b71000000000000000000000000000000000000000000000000000000006000525260246000fd5b8780fd5b8680fd5b606082828b010152018890610767565b83833461012c57602092837ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126104cd57803567ffffffffffffffff81116106c557610986859136908401610f61565b84517f64fdd23c000000000000000000000000000000000000000000000000000000008152938492839261063b9230923392918601611245565b83833461012c57602092837ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126104cd57803567ffffffffffffffff81116106c557610a12859136908401610f61565b9092610a1e82856112db565b61063b855194859384937f786bccf200000000000000000000000000000000000000000000000000000000855230908501528760248501526044840191611179565b83833461012c57602092837ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126104cd57803567ffffffffffffffff81116106c557610ab2859136908401610f61565b9261063b855194859384937f724fa7710000000000000000000000000000000000000000000000000000000085523090339086016111b6565b83833461012c57602092837ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126104cd57803567ffffffffffffffff81116106c557610b3d859136908401610f61565b9261063b855194859384937f18602c7b0000000000000000000000000000000000000000000000000000000085523090339086016111b6565b919050346104cd577ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc6060813601126106c55782359263ffffffff84168094036104c95760249167ffffffffffffffff90833582811161091c573660238201121561091c578084013591838311610d7a5736868460061b84010111610d7a57604435848111610d765736602382011215610d7657610c1c903690888189013591016110a5565b9073ffffffffffffffffffffffffffffffffffffffff93847f00000000000000000000000000000000000000000000000000000000000000001694853b15610d725791819a94928c9694928b519c8d977f3077c01c00000000000000000000000000000000000000000000000000000000895260a4890190338d8b01528d8a015260a060448a0152528a60c4880195019188905b828210610d315750505050610cd3838793879593868095030160648501526110dc565b30608483015203925af18015610d2757610ceb578580f35b8411610cfd5750505238808080808580f35b604185917f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b84513d88823e3d90fd5b92975092949093959750863590828216809203610d6e578c816001938293526020808b0135908201520197019201928d9795938d97959392610cb0565b8e80fd5b8b80fd5b8980fd5b8880fd5b919050346104cd57610d8f36610f92565b959091948195610d9f88856112db565b829773ffffffffffffffffffffffffffffffffffffffff91827f000000000000000000000000000000000000000000000000000000000000000016995b818110610ded5760208a8a51908152f35b610df881838a61113a565b358481168091036109205786905b8c858310610e1957505050600101610ddc565b88610e28849e9394888d61113a565b35918d51907f0cfe3642000000000000000000000000000000000000000000000000000000008252858b830152602493848301523060448301528160648160209586945af1918215610ee9578b92610ebb575b50508201809211610e9157509a60010190610e06565b886011897f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b90809250813d8311610ee2575b610ed28183610ffb565b81010312610d7657513880610e7b565b503d610ec8565b8e513d8d823e3d90fd5b84903461012c57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261012c5760209073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b9181601f840112156102465782359167ffffffffffffffff8311610246576020808501948460051b01011161024657565b60407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc8201126102465767ffffffffffffffff916004358381116102465782610fdd91600401610f61565b9390939260243591821161024657610ff791600401610f61565b9091565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761103c57604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b67ffffffffffffffff811161103c57601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b9291926110b18261106b565b916110bf6040519384610ffb565b829481845281830111610246578281602093846000960137010152565b919082519283825260005b8481106111265750507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8460006020809697860101520116010190565b6020818301810151848301820152016110e7565b919081101561114a5760051b0190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90918281527f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83116102465760209260051b809284830137010190565b6060916111eb959373ffffffffffffffffffffffffffffffffffffffff80921683521660208201528160408201520191611179565b90565b9190808252602080920192916000805b83821061120d57505050505090565b9091929394853573ffffffffffffffffffffffffffffffffffffffff81168091036104cd5781528301948301939291600101906111fe565b929061125f906040939695966060865260608601916111ee565b9473ffffffffffffffffffffffffffffffffffffffff809216602085015216910152565b67ffffffffffffffff811161103c5760051b60200190565b805182101561114a5760209160051b010190565b90816020910312610246575173ffffffffffffffffffffffffffffffffffffffff811681036102465790565b90600073ffffffffffffffffffffffffffffffffffffffff91827f000000000000000000000000000000000000000000000000000000000000000016915b818110611327575050505050565b61133281838761113a565b3560409081517f6352211e000000000000000000000000000000000000000000000000000000009283825260049283830152602093602492858185818c5afa90811561145657600091611439575b508933911603611397575050505050600101611319565b8891858992856113a98a8f8d9061113a565b35918451958693849283528a8301525afa91821561142e576044966000936113ff575b505051937f16cece4800000000000000000000000000000000000000000000000000000000855233908501521690820152fd5b61141f929350803d10611427575b6114178183610ffb565b8101906112af565b9086806113cc565b503d61140d565b50513d6000823e3d90fd5b6114509150863d8811611427576114178183610ffb565b38611380565b83513d6000823e3d90fd5b3d1561148c573d906114728261106b565b916114806040519384610ffb565b82523d6000602084013e565b606090565b9192901561150c57508151156114a5575090565b3b156114ae5790565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152fd5b82519091501561151f5750805190602001fd5b61155d906040519182917f08c379a00000000000000000000000000000000000000000000000000000000083526020600484015260248301906110dc565b0390fdfea2646970667358221220c20df1e7102a5f6749af5da7ee9073845a8bf574b4b7e745899404c21facec5d64736f6c63430008180033";

type RewardCollectorV2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RewardCollectorV2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RewardCollectorV2__factory extends ContractFactory {
  constructor(...args: RewardCollectorV2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _router: PromiseOrValue<string>,
    _EQU: PromiseOrValue<string>,
    _EFC: PromiseOrValue<string>,
    _distributor: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RewardCollectorV2> {
    return super.deploy(
      _router,
      _EQU,
      _EFC,
      _distributor,
      overrides || {}
    ) as Promise<RewardCollectorV2>;
  }
  override getDeployTransaction(
    _router: PromiseOrValue<string>,
    _EQU: PromiseOrValue<string>,
    _EFC: PromiseOrValue<string>,
    _distributor: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _router,
      _EQU,
      _EFC,
      _distributor,
      overrides || {}
    );
  }
  override attach(address: string): RewardCollectorV2 {
    return super.attach(address) as RewardCollectorV2;
  }
  override connect(signer: Signer): RewardCollectorV2__factory {
    return super.connect(signer) as RewardCollectorV2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RewardCollectorV2Interface {
    return new utils.Interface(_abi) as RewardCollectorV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RewardCollectorV2 {
    return new Contract(address, _abi, signerOrProvider) as RewardCollectorV2;
  }
}
