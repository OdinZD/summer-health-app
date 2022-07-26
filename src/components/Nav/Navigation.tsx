import React from "react";
import "./Navigation.css";
function Navigation() {
  return (
    <div className="container">
      <nav className="nav-container">
        <h6 className="title">Staycation</h6>
        <div className="list">
          <a href="#location">Locations</a>
          <a href="#myplaces">My Places</a>
          <a href="#bookings">My Bookings</a>
        </div>
        <button className="logout">LOGOUT</button>
      </nav>
    </div>
  );
}

export default Navigation;
