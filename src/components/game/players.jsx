import { useState, useEffect, useContext } from "react";
export default function Players() {
  const [players, setplayers] = useState(JSON.parse(localStorage.players));
  useEffect(() => {
    setplayers(JSON.parse(localStorage.players));
  });
  return (
    <div className="players d-flex">
      {players.map((el, i) => {
        return (
          <div className={el.current ? "playing" : null} key={i}>
            <div>
              <p className="small-text">P{i + 1}</p>
              <p className="big-text">Player {i + 1}</p>
              <h1>{el.success}</h1>
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
