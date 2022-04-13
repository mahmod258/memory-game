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
      odd_className: "",
    };
  });

  useEffect(() => {
    let toPutOnDivs = [];

    for (let i = 0; i < divsDetails.length; i++) {
      toPutOnDivs.push({
        ...divsDetails[i],
        unique_id: i + divsDetails.length,
        unique_className: "",
      });
      toPutOnDivs.push({
        ...divsDetails[i],
        unique_id: i,
        unique_className: "",
      });
    }
    toPutOnDivs.length = data.gridSize;

    let toPutOnDivsSHUFFLED = toPutOnDivs.sort(() => 0.5 - Math.random());

    setDivs(toPutOnDivsSHUFFLED);
  }, []);
  console.log(divs);
  const [match, setMatch] = useState([]);
  const [first, setFirst] = useState({});
  const handleGame = (el, e) => {
    const arr = match;
    if (typeof arr[0] === "object") {
      if (arr[0].unique_id !== el.unique_id) {
        arr.push(el);
      }
    } else {
      arr.push(el);
    }
    setMatch(arr);
    el.unique_className = "played";
    if (arr.length === 2) {
      setMatch([]);
      console.log(match);
    } else {
      setFirst(e);
      console.log(match);
    }
  };
  return (
    <div className="playGround">
      <div>
        {divs.map((figure, i) => {
          return (
            <div
              className={figure.odd_className + figure.unique_className}
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
