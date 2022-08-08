import React from "react";
import "./Header.css";
import HeaderImg from "../../img/Header.png";
function Header() {
  return (
    <div className="main-container">
      <div className="header screen">
        <div className="background">
          <img className="img" src={HeaderImg} alt="" />
        </div>

        <h1 className="title-header">Enoy your travels</h1>
        <div className="title-header-two">
          with Staycation and collect rewards
        </div>
        <div className="title-header-three">
          Book now & save 10% or more today
        </div>
      </div>
    </div>
  );
}

export default Header;
