import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { PlayersSuccess } from "./game";

export default function MatchEnd() {
  const playersScore = useContext(PlayersSuccess);
  const [scores, setScores] = useState([]);
  const [winner, setWinner] = useState([]);
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
      setScores(toPutOnScores);
    });
    scores.forEach((el, i, arrr) => {
      if (el.level === "top") {
        let arr = winner;
        arr.push(i + 1);
        setWinner(arr);
      }
    });
  }, [playersScore]);
  return (
    <>
      <div className="match-end">
        <div>
          <h1>Player {winner} Wins! </h1>
          <p>Game over! Here are the results…</p>
        </div>
        <div>
          {scores.map((el, i) => {
            return (
              <div className={el.level} key={i}>
                <p>Player {i + 1}</p>
                <h1>{el.score} Pairs</h1>
              </div>
            );
          })}
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
