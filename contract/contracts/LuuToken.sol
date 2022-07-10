// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/draft-ERC20PermitUpgradeable.sol";

contract LuuToken is
    Initializable,
    ERC20Upgradeable,
    PausableUpgradeable,
    OwnableUpgradeable,
    ERC20PermitUpgradeable,
    UUPSUpgradeable
{
    AggregatorV3Interface internal priceEthFeed;

    function initialize() public initializer {
        __ERC20_init("LuuToken", "LTK");
        __Pausable_init();
        __Ownable_init();
        __UUPSUpgradeable_init();
        __ERC20Permit_init("LuuToken");
        /**
         * Network: Rinkeby
         * Aggregator: ETH/USD
         * Address: 0x8A753747A1Fa494EC906cE90E9f37563A8AF630e
         */
        priceEthFeed = AggregatorV3Interface(0x8A753747A1Fa494EC906cE90E9f37563A8AF630e);
    }

    //onlyOwner
    //onlyOwner
    //onlyOwner
    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function withdrawEth() public payable onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }

    function withdrawUsdt() public onlyOwner {
        IERC20 usdtContract = IERC20(0xD9BA894E0097f8cC2BBc9D24D308b98e36dc6D02);
        usdtContract.transfer(msg.sender, usdtContract.balanceOf(address(this)));
    }

    //internal
    //internal
    //internal
    function _authorizeUpgrade(address newImplementation) internal virtual override {}

    //public
    //public
    //public

    /**
     * Returns the latest price
     */
    function getLatestPrice() public view returns (int256) {
        (, int256 price, , , ) = priceEthFeed.latestRoundData();
        return price;
    }

    function buyLuuTokenByEth() public payable whenNotPaused {
        require(msg.value >= 0.0001 ether, "You must pay at least 0.0001 eth");
        int256 price = getLatestPrice();
        require(price > 0, "Eth price error");
        uint256 amount = (msg.value * uint256(price)) / (10**8);
        _mint(msg.sender, amount);
    }

    function buyLuuTokenByUsdt(uint256 amount) public whenNotPaused {
        require(amount > 1, "You must pay at least 1 Usdt");
        IERC20 usdcContract = IERC20(0xD9BA894E0097f8cC2BBc9D24D308b98e36dc6D02);
        usdcContract.transferFrom(msg.sender, address(this), amount);
        _mint(msg.sender, amount);
    }
}
