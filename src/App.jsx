import StartGame from "./components/startGame/startGame";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Game from "./components/game/game";
import React from "react";
function App() {
  return (
    <main className="App">
      <Router>
        <Routes>
          <Route path="/memory-game/game" element={<Game />} />
          <Route path="/memory-game" element={<StartGame />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
