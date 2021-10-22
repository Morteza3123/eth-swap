import React, { component } from 'react';
import Web3 from 'web3';
import { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import EthSwap from '../build/contracts/EthSwap.json';
import Token from '../build/contracts/Token.json';


class App extends Component {

  async componentWillMount(){
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = window.web3;

    const accounts = await web3.eth.getAccounts();
    this.setState({ account : accounts[0]})
    console.log(this.state.account);

    const ethBalance = await web3.eth.getBalance(this.state.account);
    this.setState({ethBalance });

    const abi = Token.abi;
    const address= Token.networks['5777'].address;
    const token = new web3.eth.Contract(abi, address);
    console.log(token)


  }


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

    constructor(props) {
      super(props)
      this.state = {
        account:'',
        ethBalance: '0'
      }
    }
  render(){
  return (
    <div>
      <Navbar account={this.state.account} />
    <div className="container fluid mt-5">
      <div className='row'>
        <main role='main' className='col-lg-12 d-flex text-center'>
          <div className='content mr-auto ml-auto'>

              <h1 >Hello World</h1>
          </div>
        </main>
      </div>
      
    </div>
    </div>
  );
}
}

export default App;
