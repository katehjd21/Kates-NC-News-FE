import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav>
        <ul className="nav-bar">
          <Link to={"/"}>{<li className="links-text">Home</li>}</Link>
          <li>Topics</li>
          <li>Account</li>
          <li>Search</li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
