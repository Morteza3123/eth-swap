const Token = artifacts.require("Token");
const EthSwap = artifacts.require("EthSwap");

require('chai')
    .use(require('chai-as-promised'))
    .should()

    function tokens(n) {
        return new web3.utils.toWei(n, 'ether');
    }

contract('EthSwap', (accounts)=>{
    let token, ethSwap

    before(async () => {
        token = await Token.new()
        ethSwap = await EthSwap.new(token.address)
        await token.transfer(ethSwap.address, tokens('1000000000')) 
    })

    describe('Token deployment', async () => {
        it('contract has a name', async () => {
            const name = await token.name()
            assert.equal(name, 'Dapp Token')
        })
    })

    describe('EthSwap deployment', async () => {
        it('contract has a name', async () => {
            const name = await ethSwap.name()
            assert.equal(name, 'EthSwap Instant Exchange')
        })
        it('contract has tokens', async () => {
           let balance = await token.balanceOf(ethSwap.address)
            assert.equal(balance.toString(),'1000000000')
        })
    })
})