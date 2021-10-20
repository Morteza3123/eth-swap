import React, { component } from 'react';
import Web3 from 'web3';
import { Component } from 'react';


import './App.css';



class App extends React.Component {

  async componentWillMount(){
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = window.web3;

    const accounts = await web3.eth.getAccounts();
    this.setState({ account : accounts[0]})
    console.log(accounts[0]);
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
        account:''
      }
    }
  render(){
  return (
    <div>
      <nav className="navbar navbar-dark fixed-top bg-dark fix-md-norap p-0 shadow">
        <a
        className='navbar-brand col-sm3 col-md-2 mr-0'
        href='http://localhost:3000/'
        >
          ETH-SWAP
        </a>
      </nav>
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
