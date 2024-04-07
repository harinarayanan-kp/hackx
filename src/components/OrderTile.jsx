import React from "react";
import "../style.css";

const OrderTile = () => {
  const orderData = [
    {
      id: 1,
      name: "paracetamol",
      availability: true,
      expiry: "2-2-24",
      quantity: 15,
    },
  ];
  const itemList = orderData.map((item) => (
    <div key={item.id} className="ordertile">
      <div className="productid">ID {item.id}</div>
      <div className="productname">{item.name}</div>
      <div className="productstock">
        {item.availability ? "In Stock" : "Out of Stock"}
      </div>
      <div className="productexpiry">{item.expiry}</div>
      <div className="productquantity">{item.quantity} Nos.</div>
    </div>
  ));
  return <div className="prdertilewrap">{itemList}</div>;
};

export default OrderTile;
