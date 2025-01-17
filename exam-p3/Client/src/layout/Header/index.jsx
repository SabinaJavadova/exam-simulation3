import React from 'react'
import { NavLink } from 'react-router-dom'
import style from "./index.module.scss"
const Header = () => {
  return (
    <header>

      <div className={style["Logo"]}>
        <h2>COLO<span>SHOP</span></h2>
      </div>
      <nav>
        <ul>
          <li><NavLink to={"/"}>Home</NavLink></li>
          <li><NavLink to={"/clothes"}>Clothes</NavLink></li>
          <li><NavLink to={"/add"}>Add</NavLink></li>
          <li><NavLink to={"/wishlist"}>Wishlist</NavLink></li>
          <li><NavLink to={"/contact"}>Contact</NavLink></li>
        </ul>
      </nav>


    </header>
  )
}

export default Header