import React, { Component } from 'react';
import Logo from './000.png';
import classes from './Main.module.css';

class Main extends Component {
  
  render() {
    return (
      <div className={classes.Wrapper}>
        <div className={classes.Card}>
          <img src={Logo} className="c_img" alt="Logo" height="300" width="600" />
          <h1 className={classes.Te}>Submit your Request for Beneficial Scheme</h1>
          <form onSubmit={(event) => {
            event.preventDefault();
            const name = this.productName.value;
            const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether');
            this.props.createProduct(name, price);
          }}>
            <div>
              <small className={classes.Textboxcontainer}><b style={{ color: 'white', fontSize: '15px' }}>Farmar ID:  </b>
 <span  style={{ color: 'white', fontSize: '15px' }} id="account">{this.props.account.substring(0,10)}</span></small>
              <div className={classes.Textboxcontainer}>
                <input
                  id="productName"
                  type="text"
                  ref={(input) => { this.productName = input }}
                  className={classes.Centeredtextbox}
                  placeholder="Farmer Name"
                  required />
              </div>
              <div className={classes.Textboxcontainer}>
                <input
                  id="productPrice"
                  type="text"
                  ref={(input) => { this.productPrice = input }}
                  className={classes.Centeredtextbox}
                  placeholder="Land in Acres"
                  required />
              </div>
              <div className={classes.Textboxcontainer}>
                <input
                  id="address"
                  type="text"
                  ref={(input) => { this.productAddress = input }}
                  className={classes.Centeredtextbox}
                  placeholder="Land Address"
                  required />
              </div>
            </div>
            <div className={classes.Textboxcontainer}>
              <button type="submit" className={classes.Cbutton}>Request</button>
            </div>
          </form>
          <p>&nbsp;</p>
        </div>
      </div>
    );
  }
}
      
export default Main;
