import React, { Component } from 'react';
import tokenLogo from '../logo.png';
import ethLogo from '../download.jpg';
// import './ui.css';


class BuyForm extends Component {
    constructor(props){
        super(props)
        this.state ={
            output : '0'
        }
    }


  render(){
  return (
    <form className="mb-3" onSubmit={(event) => {
        event.preventDefault()
        let etherAmount
        etherAmount = this.input.value.toString()
        etherAmount =  window.web3.utils.toWei(etherAmount, 'Ether')
        this.props.buyTokens(etherAmount)
    }}>
        <div>
            <label className="float-start"><b>Input</b></label>
            <label className="float-end" >
             Balance : {window.web3.utils.fromWei(this.props.ethBalance, 'Ether')}
            </label>
        
        </div>
        <div className="input-group mb-4">
            <input
                type="text"
                onChange={(event) => {
                const etherAmount = this.input.value.toString()
                this.setState({
                output : etherAmount*100
                })
                }}
                ref={(input) => { this.input = input}}
                className="form-control form-control-lg"
                placeholder="0"
                required />
            <div className="input-group-append">
                    <div className="input-group-text">
                        <img src={ethLogo} height='32' alt=""/>
                        &nbsp;&nbsp;&nbsp; ETH
                    </div>
                </div>
        </div>
        <label className="float-start"><b>Output</b></label>
        
        
        <span className="float-end">
                Balance: {window.web3.utils.fromWei(this.props.tokenBalance, 'Ether')}
        </span>
        
        
        <div className="input-group mb2">
            <input
                type="text"
                className="form-control form-control-lg"
                placeholder="0"
                value={this.state.output}
                disabled
            />
            <div className="input-group-append">
                <div className="input-group-text">
                    <img src={tokenLogo} height='32' alt=""/>
                    &nbsp; Dapp
                </div>
            </div>
        </div>
        <div className="mb-5">
            <span className="float-start">Exchange Rate</span>
            <span className="float-end">
                1ETH = 100 Dapp</span>
        </div>
        <div className="d-grid gap-2">
        <button type="submit" className="btn btn-primary">SWAP!</button>
        </div>
    </form>
    
  )
}
}

export default BuyForm;

