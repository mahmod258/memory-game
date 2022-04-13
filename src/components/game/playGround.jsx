import { useState, useEffect, useContext } from "react";
import GridSize from "../startGame/gridSize";
import { Data } from "../../App";
import { PlayersSuccess } from "./game";

export default function PlayGround() {
  const data = useContext(Data);
  const playersSuccess = useContext(PlayersSuccess);
  const [divs, setDivs] = useState([]);
  const icons = [
    <i className="fa-solid fa-bookmark"></i>,
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
    <i className="fa-brands fa-black-tie"></i>,
    <i className="fa-solid fa-person"></i>,
    <i className="fa-solid fa-mountain-sun"></i>,
    <i className="fa-solid fa-lemon"></i>,
    <i className="fa-solid fa-apple-whole"></i>,
    <i className="fa-solid fa-award"></i>,
    <i className="fa-solid fa-axe-battle"></i>,
  ];
  let divsDetails = icons.map((el, i) => {
    return {
      el: data.theme === "icons" ? el : <p style={{ margin: "0" }}>{i}</p>,
      odd_id: i,
    };
  });

  useEffect(() => {
    let toPutOnDivs = [];
    for (let i = 0; i < divsDetails.length; i++) {
      toPutOnDivs.push({
        ...divsDetails[i],
        unique_id: i + divsDetails.length,
      });
      toPutOnDivs.push({
        ...divsDetails[i],
        unique_id: i,
      });
    }
    toPutOnDivs.length = data.gridSize;

    let toPutOnDivsSHUFFLED = toPutOnDivs.sort(() => 0.5 - Math.random());

    setDivs(toPutOnDivsSHUFFLED);
  }, []);
  const [match, setMatch] = useState([]);
  const [first, setFirst] = useState({});
  const handleGame = (el, e) => {
    let arr = match;
    console.log(arr);
    if (typeof arr[0] === "object") {
      if (arr[0].unique_id !== el.unique_id) {
        arr.push(el);
      }
    } else {
      arr.push(el);
    }
    el.className = "played";
    if (arr.length === 2) {
      if (arr[0].odd_id === arr[1].odd_id) {
        setTimeout(() => {
          first.target.className = "";
          e.target.className = "";
        }, 1000);
      } else {
        setTimeout(() => {
          first.target.className = "match";
          e.target.className = "match";
        }, 1000);
      }
      arr = [];
    } else {
      setFirst(e);
    }
    setMatch(arr);
  };
  return (
    <div className="playGround">
      <div>
        {divs.map((figure, i) => {
          return (
            <div
              className={figure.className}
              onClick={(e) => handleGame(figure, e)}
              key={i}
            >
              {figure.el}
            </div>
          );
        })}
      </div>
    </div>
  );
}
