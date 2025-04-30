// contracts/CarbonCreditToken.sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";contract CarbonCreditToken is ERC20Capped, ERC20Burnable, Ownable {
    uint256 public constant INITIAL_SUPPLY = 1000000 * 10**18; // 1 million tokens
    address public marketplaceAddress;
    bool private _destroyed;

    constructor(uint256 cap) ERC20("CarbonCreditToken", "CCT") ERC20Capped(cap * (10 ** decimals())) Ownable() {
        _mint(msg.sender, INITIAL_SUPPLY);
    }

    function _mint(address account, uint256 amount) internal virtual override(ERC20, ERC20Capped) {
        super._mint(account, amount);
    }

    function destroy() public onlyOwner {
        require(!_destroyed, "Contract already destroyed");
        _destroyed = true;
        (bool success, ) = payable(owner()).call{value: address(this).balance}("");
        require(success, "Transfer failed");
    }

    function setMarketplace(address _marketplaceAddress) external onlyOwner {
        require(_marketplaceAddress != address(0), "Invalid marketplace address");
        marketplaceAddress = _marketplaceAddress;
        
        // Transfer tokens to marketplace for initial distribution
        uint256 marketplaceSupply = (INITIAL_SUPPLY * 20) / 100; // 20% of total supply
        _transfer(msg.sender, _marketplaceAddress, marketplaceSupply);
    }

    // Optional: Add minting capability for future token distribution
    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }
}