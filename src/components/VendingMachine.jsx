import { Link } from "react-router-dom";
import "./VendingMachine.css";

function VendingMachine() {
  return (
    <div className="VendingMachine">
      <p className="VendingMachine-title">
        What would you like from the vending machine?
      </p>

      <div className="VendingMachine-options">
        <Link to="/snickers" className="VendingMachine-link">
          Snickers
        </Link>
        <Link to="/pretzels" className="VendingMachine-link">
          Pretzels
        </Link>
        <Link to="/trailmix" className="VendingMachine-link">
          Trail Mix
        </Link>
      </div>
    </div>
  );
}

export default VendingMachine;
