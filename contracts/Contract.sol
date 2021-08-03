//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";


contract Contract {
  uint public x = 100 - 50;

  function increment() external {
        x+=1;
    }


}
