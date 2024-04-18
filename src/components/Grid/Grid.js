import React, { useState } from 'react';
import './Grid.css';
import { resetGrid } from '../../utils/resetGrid';

const numRows = 40;
const numCols = 40;

const Grid = () => {
  const [grid, setGrid] = useState(() => {
    return resetGrid();
  })
  const [running, setRunning] = useState(false);
  const runningRef = useRef(running);
  runningRef.current = running;

  return (
    <div>Grid</div>
  )
}

export default Grid