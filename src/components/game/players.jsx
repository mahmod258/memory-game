import { useState, useEffect, useContext } from "react";
import { PlayersSuccess } from "./game";
export default function Players() {
  const playersSuccess = useContext(PlayersSuccess);

  return (
    <div className="players d-flex">
      {playersSuccess.map((el, i) => {
        return (
          <div className="" key={i}>
            <div>
              <p className="small-text">P{i}</p>
              <p className="big-text">Player {i}</p>
              <h1>{el}</h1>
            </div>
            <div>
              <p>CURRENT TURN</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
