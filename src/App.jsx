import StartGame from "./components/startGame/startGame";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Game from "./components/game/game";
import React from "react";
function App() {
  return (
    <main className="App">
      <Router>
        <Routes>
          <Route path="/game" element={<Game />} />
          <Route path="/" element={<StartGame />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
