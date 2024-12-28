import "../styling/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header-container">
      <Link to={"/"}>{<h1 className="news-header">NC News</h1>}</Link>

      <p className="header-text">Catch up with the latest news here...</p>
    </header>
  );
}

export default Header;
