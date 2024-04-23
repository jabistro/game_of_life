import React, { useContext } from "react";
import { produce } from "immer";
import { GameContext } from "../Game/Game";
import "./Grid.css";

const Grid = () => {
  const { grid, setGrid, setRunning } = useContext(GameContext);

  const handleToggle = (i, j) => {
    const gridUpdate = produce(grid, (draftGrid) => {
      draftGrid[i][j] = grid[i][j] ? 0 : 1;
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
