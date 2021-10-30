
import Web3 from 'web3';
import { Component } from 'react';
import Navbar from './components/Navbar';
import Main from './Main';
import EthSwap from './contract/EthSwap.json';
import Token from './contract/Token.json';


class App extends Component {

  async componentWillMount(){
    await this.loadWeb3()
    await this.loadBlockchainData()
    console.log(this.state.ethSwap)
  }

  async loadBlockchainData() {
    const web3 = window.web3;

    

    const accounts = await web3.eth.getAccounts();
    this.setState({ account : accounts[0]})
    

    const ethBalance = await web3.eth.getBalance(this.state.account);
    this.setState({ethBalance });

    //load Token
    const networkId = await web3.eth.net.getId()
    const tokenData = Token.networks[networkId]
    if(tokenData){
      const token = new web3.eth.Contract(Token.abi, tokenData.address);
      this.setState({token})
      this.setState({ tokenAddress : tokenData.address})
      let tokenBalance = await token.methods.balanceOf(this.state.account).call()
      let contractBalance = await token.methods.balanceOf(tokenData.address).call()
      console.log("token balance", contractBalance.toString())
      this.setState({tokenBalance: tokenBalance.toString()})
    }else{
      window.alert('Token contract not deployed to detected network')
    }
    
    //load EthSwap
    const ethSwapData = EthSwap.networks[networkId]
    if(ethSwapData){
      const ethSwap = new web3.eth.Contract(EthSwap.abi, ethSwapData.address);
      this.setState({ethSwap})
      this.setState({ ethSwapAddress : ethSwapData.address})
      
    }else{
      window.alert('Token contract not deployed to detected network')
    }
    this.setState({ loading : false })
  }

  //load web3
  async loadWeb3(){
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
    
  }

  //buy tokens function
  buyTokens = async (etherAmount) => {
    this.setState({ loading: true})
    await this.state.ethSwap.methods.buyTokens().send({ value: etherAmount, from: this.state.account}).on('transactionHash', (hash) => {
      this.setState({ loading : false})
    })
  }

  //sell tokens function
  sellTokens = async (tokenAmount) => {
    this.setState({ loading: true})
     await this.state.token.methods.approve(this.state.ethSwapAddress, tokenAmount).send({from: this.state.account}).on('transactionHash', (hash) => {
      this.state.ethSwap.methods.sellToken(tokenAmount).send({from: this.state.account}).on('transactionHash', (hash) => {
      this.setState({ loading : false})
      })
    })
  }

  

    constructor(props) {
      super(props)
      this.state = {
        account:'',
        token: {},
        ethSwap: {},
        ethBalance: '0',
        tokenBalance: '0',
        tokenAddress:'',
        ethSwapAddress:'',
        loading: true
      }
      
    }
  render(){
    
    let content
    
    if(this.state.loading) {
      content = <p id="leader" className="text-center">Loading ...</p>
    } else {
      content = <Main 
      ethBalance={this.state.ethBalance}  
      tokenBalance={this.state.tokenBalance}
      buyTokens={this.buyTokens} 
      sellTokens={this.sellTokens}
      />
    }
  return (
    <div >
      <Navbar account={this.state.account} />
    <div className="container fluid mt-5 ">
      <div className='row justify-content-center'>
      
        <main role='main' className='col-lg-12 ml-auto mr-auto' style={{maxWidth: '600px'}}> 
          <div className='content mr-auto ml-auto'>

              {content}
          </div>
        </main>
      </div>
      </div>
    </div>
  
  );
}
}

export default App;
