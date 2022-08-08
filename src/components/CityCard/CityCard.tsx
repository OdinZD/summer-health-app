import React from "react";
import London from "../../img/London.png";
import "./CityCard.css";
type Props = {
  name: string;
  count: string;
};
const CityCard = (props: Props) => {
  return (
    <div>
      <div className="city-container">
        <img className="img" src={London} alt="" />
        <div className="name">{props.name}</div>
        <div className="count">{props?.count}</div>
      </div>
    </div>
  );
};

export default CityCard;
