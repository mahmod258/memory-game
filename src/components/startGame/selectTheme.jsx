import { useState } from "react";
export default function SelectGame({ func }) {
  const [chose, setChose] = useState(["chose", ""]);
  function choosing(i) {
    let first = ["", ""];
    first[i] = "chose";
    setChose(first);
  }
  return (
    <div className="select-theme">
      <h6>Select Theme</h6>
      <div>
        <button
          value="numbers"
          className={`${chose[0]}`}
          onClick={(e) => {
            choosing(0);
            func(e.target.value);
          }}
        >
          Numbers
        </button>
        <button
          value="icons"
          className={`${chose[1]}`}
          onClick={(e) => {
            choosing(1);
            func(e.target.value);
          }}
        >
          Icons
        </button>
      </div>
    </div>
  );
}
