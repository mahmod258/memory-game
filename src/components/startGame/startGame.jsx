import GridSize from "./gridSize";
import NumberPlayers from "./numberPalyers";
import SelectTheme from "./selectTheme";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
export default function StartGame({ func }) {
  const [data, setData] = useState({
    theme: "number",
    numberPlayers: 1,
    gridSize: 16,
  });
  return (
    <>
      <h1>memory</h1>
      <div className="starting d-flex flex-column justify-content-between">
        <SelectTheme func={(pra) => setData({ ...data, theme: pra })} />
        <NumberPlayers
          func={(pra) => setData({ ...data, numberPlayers: pra })}
        />
        <GridSize func={(pra) => setData({ ...data, gridSize: pra })} />
        <Link to="/game">
          <button
            className="start-game"
            onClick={() => (localStorage.data = JSON.stringify(data))}
          >
            Start Game
          </button>
        </Link>
      </div>
    </>
  );
}
