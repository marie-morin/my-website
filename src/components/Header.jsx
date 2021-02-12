import React from "react";
import "../styles/Header.scss";

function Header({ children }) {
  return (
    <header className="header">
      <div className="container">
        <img src="https://via.placeholder.com/30" alt="logo" />
        <div>
          {children}
          <img
            src="https://via.placeholder.com/20"
            alt="logo"
            className="logo-rs"
          />
          <img
            src="https://via.placeholder.com/20"
            alt="test"
            className="logo-rs"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
