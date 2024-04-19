import React from "react";
import { resetGrid } from "../../utils/resetGrid";
import "./Controls.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Controls = ({
  numRows,
  numCols,
  running,
  setRunning,
  runningRef,
  setGrid,
  runGame,
}) => {
  return (
    <div className="btn_container">
      <h1>Game of Life</h1>
      <button
        type="button"
        class="btn btn-primary"
        onClick={() => {
          setRunning(!running);
          if (!running) {
            runningRef.current = true;
            runGame();
          }
        }}
      >
        {!running ? "Start" : "Pause"}
      </button>
      <button
        type="button"
        class="btn btn-secondary"
        disabled={running}
        onClick={() => {
          const rows = [];

          for (let i = 0; i < numRows; i++) {
            rows.push(
              Array.from(Array(numCols), () => (Math.random() > 0.8 ? 1 : 0))
            );
          }

          setGrid(rows);
        }}
      >
        Random
      </button>
      <button
        type="button"
        class="btn btn-danger"
        onClick={() => {
          setGrid(resetGrid());
          setRunning(false);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Controls;
