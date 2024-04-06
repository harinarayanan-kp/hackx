import React, { useState } from "react";
import "../style.css";
import arrow from "./arrow.svg";

const Tile = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [delivered, setDelivered] = useState(false);

  const handleViewMore = () => {
    setIsExpanded(!isExpanded);
    console.log("Switched");
  };

  const list1 = [
    {
      id: 1,
      prescription: "DOLO-500",
      dosage: "26 tablets",
      duration: "2 Week",
    },
    {
      id: 2,
      prescription: "PARACETAMOL",
      dosage: "15 tablets",
      duration: "1 Week",
    },
    {
      id: 3,
      prescription: "DOLO-250",
      dosage: "16 tablets",
      duration: "6 days",
    },
  ];

  const itemList = list1.map((item) => (
    <div key={item.id} className="tile1">
      <div className="tile1child">{item.prescription}</div>
      <div className="tile1child">{item.dosage}</div>
      <div className="tile1child">{item.duration}</div>
    </div>
  ));

  return (
    <div className="tilemain bg-white rounded-xl my-4 mx-auto shadow-lg">
      <div className="tiletop">
        <div className="">
          <div className="tileid">ID:{"25"}</div>
          {delivered ? (
            <div className="delivered">delivered</div>
          ) : (
            <div className="pending">pending</div>
          )}
        </div>
        <div className="tilename">{"Name"}</div>
        <div className="tiledoctor">{"Dr. Octopus"}</div>
        <div className="tileamount">{"50.00"}₹</div>
      </div>

      {isExpanded && itemList}
      <img
        onClick={handleViewMore}
        src={arrow}
        className={isExpanded ? "icon-30 rotate180" : "icon-30"}
      />
    </div>
  );
};

export default Tile;
