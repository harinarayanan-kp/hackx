import React, { useState } from "react";
import Navbar from "./Navbar2";
import OrderTile from "./OrderTile";
import { CiSearch } from "react-icons/ci";
import Dropdown from "./Dropdown";

const Orders = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="orderhome">
      <Navbar />
      <div className="topbar">
        <b>Inventory</b>
        <div className="searchbox">
          <CiSearch size={30}/>
          <input
            style={{
                paddingLeft: "15px",
              height: "30px",
              borderRadius: "15px",
              border: "1px solid grey",
              fontSize: "14px",
              width: "100%",
            }}
            type="text"
            placeholder="Search by product name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        {/* <div className="dropdown">dropdown</div> */}
        {/* <Dropdown/> */}
      </div>
      <OrderTile />
      <OrderTile />
      <OrderTile />
      <OrderTile />
      <OrderTile />
    </div>
  );
};

export default Orders;
