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
  console.log(icons);
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
      toPutOnDivs.push(divsDetails[i]);
      toPutOnDivs.push(divsDetails[i]);
    }
    toPutOnDivs.length = data.gridSize;

    let toPutOnDivsSHUFFELD = toPutOnDivs.sort(() => 0.5 - Math.random());
    toPutOnDivs.forEach((el, i) => {
      el.unique_id = i;
      el.unique_ClassName = "";
    });
    setDivs(toPutOnDivsSHUFFELD);
  }, []);
  console.log(divs);
  return (
    <div className="playGround">
      {divs.map((figure, i) => {
        return <div key={i}>{figure.el}</div>;
      })}
    </div>
  );
}
