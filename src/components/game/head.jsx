import { Link } from "react-router-dom";
// import useMediaQuery from "../../customHooks/16-useMediaQuery/useMediaQuery";
export default function Head() {
  // const menu = useMediaQuery("(min-width: 660px)");
  const menu = true;
  return (
    <div className="head d-flex w-100 justify-content-between align-items-center">
      <h1>memory</h1>
      {menu ? (
        <div className="buttons">
          <button className="yellow-button">
            <p>Restart</p>
          </button>
          <Link to="/">
            <button>
              <p>New Game</p>
            </button>
          </Link>
        </div>
      ) : (
        <div className="buttons">
          <button
            className="yellow-button"
            onClick={() => {
              document.documentElement.style.setProperty("--filter", "block");
              document.documentElement.style.setProperty(
                "--small-menu",
                "block"
              );
            }}
          >
            <p>Menu</p>
          </button>
        </div>
      )}
    </div>
  );
}
