import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to={"/articles"}>{<h1 id="header">NC News</h1>}</Link>

      <p id="header-text">Catch up with the latest news here</p>
    </header>
  );
}

export default Header;
