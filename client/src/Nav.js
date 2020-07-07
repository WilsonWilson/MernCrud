import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
  <nav className="nav-bar">
    <ul className="nav nav-tabs">
      <li className="nav-item pr-3 pt-3 pb-3">
        <Link to="/">View Menu</Link>
      </li>
      <li className="nav-item pr-3 pt-3 pb-3">
        <Link to="./create">Add Drink</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
