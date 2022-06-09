// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract LuuToken is ERC20, Pausable, Ownable {
    constructor() ERC20("LuuToken", "LTK") {}

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override whenNotPaused {
        super._beforeTokenTransfer(from, to, amount);
    }

    function buyLuuTokenByEth() public payable {
        require(msg.value >= 0.0001 ether, "You must pay at least 1 ETH per cupcake");
        _mint(msg.sender, msg.value);
    }

    function withdrawEth() public payable onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }

    function buyLuuTokenByUsdt(uint256 amount) public {
        require(amount > 1);
        IERC20 usdcContract = IERC20(0xD9BA894E0097f8cC2BBc9D24D308b98e36dc6D02);
        usdcContract.transferFrom(msg.sender, address(this), amount);
        _mint(msg.sender, amount);
    }

    function withdrawUsdt(uint256 amount) public onlyOwner {
        IERC20 usdcContract = IERC20(0xD9BA894E0097f8cC2BBc9D24D308b98e36dc6D02);
        usdcContract.transfer(msg.sender, amount);
    }

}
