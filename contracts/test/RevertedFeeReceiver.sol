// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.8.24;

contract RevertedFeeReceiver {
    receive() external payable {
        revert("Reverted");
    }
}
