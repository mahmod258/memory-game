import { useState, useEffect, useContext } from "react";
import GridSize from "../startGame/gridSize";
export default function PlayGround({
  data,
  playersStatus,
  changePlayersStatus,
  order,
  changeOrder,
}) {
  // const playersStatus = useContext(PlayersStatus);
  // const changePlayersStatus = useContext(ChangePlayersStatus);
  // const order = useContext(Order);
  // const changeOrder = useContext(ChangePlayersStatus);
  let icons = [
    <i className="fa-solid fa-apple-whole"></i>,
    <i className="fa-brands fa-atlassian"></i>,
    <i className="fa-solid fa-bicycle"></i>,
    <i className="fa-solid fa-book"></i>,
    <i className="fa-solid fa-bell"></i>,
    <i className="fa-solid fa-building-columns"></i>,
    <i className="fa-solid fa-car"></i>,
    <i className="fa-solid fa-futbol"></i>,
    <i className="fa-solid fa-flag"></i>,
    <i className="fa-solid fa-horse"></i>,
    <i className="fa-solid fa-jet-fighter-up"></i>,
    <i class="fa-brands fa-black-tie"></i>,
    <i className="fa-solid fa-person"></i>,
    <i className="fa-solid fa-mountain-sun"></i>,
    <i className="fa-solid fa-lemon"></i>,
    <i className="fa-solid fa-gamepad"></i>,
    <i className="fa-solid fa-bookmark"></i>,
    <i className="fa-solid fa-house"></i>,
  ];
  const [gridSize, setGridSize] = useState([]);

  useEffect(() => {
    let grid = [];
    if (data.gridSize === 16) {
      document.documentElement.style.setProperty(
        "--grid-size",
        "calc(88% / 4)"
      );
    } else {
      document.documentElement.style.setProperty(
        "--grid-size",
        "calc(85% / 6)"
      );
    }
    if (data.theme === "number") {
      for (let i = 0; i < data.gridSize / 2; i++) {
        grid.push(
          <div className="" key={i} odd-id={i} even-id={i} onClick={handleGame}>
            {i}
          </div>
        );
      }
      for (let i = 0; i < data.gridSize / 2; i++) {
        grid.push(
          <div
            className=""
            key={i + data.gridSize / 2}
            odd-id={i}
            onClick={handleGame}
            even-id={i + data.gridSize / 2}
          >
            {i}
          </div>
        );
      }
    } else {
      for (let i = 0; i < data.gridSize / 2; i++) {
        grid.push(
          <div className="" key={i} odd-id={i} even-id={i} onClick={handleGame}>
            {icons[i]}
          </div>
        );
      }
      for (let i = 0; i < data.gridSize / 2; i++) {
        grid.push(
          <div
            className=""
            key={i + data.gridSize / 2}
            odd-id={i}
            onClick={handleGame}
            even-id={i + data.gridSize / 2}
          >
            {icons[i]}
          </div>
        );
      }
    }
    let randomGrid = grid.sort((a, b) => 0.5 - Math.random());
    setGridSize(randomGrid);
  }, []);
  let arr = [];
  let first;
  let valid = true;
  function handleGame(e) {
    if (valid) {
      if (valid) {
        setTimeout(() => {
          e.target.className = "played";
          arr.push(e.target.attributes[1].value);
          if (arr.length === 2) {
            valid = false;
            setTimeout(() => {
              valid = true;
            }, 800);
            if (e.target.attributes[2] !== first.target.attributes[2]) {
              if (
                e.target.attributes.can === undefined &&
                first.target.attributes.can === undefined
              ) {
                if (arr[0] === arr[1]) {
                  arr = [];
                  first.target.attributes.can = true;
                  e.target.attributes.can = true;
                  e.target.className = "match";
                  first.target.className = "match";
                  let obj = JSON.parse(localStorage.players);
                  console.log(obj);
                  obj[+localStorage.order].success =
                    obj[+localStorage.order].success + 1;
                  for (let i = 0; i < obj.length; i++) {
                    obj[i].current = false;
                  }
                  obj[+localStorage.order + 1].current = true;

                  localStorage.players = JSON.stringify(obj);
                  localStorage.countToEnd = +localStorage.countToEnd + 1;
                  if (+localStorage.order === obj.length - 1) {
                    localStorage.order = 0;
                  } else {
                    localStorage.order = +localStorage.order + 1;
                  }
                } else {
                  setTimeout(() => {
                    e.target.className = "";
                    first.target.className = "";
                  }, 800);
                  arr = [];
                }
                let obj = JSON.parse(localStorage.players);
                obj[+localStorage.order].turns =
                  obj[+localStorage.order].turns + 1;
                for (let i = 0; i < obj.length; i++) {
                  obj[i].current = false;
                }
                obj[+localStorage.order + 1].current = true;
                localStorage.players = JSON.stringify(obj);
                if (+localStorage.order === obj.length - 1) {
                  localStorage.order = 0;
                } else {
                  localStorage.order = +localStorage.order + 1;
                }
              }
            }
          } else {
            first = e;
          }
        }, 200);
      }
    }
  }
  return (
    <div className="playGround">
      {gridSize.map((el, i) => {
        return el;
      })}
    </div>
  );
}
