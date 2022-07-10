// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721URIStorageUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/CountersUpgradeable.sol";
import "./LuuToken.sol";

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

    CountersUpgradeable.Counter private _tokenIdCounter;

    function initialize() public initializer {
        __ERC721_init("ChampionNFT", "ChampionNFT");
        __ERC721URIStorage_init();
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

    function safeMint(address to, string memory uri) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    function mintToContract(string memory uri) external onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _mint(address(this), tokenId);
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

    function luckyDraw(
        uint256 deadline,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) public {
        uint256 amount = 10**18;
        address luuTokenAddr = 0x709fE432BA5f1c848639A18bD6a4a83CaF6CEbBd;
        LuuToken luuToken = LuuToken(luuTokenAddr);
        luuToken.permit(msg.sender, luuTokenAddr, amount, deadline, v, r, s);
        require(luuToken.transferFrom(msg.sender, luuTokenAddr, amount), "Transfer from error");
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

        uint256[] memory tokenIds = getOwnerTokenIds(address(this));
        uint256 id = tokenIds[seed % tokenIds.length];
        transferFrom(address(this), msg.sender, id);
    }
}
