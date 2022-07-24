// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721URIStorageUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/CountersUpgradeable.sol";

contract ChampionNFT is
    Initializable,
    ERC721Upgradeable,
    ERC721URIStorageUpgradeable,
    PausableUpgradeable,
    OwnableUpgradeable,
    UUPSUpgradeable
{
    using CountersUpgradeable for CountersUpgradeable.Counter;
    mapping(address => uint256[]) private _ownerTokenIds;
    address luuTokenAddr;
    CountersUpgradeable.Counter private _tokenIdCounter;
    uint256[] public transactionCenterIds;
    mapping(uint256 => uint256) public prizeById;

    function initialize() public initializer {
        __ERC721_init("ChampionNFT", "ChampionNFT");
        __ERC721URIStorage_init();
        __Pausable_init();
        __Ownable_init();
        __UUPSUpgradeable_init();
        luuTokenAddr = 0x41085b0E0042C51eFB0A6b13EB04B6C744Cd3184;
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

    function safeMint(address to, string memory uri) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    function mintToContract(string memory uri) external onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _mint(luuTokenAddr, tokenId);
        _setTokenURI(tokenId, uri);
    }

    //internal
    //internal
    //internal
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override whenNotPaused {
        super._beforeTokenTransfer(from, to, tokenId);

        //维护_ownerTokenIds
        if (from != address(0) && from != to) {
            uint256 balance = balanceOf(from);
            uint256[] storage tokenIds = _ownerTokenIds[from];
            for (uint256 i = 0; i < balance; ++i) {
                if (tokenIds[i] == tokenId) {
                    if (i != balance - 1) {
                        tokenIds[i] = tokenIds[balance - 1];
                    }
                    tokenIds.pop();
                    break;
                }
            }
        }
        if (to != address(0) && to != from) {
            _ownerTokenIds[to].push(tokenId);
        }
    }

    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}

    function _burn(uint256 tokenId) internal override(ERC721Upgradeable, ERC721URIStorageUpgradeable) {
        super._burn(tokenId);
    }

    //public
    //public
    //public
    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721Upgradeable, ERC721URIStorageUpgradeable)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function getOwnerTokenIds(address addr) public view returns (uint256[] memory) {
        return _ownerTokenIds[addr];
    }

    function getTransactionCenterIds() public view returns (uint256[] memory) {
        return transactionCenterIds;
    }

    function getPrizeById(uint256 id) public view returns (uint256) {
        return prizeById[id];
    }

    function sellChampionNFT(uint256 id, uint256 prize) public whenNotPaused {
        approve(luuTokenAddr, id);
        if (transactionCenterIds.length == 0) {
            transactionCenterIds.push(id);
        } else {
            for (uint256 index = 0; index < transactionCenterIds.length; ++index) {
                if (transactionCenterIds[index] == id) {
                    break;
                }
                if (index == transactionCenterIds.length - 1) {
                    transactionCenterIds.push(id);
                }
            }
        }
        prizeById[id] = prize;
    }

    function updateTransactionCenterIds() public whenNotPaused {
        uint256 len = transactionCenterIds.length;
        uint256 i = 0;
        while (i < len) {
            if (getApproved(transactionCenterIds[i]) != luuTokenAddr) {
                transactionCenterIds[i] = transactionCenterIds[len - 1];
                transactionCenterIds.pop();
                --len;
            } else {
                ++i;
            }
        }
    }
}
