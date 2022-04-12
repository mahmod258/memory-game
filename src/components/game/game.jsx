import Head from "./head";
import PlayGround from "./playGround";
import Players from "./players";
import MatchEnd from "./matchEnd";
import useMediaQuery from "../../customHooks/16-useMediaQuery/useMediaQuery";
import SmallDeviceMenu from "./smallDeviceMenu";
import React, { useContext, useEffect, useState } from "react";
import { Data } from "../../App";
import { useNavigate } from "react-router-dom";
export const PlayersSuccess = React.createContext([]);
export const ChangePlayersSuccess = React.createContext([]);
export default function Game() {
  const data = useContext(Data);
  const [playersSuccess, setPlayerssuccess] = useState([]);
  const menu = useMediaQuery("(min-width: 660px)");
  const changePlayersSuccess = (pra) => {
    setPlayerssuccess(pra);
  };
  let navigate = useNavigate();
  window.onload = () => {
    navigate("/memory-game");
  };
  useEffect(() => {
    document.documentElement.style.setProperty("--body-bg", "white");
    if (data.gridSize === 16) {
      document.documentElement.style.setProperty(
        "--grid-order",
        "repeat(4,1fr)"
      );
    } else {
      document.documentElement.style.setProperty(
        "--grid-order",
        "repeat(6,1fr)"
      );
    }
    let toPutInPlayersSuccess = [];
    for (let i = 0; i < data.playersNumber; i++) {
      toPutInPlayersSuccess.push(0);
    }
    setPlayerssuccess(toPutInPlayersSuccess);
  }, []);
  return (
    <PlayersSuccess.Provider value={playersSuccess}>
      <ChangePlayersSuccess.Provider value={changePlayersSuccess}>
        <div className="game d-flex justify-content-between flex-column">
          <Head />
          <PlayGround />
          <Players />
          {!menu ? <SmallDeviceMenu /> : null}
          {/* <MatchEnd /> */}
        </div>
      </ChangePlayersSuccess.Provider>
    </PlayersSuccess.Provider>
  );
}
