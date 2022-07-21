// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./LuuToken.sol";
import "./ChampionNFT.sol";

contract LuuTokenV2 is LuuToken {
    address championAddr;

    function initializeV2() public reinitializer(2) {
        championAddr = 0xa98208A975808FD6aa1585179a0861d357f19142;
    }

    function luckyDraw() public whenNotPaused {
        uint256[] memory tokenIds = ChampionNFT(championAddr).getOwnerTokenIds(address(this));
        require(tokenIds.length > 0, "Prize pool is empty");
        require(transfer(address(this), 10**18), "Transfer from error");
        //随机数存在风险
        uint256 seed = uint256(
            keccak256(
                abi.encodePacked(
                    (block.timestamp) +
                        (block.difficulty) +
                        ((uint256(keccak256(abi.encodePacked(block.coinbase)))) / (block.timestamp)) +
                        (block.gaslimit) +
                        ((uint256(keccak256(abi.encodePacked(msg.sender)))) / (block.timestamp)) +
                        (block.number)
                )
            )
        );
        uint256 id = tokenIds[seed % tokenIds.length];
        ChampionNFT(championAddr).transferFrom(address(this), msg.sender, id);
    }

    function buyChampionNFT(uint256 id) public whenNotPaused {
        ChampionNFT championContract = ChampionNFT(championAddr);
        address owner = championContract.ownerOf(id);
        require(transfer(owner, championContract.getPrizeById(id)));
        championContract.transferFrom(owner, msg.sender, id);
        championContract.updateTransactionCenterIds();
    }
}
