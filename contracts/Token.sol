// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.5.0 <0.9.0;

contract Token {
    string public name="Dapp token" ;
    string public symbol= "Dapp";
    uint256 public decimal=18;
    uint256 public totalSupply=1000000*10**18 ;
    
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance ;
    
    event Transfer(address indexed from, address indexed to, uint256 _value);
    event Approval(address indexed owner, address indexed spender, uint256 val);
    
    constructor() public {
        balanceOf[msg.sender]=totalSupply;
    }
    
    function transfer(address _to, uint256 _value) external returns (bool success) {
        require(balanceOf[msg.sender] >= _value);
        // require( _to != 0 , 'reciever doesent exist' );
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
       emit Transfer(msg.sender, _to, _value);
               return true;
    } 
    
    
    function approve(address _spender, uint256 _value) external returns(bool){
        require(_spender != address(0));
        allowance[msg.sender][_spender] = _value; 
        emit Approval(msg.sender, _spender, _value);
        return true;
    }
    
    function TransferFrom(address _from, address _to, uint _value) public returns(bool){
        require(balanceOf[_from] >= _value, "you dont allow to transfer");
        require(allowance[_from][msg.sender] >= _value);
        allowance[_from][msg.sender] -= _value;
        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;
        return true;
    }
    
}