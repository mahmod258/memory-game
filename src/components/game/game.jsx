import Head from "./head";
import PlayGround from "./playGround";
import Players from "./players";
import MatchEnd from "./matchEnd";
import { useEffect, useState, useContext } from "react";
// import useMediaQuery from "../../customHooks/16-useMediaQuery/useMediaQuery";
import SmallDeviceMenu from "./smallDeviceMenu";
import React from "react";

export default function Game() {
  const data = JSON.parse(localStorage.data);
  let order = 0;
  const changePlayersStatus = (pra) => {
    localStorage.players = JSON.stringify(pra);
  };
  const changeOrder = (pra) => {
    order = pra;
  };

  const menu = true;

  useEffect(() => {
    document.documentElement.style.setProperty("--body-bg", "white");
  }, []);

  return (
    <div className="game d-flex justify-content-between flex-column">
      <Head data={data} />
      <PlayGround
        data={data}
        playersStatus={JSON.parse(localStorage.players)}
        changePlayersStatus={changePlayersStatus}
        order={order}
        changeOrder={changeOrder}
      />
      <Players playersStatus={JSON.parse(localStorage.players)} />
      {!menu ? <SmallDeviceMenu /> : null}
      <MatchEnd />
    </div>
  );
}
