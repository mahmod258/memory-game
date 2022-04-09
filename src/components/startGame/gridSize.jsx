import { useState } from "react";
export default function GridSize({ func }) {
  const [chose, setChose] = useState(["chose", "", "", ""]);
  function choosing(i) {
    let first = ["", "", "", ""];
    first[i] = "chose";
    setChose(first);
  }
  return (
    <div className="grid-size">
      <h6>Grid Size</h6>
      <div>
        <button
          value={16}
          className={`${chose[0]}`}
          onClick={(e) => {
            choosing(0);
            func(e.target.value);
            console.log(e.target.value);
          }}
        >
          4x4
        </button>
        <button
          value={36}
          className={`${chose[1]}`}
          onClick={(e) => {
            choosing(1);
            func(e.target.value);
            console.log(e.target.value);
          }}
        >
          6x6
        </button>
      </div>
    </div>
  );
}
