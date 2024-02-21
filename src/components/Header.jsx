import logo from "../assets/img/bezhbarmak-logo.jpg";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import React from "react";

import Search from "./Search";

function Header({ searchValue, setSearchValue }) {
  return (
    <div className="flexx">
      <Link to="/" className="Link">
        <div className="container">
          <img src={logo} id="logo" />
          <div>
            <h3 id="title">REACT BEZHBARMAK</h3>
            <p id="title-two">самый вкусный бежбармак во вселенной</p>
          </div>
        </div>
      </Link>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <Link to="/cart" className="Link carting flex-align">
        {" "}
        <div className="cart ">
          <FaShoppingCart className="cart-icon" />
        </div>
      </Link>
    </div>
  );
}

export default Header;
