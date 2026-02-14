// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/**
 * @title SimpleStorage
 * @dev A simple storage contract for storing and retrieving a value with event logging
 */
contract SimpleStorage {
    uint256 private storedValue;
    address public lastUpdater;
    uint256 public updateCount;

    event ValueChanged(uint256 indexed newValue, address indexed updater, uint256 timestamp);

    /**
     * @dev Store a new value
     * @param _value The value to store
     */
    function setValue(uint256 _value) public {
        storedValue = _value;
        lastUpdater = msg.sender;
        updateCount++;
        emit ValueChanged(_value, msg.sender, block.timestamp);
    }

    /**
     * @dev Retrieve the stored value
     * @return The currently stored value
     */
    function getValue() public view returns (uint256) {
        return storedValue;
    }

    /**
     * @dev Get contract statistics
     * @return value The current stored value
     * @return updater The address that last updated the value
     * @return count Total number of updates
     */
    function getStats() public view returns (uint256 value, address updater, uint256 count) {
        return (storedValue, lastUpdater, updateCount);
    }
}
