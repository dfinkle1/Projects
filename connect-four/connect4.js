/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */
const subBtn = document.querySelector("#submit");
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const winner = document.querySelector("h2");
const WIDTH = 7;
const HEIGHT = 6;
let p1Counter = 0;
let p2Counter = 0;
const form = document.querySelector("form");
let currPlayer = 1; // active player: 1 or 2
const board = []; // array of rows, each row is array of cells  (board[y][x])

/** makeBoard: create in-JS board structure:
 *    board = array of rows, each row is array of cells  (board[y][x])
 */

subBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const createScoresP1 = document.createElement("div");
  const createScoresP2 = document.createElement("div");
  const inputValue = document.querySelector("input[id=p1]").value;
  const inputValue2 = document.querySelector("input[id=p2]").value;
  createScoresP1.classList.add("playa1");
  createScoresP2.classList.add("playa2");
  createScoresP1.innerHTML = `${inputValue}'s Score is ${p1Counter}`;
  createScoresP2.innerHTML = `${inputValue2}'s Score is ${p2Counter}`;
  form.append(createScoresP1);
  form.append(createScoresP2);
  subBtn.remove();
  makeBoard();
  makeHtmlBoard();
});

function makeBoard() {
  for (let x = 0; x < HEIGHT; x++) {
    board.push(Array.from({ length: WIDTH }));
  }
}

/** makeHtmlBoard: make HTML table and row of column tops. */

function makeHtmlBoard() {
  // TODO: get "htmlBoard" variable from the item in HTML w/ID of "board"

  // TODO: creates a top column that will allow a piece to drop into the board
  // TODO:
  const htmlBoard = document.querySelector("#board");
  const top = document.createElement("tr");
  top.setAttribute("id", "column-top");
  top.addEventListener("click", handleClick);

  for (let x = 0; x < WIDTH; x++) {
    let headCell = document.createElement("td");
    headCell.setAttribute("id", x);
    top.append(headCell);
  }
  htmlBoard.append(top);

  // TODO: creating 7 arrays, and each one contains 6 cells. with individual values
  for (let y = 0; y < HEIGHT; y++) {
    const row = document.createElement("tr");
    for (let x = 0; x < WIDTH; x++) {
      const cell = document.createElement("td");
      cell.setAttribute("id", `${y}:${x}`);
      row.append(cell);
    }
    htmlBoard.append(row);
  }
}

/** findSpotForCol: given column x, return top empty y (null if filled) */

function findSpotForCol(x) {
  for (let y = HEIGHT - 1; y >= 0; y--) {
    if (!board[y][x]) {
      return y;
    }
  }
  return null;
}

/** placeInTable: update DOM to place piece into HTML table of board */

function placeInTable(y, x) {
  const piece = document.createElement("div");
  piece.classList.add("piece");
  piece.classList.add(`p${currPlayer}`);
  const spot = document.getElementById(`${y}:${x}`);
  spot.append(piece);
}

/** endGame: announce game end */

function endGame(msg) {
  alert(msg);
  const reset = board.every((row) => row.every((cell) => (cell = undefined)));
  const newBtn = document.createElement("input");
  newBtn.type = "submit";
  newBtn.value = "Reset Game";
  newBtn.addEventListener("click", function (e) {
    e.preventDefault();
  });
  form.append(newBtn);
  // TODO: pop up alert message
}

/** handleClick: handle click of column top to play piece */

function handleClick(evt) {
  // get x from ID of clicked cell
  let x = +evt.target.id;

  // get next spot in column (if none, ignore click)
  let y = findSpotForCol(x);
  if (y === null) {
    return;
  }

  // place piece in board and add to HTML table
  // TODO: add line to update in-memory board
  board[y][x] = currPlayer;
  placeInTable(y, x);

  // check for win
  if (checkForWin()) {
    // const winner = document.querySelector("h2");
    winner.style.textAlign = "center";
    winner.innerHTML = `Player ${currPlayer} wins!`;
    return endGame(`Player ${currPlayer} won!`);
  }
  // check for tie
  // TODO: check if all cells in board are filled; if so call, call endGame
  if (board.every((row) => row.every((cell) => cell))) {
    return endGame("Game is a tie");
  }
  // switch players
  // TODO: switch currPlayer 1 <-> 2
  currPlayer = currPlayer === 1 ? 2 : 1;
}

/** checkForWin: check board cell-by-cell for "does a win start here?" */

function checkForWin() {
  function _win(cells) {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer

    return cells.every(
      ([y, x]) =>
        y >= 0 &&
        y < HEIGHT &&
        x >= 0 &&
        x < WIDTH &&
        board[y][x] === currPlayer
    );
  }

  // TODO: this loop checks all win conditions. of horizontal/vert/diag(2)

  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      const horiz = [
        [y, x],
        [y, x + 1],
        [y, x + 2],
        [y, x + 3],
      ];
      var vert = [
        [y, x],
        [y + 1, x],
        [y + 2, x],
        [y + 3, x],
      ];
      var diagDR = [
        [y, x],
        [y + 1, x + 1],
        [y + 2, x + 2],
        [y + 3, x + 3],
      ];
      var diagDL = [
        [y, x],
        [y + 1, x - 1],
        [y + 2, x - 2],
        [y + 3, x - 3],
      ];

      if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
        return true;
      }
    }
  }
}

// makeBoard();
// makeHtmlBoard();
