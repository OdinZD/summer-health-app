import React from "react";
import "./AccommodationCard.css";
import Rectangle11 from "../../img/Rectangle11.png";
import { FaStar } from "react-icons/fa";
function AccommodationCard() {
  return (
    <PropertyCard
      title="Sugar & Spice Apartments"
      place="Split"
      price="EUR 75"
    />
  );
}

export default AccommodationCard;

function PropertyCard(props: any) {
  const { title, place, price } = props;

  return (
    <div className="container-center-horizontal">
      <div className="propertycard screen">
        <div className="rectangle-11">
          <img src={Rectangle11} alt="" />
        </div>
        <div className="sugar-spice-apartments">{title}</div>
        <div className="place">{place}</div>
        <div className="price">{price}</div>
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
