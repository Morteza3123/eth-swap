pragma solidity >=0.5.0 <0.9.0;

import './Token.sol';

contract EthSwap {
    string public name = "EthSwap Instant Exchange";
    Token public token;
    uint public rate = 100;

    event TokenPurchaced(
        address Account,
        address Token,
        uint amount,
        uint rate
    );

    event TokenSold(
        address Account,
        address Token,
        uint amount,
        uint rate
    );

    constructor(Token _token) public {
        token = _token;
    }


    function buyTokens() public payable{
        uint tokenAmount = msg.value * rate;

        require(token.balanceOf(address(this)) >= tokenAmount);
        token.transfer(msg.sender, tokenAmount);

        emit TokenPurchaced(msg.sender, address(token), tokenAmount, rate);
    }

    function sellToken(uint _amount) public {
        uint etherAmount = _amount / rate;

        require(address(this).balance >= etherAmount);
        require(token.balanceOf(msg.sender) >= _amount);

        token.TransferFrom(msg.sender, address(this), _amount);
        msg.sender.transfer(etherAmount);

        emit TokenSold(msg.sender, address(token), _amount, rate);
    }
}