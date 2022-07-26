import React from "react";
import "./Header.css";
import HeaderImg from "../../img/Header.png";
function Header() {
  return (
    <div className="container-center-horizontal">
      <div className="header screen">
        <div className="overlap-group">
          <div className="background">
            <Rectangle5 />
            <img className="rectangle4" src={HeaderImg} alt="" />
          </div>

          <h1 className="title-header">Enoy your travels</h1>
          <div className="with-staycation-and-collect-rewards">
            with Staycation and collect rewards
          </div>
        </div>
        <div className="book-now-save-10-or-more-today">
          Book now & save 10% or more today
        </div>
      </div>
    </div>
  );
}

export default Header;

function Rectangle5() {
  return <div className="rectangle-5"></div>;
}
