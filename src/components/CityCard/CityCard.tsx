import React from "react";

const CityCard = () => {
  const cardInfo = [
    {
      name: "London",
      count: "5102",
    },
  ];
  return (
    <div>
      {cardInfo.map((name, index) => {
        return (
          <div key={index}>
            <p>{name.name}</p>
            <p>{name.count}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CityCard;
