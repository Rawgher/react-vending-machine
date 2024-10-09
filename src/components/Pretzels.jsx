import { Link } from "react-router-dom";

function Pretzels() {
  return (
    <div className="snack">
      <p className="snack-p">
        You've chosen a bag of pretzels! Go get another snack!
      </p>
      <Link to="/" className="snack-link">
        Vending Machine
      </Link>
    </div>
  );
}

export default Pretzels;
