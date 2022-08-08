import React from "react";
import "./AccommodationCard.css";
import Rectangle11 from "../../img/Rectangle11.png";
import { FaStar } from "react-icons/fa";

type Props = {
  title: string;
  place: string;
  price: string;
};
function AccommodationCard(props: Props) {
  return (
    <div className="main-container">
      <div className="propertycard screen">
        <div className="accomodation-img">
          <img src={Rectangle11} alt="" />
        </div>
        <div className="title">{props.title}</div>
        <div className="place">{props.place}</div>
        <div className="price">{props.price}</div>
        <div className="rating">
          <FaStar className="icon-star" />
          <FaStar className="icon-star" />
          <FaStar className="icon-star" />
          <FaStar className="icon-star" />
          <FaStar className="icon-star" />
        </div>
      </div>
    </div>
  );
}

export default AccommodationCard;
