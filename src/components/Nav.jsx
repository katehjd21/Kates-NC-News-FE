import React from "react";
import { Link } from "react-router-dom";
import TopicsDropdown from "./TopicsDropdown";

function Nav() {
  return (
    <nav>
      <ul className="nav-bar">
        <li>
          <Link to="/" className="links-text">
            Home
          </Link>
        </li>
        <li>
          <TopicsDropdown />
        </li>
        <li>Account</li>
        <li>Search</li>
      </ul>
    </nav>
  );
}

export default Nav;
