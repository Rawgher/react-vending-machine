import { Link } from "react-router-dom";

function Snickers() {
  return (
    <div className="snack">
      <p className="snack-p">
        You've chosen a snickers bar! Go get another snack!
      </p>
      <Link to="/" className="snack-link">
        Vending Machine
      </Link>
    </div>
  );
}

export default Snickers;
