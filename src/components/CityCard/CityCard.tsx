import React from "react";
import London from "../../img/London.png";
import "./CityCard.css";
type Props = {
  name: string;
  count: number;
};
const CityCard = (props: Props) => {
  return (
    <div>
      <div className="city-container">
        <img src={London} alt="" />
        <p>{props.name}</p>
        <p>{props.count}</p>
      </div>
    </div>
  );
};

export default CityCard;
