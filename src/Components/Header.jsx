import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import './Header.css'
export default function Header() {
  return (
    <div className='navbar'>
      <Link to="/" className="logo">
        <h1>Crypto Verse</h1>

        <div style={{ color: "orange", fontSize: "33px", marginLeft: "5px" }}>⧫</div>
      </Link>
      <ul>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/coins">Coins</Link> </li>

      </ul>
    </div>
  )
}
