import { Link } from "react-router-dom";

function TrailMix() {
  return (
    <div className="snack">
      <p className="snack-p">
        You've chosen a bag of trail mix! Go get another snack!
      </p>
      <Link to="/" className="snack-link">
        Vending Machine
      </Link>
    </div>
  );
}

export default TrailMix;
