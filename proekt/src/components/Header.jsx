import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="container">
      <img src="/background.svg" alt="" />
      <Navbar />
            <div className="header-content">
  <div className="line"></div>
  <p className="subtitle">SIMPLY CLEVER</p>
  <h1 className="title">BEST COFFEE</h1>
  <p className="description">Lorem Ipsum Dolor met sit dolor</p>
  <div className="line"></div>
</div>
    </header>
  );
};

export default Header;
