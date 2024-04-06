import React, { useState } from "react";
import "../style.css";

const Tile = () => {
  const [isExpanded, setIsExpanded] = useState(false);

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
      <div className="">{item.prescription}</div>
      <div className="">{item.dosage}</div>
      <div className="">{item.duration}</div>
    </div>
  ));

  return (
    <div className="tilemain">
      <div className="tiletop">
        <div className="tileid">ID:{"25"}</div>
        <div className="tileamount">50INR</div>
        <div className="tilename">{"Name"}</div>
        <div className="tiledoctor">{"I.m Doctor"}</div>
        <div className="viewmore" onClick={handleViewMore}>
          View More
        </div>
      </div>
      {isExpanded && itemList}
    </div>
  );
};

export default Tile;
