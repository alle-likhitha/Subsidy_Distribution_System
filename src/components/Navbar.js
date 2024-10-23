import React, { Component } from 'react';
import classes from './Toolbar.module.css';
import {Link} from 'react-router-dom';


class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <div className={classes.Toolbar}>

       
        <h1 >
          Transparent Subsidy Distribution Systems
        </h1>
            {/* <small className="text-white"><b>FARMER ID:</b>  <span id="account">{this.props.account}</span></small> */}
        </div>
        <div  className={classes.Toolbar}>
        <Link to="/auth">
          <button className={classes.Cbutton} >
            Admin Login
          </button> </Link>
          <Link to="/">
          <button className={classes.Cbutton} >
            Home
          </button> </Link>
          <Link to="/authuser">
          <button className={classes.Cbutton}>
            User Login
          </button></Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
