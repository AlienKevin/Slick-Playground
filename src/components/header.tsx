import React from "react";

function Header() {
  return (
    <div
      style={{
        background: "lightblue",
        marginTop: "0",
        marginBottom: "5px"
      }}
    >
      <h1
        style={{
          fontFamily: "sans-serif",
          color: "white",
          fontWeight: "normal",
          marginTop: "0",
          marginBottom: "0",
          marginLeft: "1em",
          padding: "5px"
        }}
      >
        Slick Playground
      </h1>
    </div>
  );
}

export default Header;
