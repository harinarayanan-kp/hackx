import React from "react";
import Tile from "./Tile";
import Navbar from "./Navbar";
import { BsChevronCompactRight } from "react-icons/bs";
import Cards from "./Cards";

const Orders = () => {
  return (
    <div className="text-black">
      <Navbar />
      <div className="  flex flex-col bg-gradient-to-r from-green-100 to-slate-50 items-center h-full mx-auto">
        <div className="mt-[36px] max-w-[1100px] w-full h-full rounded-3xl  rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 ">
          <Cards />
          <div className="flex items-center ">
            <h1 className="text-lg font- text-gray-600 text-start mt-11 mb-3">
              My Orders
            </h1>
            <BsChevronCompactRight className="mt-12 ml-4 mb-3" />
          </div>
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
        </div>
      </div>
    </div>
  );
};

export default Orders;
