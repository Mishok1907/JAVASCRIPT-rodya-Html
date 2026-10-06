const boardElement = document.querySelector('#board');
const statusElement = document.querySelector('#status');
const restartButton = document.querySelector('#restart');

const winningLines = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

let cells;
let currentPlayer;
let gameIsOver;

function startGame() {
  cells = Array(9).fill('');
  currentPlayer = 'X';
  gameIsOver = false;
  statusElement.textContent = `Ход игрока ${currentPlayer}`;
  renderBoard();
}

function renderBoard() {
  boardElement.innerHTML = '';

  cells.forEach((value, index) => {
    const cell = document.createElement('button');
    cell.className = `cell ${value === 'O' ? 'o' : ''}`;
    cell.type = 'button';
    cell.textContent = value;
    cell.addEventListener('click', () => makeMove(index));
    boardElement.append(cell);
  });
}

function makeMove(index) {
  if (cells[index] || gameIsOver) return;

  cells[index] = currentPlayer;
  const winner = getWinner();

  if (winner) {
    gameIsOver = true;
    statusElement.textContent = `Победил игрок ${winner}!`;
  } else if (cells.every(Boolean)) {
    gameIsOver = true;
    statusElement.textContent = 'Ничья!';
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusElement.textContent = `Ход игрока ${currentPlayer}`;
  }

  renderBoard();
}

function getWinner() {
  for (const [a, b, c] of winningLines) {
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return cells[a];
    }
  }
  return null;
}

restartButton.addEventListener('click', startGame);
startGame();
