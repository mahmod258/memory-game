import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { PlayersSuccess } from "./game";

export default function MatchEnd() {
  const playersScore = useContext(PlayersSuccess);
  const [scores, setScores] = useState({ top: [], details: [] });
  useEffect(() => {
    document.documentElement.style.setProperty("--filter", "block");
  });

  useEffect(() => {
    let toPutOnScores = [];
    playersScore.forEach((el, i) => {
      toPutOnScores.push({
        score: el,
        level: "top",
      });
      playersScore.forEach((ele) => {
        if (el < ele) {
          toPutOnScores[i].level = "bottom";
        }
      });
      setScores({ ...scores, details: toPutOnScores });
    });
    scores.details.forEach((el, i) => {
      let arr = [];
      if (el.level === "top") {
        arr.push(i);
      }
      setScores({ ...scores, top: arr });
    });
    console.log(scores.top.length);
  });
  return (
    <>
      <div className="match-end">
        <div>
          <h1>Game over! Here are the results…</h1>
        </div>
        <div>
          {scores.details.map((el, i) => {
            return (
              <div className={el.level} key={i}>
                <p>
                  Player {i + 1} <span>(winner)</span>
                </p>
                <h1>{el.score} Pairs</h1>
              </div>
            );
          })}
        </div>
        <div>
          <Link to="/memory-game">
            <button>Setup New Game</button>
          </Link>
        </div>
      </div>
    </>
  );
}
