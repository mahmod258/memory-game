import { Link } from "react-router-dom";
import useMediaQuery from "../../customHooks/16-useMediaQuery/useMediaQuery";
export default function Head() {
  return (
    <div className="head d-flex w-100 justify-content-between align-items-center">
      <h1>memory</h1>
      <div className="buttons">
        <Link to="/memory-game">
          <button>
            <p>New Game</p>
          </button>
        </Link>
      </div>
    </div>
  );
}
