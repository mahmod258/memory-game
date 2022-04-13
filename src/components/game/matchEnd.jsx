import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MatchEnd() {
  useEffect(() => {
    document.documentElement.style.setProperty("--filter", "block");
  });
  return (
    <>
      <div className="match-end">
        <div>
          <h1>Player 3 Wins!</h1>
          <p>Game over! Here are the results…</p>
        </div>
        <div>
          <div>
            <p>Player 4</p>
            <h1>6 Pairs</h1>
          </div>
          <div>
            <p>Player 4</p>
            <h1>6 Pairs</h1>
          </div>
          <div>
            <p>Player 4</p>
            <h1>6 Pairs</h1>
          </div>
          <div>
            <p>Player 4</p>
            <h1>6 Pairs</h1>
          </div>
        </div>
        <div>
          <button>Restart</button>
          <Link to="/memory-game">
            <button>Setup New Game</button>
          </Link>
        </div>
      </div>
    </>
  );
}
