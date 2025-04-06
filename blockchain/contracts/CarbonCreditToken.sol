// contracts/CarbonCreditToken.sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract CarbonCreditToken is ERC20Capped, ERC20Burnable {
    address payable public owner;
    bool private _destroyed;

    constructor(uint256 cap) ERC20("CarbonCreditToken", "CCT") ERC20Capped(cap * (10 ** decimals())) {
        owner = payable(msg.sender);
        _mint(owner, 70000000 * (10 ** decimals()));
    }

    function _update(address from, address to, uint256 value) internal virtual override(ERC20, ERC20Capped) {
        super._update(from, to, value);
    }

    function destroy() public onlyOwner {
        require(!_destroyed, "Contract already destroyed");
        _destroyed = true;
        (bool success, ) = owner.call{value: address(this).balance}("");
        require(success, "Transfer failed");
    }

    modifier onlyOwner {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }
}