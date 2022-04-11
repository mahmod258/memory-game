import { useState, useEffect } from "react";
export default function Players() {
  return (
    <div className="players d-flex">
      <div className={"playing"}>
        <div>
          <p className="small-text">P1</p>
          <p className="big-text">Player 1</p>
          <h1>0</h1>
        </div>
        <div>
          <p>CURRENT TURN</p>
        </div>
      </div>
    </div>
  );
}
