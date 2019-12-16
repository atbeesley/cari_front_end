import React from 'react'
import { Link } from "react-router-dom"

const NavBar = (props) => {
  return (
    <header>
      <ul>
        <li className="navLink">
          <a href="/orders">Orders</a>
        </li>
        <li className="navLink">
          <a href="/customers">Customers</a>
        </li>
        <li className="navLink">
          <a href="/admin">Admin</a>
        </li>
      </ul>
    </header>
  )
}

export default NavBar
