import Head from "./head";
import PlayGround from "./playGround";
import Players from "./players";
import MatchEnd from "./matchEnd";
import { useEffect, useState, useContext } from "react";
import useMediaQuery from "../../customHooks/16-useMediaQuery/useMediaQuery";
import SmallDeviceMenu from "./smallDeviceMenu";
import React from "react";

export default function Game() {
  const menu = useMediaQuery("(min-width: 660px)");
  return (
    <div className="game d-flex justify-content-between flex-column">
      <Head />
      <PlayGround />
      <Players />
      {!menu ? <SmallDeviceMenu /> : null}
      <MatchEnd />
    </div>
  );
}
