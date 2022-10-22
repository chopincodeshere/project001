import React from "react";
import Carousel from "../Carousel/Carousel";
import Logo from "../../assets/logo.jpeg";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <img src={Logo} alt="Bhavna Food products" />
        </div>
        <div className="company-title" style={{fontSize: "3rem", marginLeft: "17rem"}}>Bhavna Natural Food Products</div>
        <div className="links">
          <a href="#home">Home</a>
          <a href="#about">About us</a>
          <a href="#contact">Contact us</a>
        </div>
      </nav>
      <Carousel />
    </>
  );
}

export default Navbar;
