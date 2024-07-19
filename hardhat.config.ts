import "./scripts/tasks/run";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-solhint";
import "hardhat-contract-sizer";
import "dotenv/config";

const config: HardhatUserConfig = {
    mocha: {
        timeout: 400000,
    },
    solidity: {
        compilers: [
            {
                version: "0.8.24",
                settings: {
                    evmVersion: "paris",
                    viaIR: true,
                    optimizer: {
                        enabled: true,
                        runs: 1e8,
                    },
                },
            },
        ],
        overrides: {
            "contracts/core/Pool.sol": {
                version: "0.8.24",
                settings: {
                    evmVersion: "paris",
                    viaIR: true,
                    optimizer: {
                        enabled: true,
                        runs: 400,
                    },
                },
            },
            "contracts/plugins/PositionRouter.sol": {
                version: "0.8.24",
                settings: {
                    evmVersion: "paris",
                    viaIR: true,
                    optimizer: {
                        enabled: true,
                        runs: 20_000,
                    },
                },
            },
        },
    },
    networks: {
        hardhat: {
            allowUnlimitedContractSize: false,
        },
        "avalanche-fuji": {
            url: "https://api.avax-test.network/ext/bc/C/rpc",
            chainId: 43113,
            accounts: [`${process.env.PRIVATE_KEY}`],
        },
        "avalanche-mainnet": {
            url: "https://api.avax.network/ext/bc/C/rpc",
            chainId: 43114,
            accounts: [`${process.env.PRIVATE_KEY}`],
        },
        "arbitrum-goerli": {
            url: "https://arbitrum-goerli.public.blastapi.io",
            chainId: 421613,
            accounts: [`${process.env.PRIVATE_KEY}`],
        },
        "arbitrum-sepolia": {
            url: "https://sepolia-rollup.arbitrum.io/rpc",
            chainId: 421614,
            accounts: [`${process.env.PRIVATE_KEY}`],
        },
        "arbitrum-mainnet": {
            url: "https://rpc.arb1.arbitrum.gateway.fm",
            chainId: 42161,
            accounts: [`${process.env.PRIVATE_KEY}`],
        },
        "b2testnet": {
            url: "https://b2-testnet.alt.technology",
            chainId: 1123,
            accounts: [`${process.env.PRIVATE_KEY}`],
            gasPrice: 1000000000, // 1 Gwei
            gasMultiplier: 2
        },
    },
    etherscan: {
        apiKey: {
            arbitrumGoerli: `${process.env.ARBISCAN_API_KEY}`,
            arbitrumOne: `${process.env.ARBISCAN_API_KEY}`,
            b2testnet: `${process.env.B2TEST_NET_API_KEY}`,
        },
        customChains: [
            {
                network: "b2testnet",
                chainId: 1123,
                urls: {
                    apiURL: "https://bsquared-testnet.l2scan.co/api",
                    browserURL: "https://bsquared-testnet.l2scan.co/"
                },
            },
        ],
    },
};

export default config;
