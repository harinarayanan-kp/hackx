import React from 'react'
import "../style.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">Logo</div>
        <div className="navend">
            <div className="order">Orders</div>
            <div className="order">Inventory</div>
            <div className="account"></div>
        </div>
    </div>
  )
}

export default Navbar