import { Link } from "react-router-dom";
import "../styles.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">MyWebsite</div>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/show" className="nav-link">Show</Link>
      </nav>
    </header>
  );
}

export default Header;

