import React from "react";

function Header({ children }) {
  return (
    <header style={{ backgroundColor: "lightgreen" }}>
      <h1>Header</h1>
      {children}
    </header>
  );
}

export default Header;
