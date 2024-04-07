import React, { useState } from "react";
import Navbar from "./Navbar";
import OrderTile from "./OrderTile";
import { CiSearch } from "react-icons/ci";
import Dropdown from "./Dropdown";

const Inventory = () => {
  const [query, setQuery] = useState("");
  return (
    <div className=" flex flex-col bg-gradient-to-r from-green-100 to-slate-50 items-center h-full mx-auto min-h-dvh">
      <Navbar />
      <div className="topbar">
        <b>Inventory</b>
        <div className="searchbox">
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
          <CiSearch size={30} />
        </div>
        {/* <div className="dropdown">dropdown</div> */}
        {/* <Dropdown/> */}
      </div>
      <div className="mt-[36px] max-w-[1100px] w-full h-full rounded-3xl  rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
        <OrderTile />
        <OrderTile />
        <OrderTile />
        <OrderTile />
        <OrderTile />
      </div>
    </div>
  );
};

export default Inventory;
