import React from "react";
import { produce } from "immer";
import "./Grid.css";

const Grid = ({ grid, setGrid, setRunning }) => {
  const handleToggle = (i, j) => {
    const gridUpdate = produce(grid, (newGrid) => {
      newGrid[i][j] = grid[i][j] ? 0 : 1;
    });
    setGrid(gridUpdate);
    setRunning(false);
  };

  return (
    <div className="grid">
      {grid?.map((rows, i) =>
        rows?.map((col, j) => (
          <div
            className="cell"
            key={`${i}-${j}`}
            style={{
              backgroundColor: grid[i][j] ? "black" : "white",
            }}
            onClick={() => handleToggle(i, j)}
          />
        ))
      )}
    </div>
  );
};

export default Grid;
