import React, { useCallback, useRef, useState } from "react";
import { produce } from "immer";
import { coordinates } from "../../utils/coordinates.js";
import { resetGrid } from "../../utils/resetGrid.js";
import Controls from "../Controls/Controls.js";
import Grid from "../Grid/Grid.js";
import "./Game.css";

const numRows = 25;
const numCols = 25;

const Game = () => {
  const [grid, setGrid] = useState(() => {
    return resetGrid();
  });
  const [running, setRunning] = useState(false);
  const runningRef = useRef(running);
  runningRef.current = running;

  const runGame = useCallback(() => {
    if (!runningRef.current) return;

    setGrid((grid) => {
      return produce(grid, (newGrid) => {
        for (let i = 0; i < numRows; i++) {
          for (let j = 0; j < numCols; j++) {
            let numNeighbors = 0;

            coordinates.forEach(([x, y]) => {
              const newRow = i + x;
              const newCol = j + y;

              if (
                newRow >= 0 &&
                newRow < numRows &&
                newCol >= 0 &&
                newCol < numCols
              ) {
                numNeighbors += grid[newRow][newCol];
              }
            });

            if (numNeighbors < 2 || numNeighbors > 3) {
              newGrid[i][j] = 0;
            } else if (grid[i][j] === 0 && numNeighbors === 3) {
              newGrid[i][j] = 1;
            }
          }
        }
      });
    });

    setTimeout(runGame, 500);
  }, []);

  return (
    <div className="game_container">
      <Grid grid={grid} setGrid={setGrid} setRunning={setRunning}/>
      <Controls
        numRows={numRows}
        numCols={numCols}
        running={running}
        setRunning={setRunning}
        runningRef={runningRef}
        setGrid={setGrid}
        runGame={runGame}
      />
    </div>
  );
};

export default Game;
