import React, { Component } from 'react';
import './ui.css';


class Main extends Component {


  render(){
  return (
    <div id = 'content'>
        <div className="card mb-4">
            <div className="card-body">
                <form className="mb-3">
                    <div>
                        <label className="float-left"><b>Input</b></label>
                        <span className="float-right text-muted">
                            Balance : 0
                        </span>
                    </div>
                    <div className="input-group mb-4">
                        <input
                           type="text"
                           className="form-control form-control-lg"
                           placeholder="0"
                           required />
                           <div className="input-group-append">
                               <div className="input-group-text">
                                   <img src="" height='32' alt=""/>
                                   &nbsp;&nbsp;&nbsp; ETH
                               </div>
                           </div>
                    </div>
                    <div label className="float-left"><b>Output</b>
                    <span className="float-right text-muted">
                        Balance: 0
                    </span>
                    </div>
                    <div className="input-group mb2">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="0"
                            disabled
                        />
                        <div className="input-group-append">
                            <div className="input-group-text">
                                <img src="" height='32' alt=""/>
                                &nbsp; Dapp
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <span className="float-left text-muted">Exchange Rate</span>
                        <span className="floated-right text-muted">1ETH = 100 Dapp</span>
                    </div>
                    <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">SWAP!</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
  );
}
}

export default Main;
