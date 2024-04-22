import React, { useCallback, useEffect, useRef } from "react";
import { resetGrid } from "../../utils/resetGrid";
import { runGame } from "../../utils/runGame";
import "./Controls.css";
import "bootstrap/dist/css/bootstrap.min.css";

const numRows = 25;
const numCols = 25;

const Controls = ({ running, setRunning, runningRef, grid, setGrid }) => {
  const dialogRef = useRef(null);
  const showDialogRef = useRef(null);
  const cancelResetRef = useRef(null);
  const confirmResetRef = useRef(null);

  useEffect(() => {
    const handleOpenDialog = () => {
      dialogRef.current.showModal();
    };

    const handleCancel = () => {
      dialogRef.current.close();
    };

    const handleConfirm = () => {
      dialogRef.current.close();
      setGrid(resetGrid());
      setRunning(false);
    };

    showDialogRef.current.addEventListener("click", handleOpenDialog);
    cancelResetRef.current.addEventListener("click", handleCancel);
    confirmResetRef.current.addEventListener("click", handleConfirm);

    return () => {
      showDialogRef.current?.removeEventListener("click", handleOpenDialog);
      cancelResetRef.current?.removeEventListener("click", handleCancel);
      confirmResetRef.current?.removeEventListener("click", handleConfirm);
    };
  }, [setGrid, setRunning]);

  const runGameCallback = useCallback(() => {
    runGame(grid, setGrid, running, runningRef, numRows, numCols);
  }, [grid, setGrid, running, runningRef]);

  const handleStart = () => {
    setRunning(!running);

    if (!running) {
      runningRef.current = true;
      runGameCallback();
    }
  };

  const handleRandomize = () => {
    const rows = [];

    for (let i = 0; i < numRows; i++) {
      rows.push(
        Array.from(Array(numCols), () => (Math.random() > 0.8 ? 1 : 0))
      );
    }

    setGrid(rows);
  };

  return (
    <div className="btn_container">
      <h1>Game of Life</h1>
      <p>Created by John Horton Conway</p>
      <button type="button" class="btn btn-primary" onClick={handleStart}>
        {!running ? "Start" : "Pause"}
      </button>
      <button
        type="button"
        class="btn btn-secondary"
        disabled={running}
        onClick={handleRandomize}
      >
        Randomize
      </button>
      <button type="button" class="btn btn-danger" ref={showDialogRef}>
        Reset
      </button>
      <dialog id="dialog" ref={dialogRef}>
        <p>Are you sure?</p>
        <div className="dialog_btns">
          <button type="button" class="btn btn-secondary" ref={cancelResetRef}>
            Cancel
          </button>
          <button type="button" class="btn btn-danger" ref={confirmResetRef}>
            Confirm Reset
          </button>
        </div>
      </dialog>
    </div>
  );
};

export default Controls;
