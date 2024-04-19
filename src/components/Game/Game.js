import React, { useRef, useState } from "react";
import { resetGrid } from "../../utils/resetGrid.js";
import Controls from "../Controls/Controls.js";
import Grid from "../Grid/Grid.js";
import "./Game.css";
import Footer from "../Footer/Footer.js";

const Game = () => {
  const [grid, setGrid] = useState(() => {
    return resetGrid();
  });
  const [running, setRunning] = useState(false);
  const runningRef = useRef(running);
  runningRef.current = running;

  return (
    <div className="game_container">
      <div className="grid_and_controls">
        <Grid grid={grid} setGrid={setGrid} setRunning={setRunning} />
        <Controls
          running={running}
          setRunning={setRunning}
          runningRef={runningRef}
          grid={grid}
          setGrid={setGrid}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Game;
