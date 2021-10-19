import react, { component } from 'react';
import Web3 from 'web3';
import { Component } from 'react';


import './App.css';



class App extends Component {

  loadWeb3(){
    
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

              <h1 class>Hello World</h1>
          </div>
        </main>
      </div>
      
    </div>
    </div>
  );
}
}

export default App;
