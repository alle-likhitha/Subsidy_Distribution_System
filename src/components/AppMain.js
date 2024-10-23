import React, { Component } from 'react';
import Web3 from 'web3';
import './App.css';
import Marketplace from '../abis/Marketplace.json';
import Navbar from './Navbar';
import Main from './Main';
import AdminDashboard from './AdminDashboard';

class AppMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: '',
      productCount: 0,
      products: [],
      loading: true,
      isAdmin: false, // Initialize the toggle state
    };

    this.createProduct = this.createProduct.bind(this);
    this.purchaseProduct = this.purchaseProduct.bind(this);
    this.toggleView = this.toggleView.bind(this); // Bind the toggle function
  }

  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    const networkId = await web3.eth.net.getId();
    const networkData = Marketplace.networks[networkId];

    if (networkData) {
      const marketplace = web3.eth.Contract(Marketplace.abi, networkData.address);
      this.setState({ marketplace });
      const productCount = await marketplace.methods.productCount().call();
      this.setState({ productCount });
      
      // Load products
      for (var i = 1; i <= productCount; i++) {
        const product = await marketplace.methods.products(i).call();
        this.setState((prevState) => ({
          products: [...prevState.products, product],
        }));
      }
      this.setState({ loading: false });
    } else {
      window.alert('Marketplace contract not deployed to detected network.');
    }
  }

  createProduct(name, price) {
    this.state.marketplace.methods.createProduct(name, price).send({ from: this.state.account })
      .once('receipt', (receipt) => {
        this.setState({ loading: false });
      })
      .on('error', (error) => {
        this.setState({ loading: false });
        console.error("Error:", error);
      });
  }

  purchaseProduct(id, price) {
    this.setState({ loading: true });
    this.state.marketplace.methods.purchaseProduct(id).send({ from: this.state.account, value: price })
      .once('receipt', (receipt) => {
        this.setState({ loading: false });
      })
      .on('error', (error) => {
        this.setState({ loading: false });
        console.error("Error:", error);
      });
  }

  toggleView() {
    this.setState((prevState) => ({ isAdmin: !prevState.isAdmin }));
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Navbar account={this.state.account} />

        <div className="container-fluid">
          <div className="row">
            <main role="main">
             
              {this.state.isAdmin ? (
                <AdminDashboard 
                  products={this.state.products}
                  createProduct={this.createProduct}
                  purchaseProduct={this.purchaseProduct}
                />
              ) : (
                <Main
                  products={this.state.products}
                  account={this.state.account}
                  createProduct={this.createProduct}
                  purchaseProduct={this.purchaseProduct}
                />
              )}

              <button onClick={this.toggleView} className="toggle-button">
                Switch to {this.state.isAdmin ? 'User' : 'Admin'}
              </button>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default AppMain;
