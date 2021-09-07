pragma solidity 0.6.1;

import "./ERC20.sol";
import "./ERC20Detailed.sol";
import "./ERC20Mintable.sol";

// contract MyToken is ERC20, ERC20Detailed, ER20Mintable {
//     constructor(uint256 initialSupply) ERC20Detailed("StarDucks Cappucino Token", "CAPPU", 0) public {
//         _mint(msg.sender, initialSupply);
//     }
// }

contract MyToken is ERC20, ERC20Detailed, ERC20Mintable {
    constructor(uint256 initialSupply) ERC20Detailed("StarDucks Cappucino Token", "CAPPU", 0) public {
        _mint(msg.sender, initialSupply);
    }
}