import { produce } from "immer";
import { neighbors } from "./neighbors";

export const runGame = (
  grid,
  setGrid,
  running,
  runningRef,
  numRows,
  numCols
) => {
  if (!runningRef.current) return;

  setGrid((grid) => {
    return produce(grid, (draftGrid) => {
      for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
          let numNeighbors = 0;

          neighbors.forEach(([x, y]) => {
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
            draftGrid[i][j] = 0;
          } else if (grid[i][j] === 0 && numNeighbors === 3) {
            draftGrid[i][j] = 1;
          }
        }
      }
    });
  });

  setTimeout(
    () => runGame(grid, setGrid, running, runningRef, numRows, numCols),
    500
  );
};
