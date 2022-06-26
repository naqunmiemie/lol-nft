// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract LuuToken is Initializable, ERC20Upgradeable, PausableUpgradeable, OwnableUpgradeable, UUPSUpgradeable {
    function initialize() public initializer {
        __ERC20_init("LuuToken", "LTK");
        __Pausable_init();
        __Ownable_init();
        __UUPSUpgradeable_init();
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

    function withdrawUsdt(uint256 amount) public onlyOwner {
        IERC20 usdcContract = IERC20(0xD9BA894E0097f8cC2BBc9D24D308b98e36dc6D02);
        usdcContract.transfer(msg.sender, amount);
    }

    //internal
    //internal
    //internal
    function _authorizeUpgrade(address newImplementation) internal virtual override {}

    //public
    //public
    //public
    function buyLuuTokenByEth() public payable {
        require(msg.value >= 0.0001 ether, "You must pay at least 0.0001 eth");
        _mint(msg.sender, msg.value);
    }

    function buyLuuTokenByUsdt(uint256 amount) public {
        require(amount > 1, "You must pay at least 1 Usdt");
        IERC20 usdcContract = IERC20(0xD9BA894E0097f8cC2BBc9D24D308b98e36dc6D02);
        usdcContract.transferFrom(msg.sender, address(this), amount);
        _mint(msg.sender, amount);
    }
}
