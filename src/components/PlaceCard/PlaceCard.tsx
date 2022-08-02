import React from "react";
import "./PlaceCard.css";
import treehouse from "../../img/Treehouse.png";
type Props = {
  title: string;
  location: string;
  subtitle: string;
};
function PlaceCard(props: Props) {
  return (
    <div className="main-container">
      <div className="propertycard screen">
        <div className="image">
          <img src={treehouse} alt="" />
        </div>
        <div className="title">{props.title}</div>
        <div className="location">{props.location}</div>
        <div className="subtitle">{props.subtitle}</div>
        <div className="button-frame">
          <button className="label-edit mid-text">EDIT</button>
          <button className="label-delete mid-text">DELETE PLACE</button>
        </div>
      </div>
    </div>
  );
}

export default PlaceCard;
