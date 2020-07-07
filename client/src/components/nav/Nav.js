import React from "react";
import { Link, withRouter } from "react-router-dom";
import { getUser, logout } from "../../helpers";

const Nav = ({ history }) => (
  <nav className="nav-bar">
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/">View Menu</Link>
      </li>
      {getUser() && (
        <li className="nav-item">
          <Link to="/create">Add Drink</Link>
        </li>
      )}

      {!getUser() && (
        <li className="nav-item">
          <Link to="/login">Log In</Link>
        </li>
      )}
      {getUser() && (
        <li onClick={() => logout(() => history.push("/"))} className="nav-item">
          <i>Log Out</i>
        </li>
      )}
    </ul>
  </nav>
);

export default withRouter(Nav);
