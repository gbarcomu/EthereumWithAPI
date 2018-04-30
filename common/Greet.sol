pragma solidity ^0.4.19;

contract Greet {

    string greeting;

    function Greet() public {
        greeting = "Hi stranger";
    }

    function getGreet() public view returns (string) {
        return greeting;
    }
    
    function setGreet(string newGreet) public {
        greeting = newGreet;
    }
}