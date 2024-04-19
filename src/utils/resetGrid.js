export function resetGrid() {
  const rows = [];

  for (let i = 0; i < 25; i++) {
    rows.push(Array.from(Array(25), () => 0));
  }

  return rows;
}