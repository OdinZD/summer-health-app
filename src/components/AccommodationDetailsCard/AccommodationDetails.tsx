import React from "react";
import { FaStar, FaCalendar } from "react-icons/fa";
import maskgroup from "../../img/maskgroup.png";
import { AccomodationDescription } from "./AccomodationDescription";
import "./AccommodationDetails.css";
type Props = {
  title: string;
  subtitle: string;
  typeOfRoom: string;
  categorization: number;
  personCount: string;
  freeCancelation: string;
  price: number;
  location: string;
  postalCode: string;
};

function AccommodationDetails(props: Props) {
  return (
    <div className="container">
      <img className="mask-group" src={maskgroup} alt="" />
      <div className="frame-container">
        <div className="frame-3">
          <div className="frame-3">
            <div className="frame">
              <div className="frame-37">
                <h1 className="title">{props.title}</h1>
                <div className="rating">
                  <FaStar className="icon-star" />
                  <FaStar className="icon-star" />
                  <FaStar className="icon-star" />
                  <FaStar className="icon-star" />
                  <FaStar className="icon-star" />
                </div>
              </div>
              <p className="subtitle">{props.subtitle}</p>
            </div>
            <div className="frame-13">
              <div className="frame13-1">
                <FaCalendar className="calendar" />
                <div className="cancellation">{props.freeCancelation}</div>
              </div>
            </div>
          </div>
        </div>
        <AccomodationDescription />
      </div>
      <div className="frame-20">
        <div className="frame-19">
          <div className="property-info roboto-medium-black-20px">
            Property info
          </div>
          <div className="frame">
            <div className="frame-17 roboto-normal-big-stone-16px">
              <div className="address">{props.personCount}</div>
              <div className="typeOfRoom">{props.typeOfRoom}</div>
              <div className="price">{props.price}</div>
              <div className="location">{props.location}</div>
              <div className="postalcode">{props.postalCode}</div>
            </div>
          </div>
        </div>
        <button className="button button-primary">BOOK YOUR STAY</button>
      </div>
    </div>
  );
}

export default AccommodationDetails;
