import { useState } from "react";
export default function NumberPlayers({ func }) {
  const [chose, setChose] = useState(["chose", "", ""]);
  function choosing(i) {
    let first = ["", "", "", ""];
    first[i] = "chose";
    setChose(first);
  }
  return (
    <div className="number-players">
      <h6>Numbers of Players</h6>
      <div>
        {chose.map((x, i) => {
          return (
            <button
              value={i + 2}
              className={x}
              key={i}
              onClick={(e) => {
                choosing(i);
                func(+e.target.value);
              }}
            >
              {i + 2}
            </button>
          );
        })}
      </div>
    </div>
  );
}
