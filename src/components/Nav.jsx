import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className="Nav">
      <Link to="/" className="Nav-link">
        Go Home
      </Link>
      <Link to="/snickers" className="Nav-link">
        Snickers
      </Link>
      <Link to="/pretzels" className="Nav-link">
        Pretzels
      </Link>
      <Link to="/trailmix" className="Nav-link">
        Trail Mix
      </Link>
    </div>
  );
}

export default Nav;
