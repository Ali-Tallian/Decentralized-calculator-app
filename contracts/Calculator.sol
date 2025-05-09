// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Calculator {
    int256 public result;

    function add(int256 a, int256 b) public returns (int256) {
        result = a + b;
        return result;
    }

    function subtract(int256 a, int256 b) public returns (int256) {
        result = a - b;
        return result;
    }

    function multiply(int256 a, int256 b) public returns (int256) {
        result = a * b;
        return result;
    }

    function divide(int256 a, int256 b) public returns (int256) {
        require(b != 0, "Cannot divide by zero");
        result = a / b;
        return result;
    }
}
