import React from "react";
import Navbar from "./Navbar";
import OrderTile from "./OrderTile";
import Dropdown from "./Dropdown";

const Orders = () => {
  return (
    <div className="orderhome">
      <Navbar />
      <div className="topbar">
        <b>Inventory</b>
        <input placeholder="search" className="searchbox"/>
        <div className="dropdown">dropdown</div>
        {/* <Dropdown/> */}
      </div>
      <OrderTile/>
      <OrderTile/>
      <OrderTile/>
      <OrderTile/>
      <OrderTile/>
    </div>
  );
};

export default Orders;
