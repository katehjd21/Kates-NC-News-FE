import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to={"/"}>{<h1 id="header">NC News</h1>}</Link>

      <p id="header-text">Catch up with the latest news here</p>
    </div>
  );
}

export default Header;
