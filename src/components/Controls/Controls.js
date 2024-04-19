import React, { useCallback, useEffect } from "react";
import { resetGrid } from "../../utils/resetGrid";
import { runGame } from "../../utils/runGame";
import "./Controls.css";
import "bootstrap/dist/css/bootstrap.min.css";

const numRows = 25;
const numCols = 25;

const Controls = ({ running, setRunning, runningRef, grid, setGrid }) => {
  useEffect(() => {
    const dialog = document.getElementById("dialog");
    const showButton = document.getElementById("reset_btn");
    const cancelButton = document.getElementById("cancel_btn");
    const confirmButton = document.getElementById("confirm_btn");

    const handleOpenDialog = () => {
      dialog.showModal();
    };

    const handleCancel = () => {
      dialog.close();
    };

    const handleConfirm = () => {
      dialog.close();
      setGrid(resetGrid());
      setRunning(false);
    };

    showButton?.addEventListener("click", handleOpenDialog);
    cancelButton?.addEventListener("click", handleCancel);
    confirmButton?.addEventListener("click", handleConfirm);

    return () => {
      showButton?.removeEventListener("click", handleOpenDialog);
      cancelButton?.removeEventListener("click", handleCancel);
      confirmButton?.removeEventListener("click", handleConfirm);
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

  const handleRandom = () => {
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
        onClick={handleRandom}
      >
        Random
      </button>
      <button type="button" class="btn btn-danger" id="reset_btn">
        Reset
      </button>
      <dialog id="dialog">
        <p>Are you sure?</p>
        <div className="dialog_btns">
          <button type="button" class="btn btn-secondary" id="cancel_btn">
            Cancel
          </button>
          <button type="button" class="btn btn-danger" id="confirm_btn">
            Confirm Reset
          </button>
        </div>
      </dialog>
    </div>
  );
};

export default Controls;
