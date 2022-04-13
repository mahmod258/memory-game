import { useState, useEffect, useContext } from "react";
import { PlayersSuccess, Order } from "./game";
export default function Players() {
  const playersSuccess = useContext(PlayersSuccess);
  const order = useContext(Order);
  return (
    <div className="players d-flex">
      {playersSuccess.map((el, i) => {
        return (
          <div className={i === order ? "playing" : ""} key={i}>
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
