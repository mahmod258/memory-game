import GridSize from "./gridSize";
import NumberPlayers from "./numberPalyers";
import SelectTheme from "./selectTheme";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Data, ChangeData } from "../../App";
export default function StartGame({ replaceData }) {
  const data = useContext(Data);
  const changeData = useContext(ChangeData);
  useEffect(() => {
    document.documentElement.style.setProperty("--body-bg", "#152938");
    replaceData();
  }, []);
  return (
    <>
      <h1>memory</h1>
      <div className="starting d-flex flex-column justify-content-between">
        <SelectTheme func={(pra) => changeData(pra, "theme")} />
        <NumberPlayers func={(pra) => changeData(pra, "playersNumber")} />
        <GridSize func={(pra) => changeData(pra, "gridSize")} />
        <Link to="/memory-game/game">
          <button className="start-game">Start Game</button>
        </Link>
      </div>
    </>
  );
}
