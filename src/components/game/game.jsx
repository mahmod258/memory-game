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
export const ChangePlayersSuccess = React.createContext(() => {});
export const EndGame = React.createContext(false);
export const ChangeEndGame = React.createContext(() => {});
export const Order = React.createContext(0);
export const ChangeOrder = React.createContext(() => {});
export default function Game() {
  const data = useContext(Data);
  const menu = useMediaQuery("(min-width: 660px)");
  const [playersSuccess, setPlayerssuccess] = useState([]);
  const [endGame, setEndGame] = useState(false);
  const [order, setOrder] = useState(0);
  const changePlayersSuccess = (pra) => {
    setPlayerssuccess(pra);
  };
  const changeEndGame = () => setEndGame(true);
  const changeOrder = () => {
    if (order === data.playersNumber - 1) {
      setOrder(0);
    } else {
      setOrder(order + 1);
    }
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
        <Order.Provider value={order}>
          <ChangeOrder.Provider value={changeOrder}>
            <EndGame.Provider value={endGame}>
              <ChangeEndGame.Provider value={changeEndGame}>
                {/* Components Border */}
                <div className="game d-flex justify-content-between flex-column">
                  <Head />
                  <PlayGround />
                  <Players />
                  {!menu ? <SmallDeviceMenu /> : null}
                  {/* {order === data.playersNumber ? <MatchEnd /> : null} */}
                </div>
                {/* Components Border */}
              </ChangeEndGame.Provider>
            </EndGame.Provider>
          </ChangeOrder.Provider>
        </Order.Provider>
      </ChangePlayersSuccess.Provider>
    </PlayersSuccess.Provider>
  );
}
