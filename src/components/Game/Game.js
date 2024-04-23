import React, { createContext, useRef, useState } from "react";
import Controls from "../Controls/Controls.js";
import Grid from "../Grid/Grid.js";
import Footer from "../Footer/Footer.js";
import { resetGrid } from "../../utils/resetGrid.js";
import "./Game.css";

export const GameContext = createContext(null);

const Game = () => {
  const [grid, setGrid] = useState(() => resetGrid());
  const [running, setRunning] = useState(false);
  const runningRef = useRef(running);
  runningRef.current = running;

  return (
    <GameContext.Provider
      value={{ grid, setGrid, running, setRunning, runningRef }}
    >
      <div className="game_container">
        <div className="grid_and_controls">
          <Grid />
          <Controls />
        </div>
        <Footer />
      </div>
    </GameContext.Provider>
  );
};

export default Game;
