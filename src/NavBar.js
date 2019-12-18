import React from 'react'
import { Link } from "react-router-dom"

const NavBar = (props) => {
  return (
    <header className="header">
      <ul>
        <li className="navLink">
          <a href="/orders">View Orders</a>
        </li>
        <li className="navLink">
          <a href="/customers">View Customers</a>
        </li>
        <li className="navLink">
          <a href="/admin">Admin</a>
        </li>
        <li className="navLink">
        <a href='/dishes'>View Dishes</a>
        </li>
        <li className="navLink">
          <a href="/orders/new">Make A New Order</a>
        </li>
      </ul>
    </header>
  )
}

export default NavBar
