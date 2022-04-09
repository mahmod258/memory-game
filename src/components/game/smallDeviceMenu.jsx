import { Link } from "react-router-dom";
export default function SmallDeviceMenu() {
  return (
    <div className="small-menu">
      <div>
        <button>Restart</button>
        <Link to="/">
          <button>
            <p>New Game</p>
          </button>
        </Link>
        <button
          onClick={() => {
            document.documentElement.style.setProperty("--filter", "none");
          }}
        >
          Resume Game
        </button>
      </div>
    </div>
  );
}
