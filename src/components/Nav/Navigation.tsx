import React from "react";
import "./Navigation.css";
function Navigation() {
  return (
    <div className="container">
      <nav className="nav-container">
        <h6 className="title">Staycation</h6>
        <ul className="nav-list">
          <li>
            <a href="#location">Locations</a>
          </li>
          <li>
            <a href="#myplaces">My Places</a>
          </li>
          <li>
            <a href="#mybookings">My Bookings</a>
          </li>
        </ul>
        <button className="logout">LOGOUT</button>
      </nav>
    </div>
  );
}

export default Navigation;
