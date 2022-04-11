import StartGame from "./components/startGame/startGame";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Game from "./components/game/game";
import React, { useState, useEffect } from "react";
export const Data = React.createContext({});
export const ChangeData = React.createContext({});
function App() {
  const [data, setData] = useState({
    theme: "numbers",
    playersNumber: 0,
    gridSize: 16,
  });

  const changeData = (name, value) => {
    setData({ ...data, [value]: name });
  };
  return (
    <Data.Provider value={data}>
      <ChangeData.Provider value={changeData}>
        <main className="App">
          <Router>
            <Routes>
              <Route path="/memory-game/game" element={<Game />} />
              <Route path="/memory-game" element={<StartGame />} />
            </Routes>
          </Router>
        </main>
      </ChangeData.Provider>
    </Data.Provider>
  );
}

export default App;
