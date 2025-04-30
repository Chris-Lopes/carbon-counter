// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Marketplace is ReentrancyGuard, Ownable {
    IERC20 public cctToken;
    uint256 public constant INITIAL_TOKEN_AMOUNT = 1000 * 10**18; // 1000 tokens with 18 decimals

    struct Order {
        address seller;
        uint256 amount;
        uint256 price; // Price in wei per token
    }

    Order[] public sellOrders;
    mapping(address => bool) public hasReceivedInitialTokens;

    event OrderCreated(uint256 orderId, address seller, uint256 amount, uint256 price);
    event OrderFulfilled(uint256 orderId, address buyer, address seller, uint256 amount, uint256 price);
    event OrderCancelled(uint256 orderId);
    event InitialTokensDistributed(address recipient, uint256 amount);

    constructor(address _tokenAddress) {
        cctToken = IERC20(_tokenAddress);
    }

    function createSellOrder(uint256 amount, uint256 pricePerToken) external nonReentrant {
        require(amount > 0, "Amount must be greater than 0");
        require(pricePerToken > 0, "Price must be greater than 0");
        require(cctToken.balanceOf(msg.sender) >= amount, "Insufficient token balance");
        require(cctToken.allowance(msg.sender, address(this)) >= amount, "Token allowance too low");

        cctToken.transferFrom(msg.sender, address(this), amount);
        
        sellOrders.push(Order({
            seller: msg.sender,
            amount: amount,
            price: pricePerToken
        }));

        emit OrderCreated(sellOrders.length - 1, msg.sender, amount, pricePerToken);
    }

    function fulfillOrder(uint256 orderId) external payable nonReentrant {
        require(orderId < sellOrders.length, "Invalid order ID");
        Order storage order = sellOrders[orderId];
        require(order.amount > 0, "Order already fulfilled");
        require(msg.value == order.amount * order.price / 1e18, "Incorrect ETH amount");

        uint256 amount = order.amount;
        address seller = order.seller;
        uint256 price = order.price;

        // Clear the order
        order.amount = 0;

        // Transfer tokens to buyer
        cctToken.transfer(msg.sender, amount);

        // Transfer ETH to seller
        (bool sent, ) = payable(seller).call{value: msg.value}("");
        require(sent, "Failed to send ETH to seller");

        emit OrderFulfilled(orderId, msg.sender, seller, amount, price);
    }

    function cancelOrder(uint256 orderId) external nonReentrant {
        require(orderId < sellOrders.length, "Invalid order ID");
        Order storage order = sellOrders[orderId];
        require(order.seller == msg.sender, "Not the seller");
        require(order.amount > 0, "Order already fulfilled or cancelled");

        uint256 amount = order.amount;
        order.amount = 0;

        cctToken.transfer(msg.sender, amount);
        emit OrderCancelled(orderId);
    }

    function claimInitialTokens() external nonReentrant {
        require(!hasReceivedInitialTokens[msg.sender], "Already claimed initial tokens");
        require(cctToken.balanceOf(address(this)) >= INITIAL_TOKEN_AMOUNT, "Insufficient tokens in contract");

        hasReceivedInitialTokens[msg.sender] = true;
        cctToken.transfer(msg.sender, INITIAL_TOKEN_AMOUNT);
        
        emit InitialTokensDistributed(msg.sender, INITIAL_TOKEN_AMOUNT);
    }

    function getSellOrders() external view returns (Order[] memory) {
        return sellOrders;
    }
} 