import React from "react";
import '../styles/Header.css'

const Header = () => {
  return (
    <div>
      <h1 className="head-text">
        NODE<span className="span-text">SHARK</span>
      </h1>
      <div className="btn-container">
        <button className="button">Connect your Nami Wallet</button>
        <button className="button">Connect your Nami Wallet</button>
        <button className="button-other">Connect other Wallets...</button>
      </div>
    </div>
  );
};

export default Header;
