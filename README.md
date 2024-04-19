# Game of Life Application (US Mobile Coding Challenge)

Game of Life is a popular cellular automaton game that has existed since the 1970s, created by John Horton Conway. The game is played on a grid of cells; each cell can be in one of two states: alive or dead. The game progresses through generations, each determined by rules dictating which cells live or die. The game is simple to learn but surprisingly complex and can produce a wide variety of patterns.

## Game of Life Rules

The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, live or dead (or populated and unpopulated, respectively). Every cell interacts with its eight neighbors, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

Any live cell with fewer than two live neighbors dies, as if by underpopulation.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by overpopulation.
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed, live or dead; births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick. Each generation is a pure function of the preceding one. The rules continue to be applied repeatedly to create further generations.

## Requirements

* It should be playable on a grid of cells, which can be toggled between alive and dead using the mouse.
* It should progress through generations automatically, according to the Game of Life rules.
* It should have a pause/play button that allows the user to pause and resume the game.
* It should have a reset button that resets the grid to its initial state.

## Live Demo

You can click here for a [Live Demo](https://game-of-life-ke2v.onrender.com/)
