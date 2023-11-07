import React from "react";
import "./header.css";
import CTA from "../CTA/CTA";
import ME from "../../assets/me.jpg";
import HeaderSocials from "./HeaderSocials";


const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h3>Hello, i'm</h3>
        <h1>Emanuel Martinez</h1>
        <h3 className="text-light">Frontend developer</h3>
        <CTA />
        <HeaderSocials />
        <div className="me">
            <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
