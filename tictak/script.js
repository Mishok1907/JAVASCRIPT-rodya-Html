const winningLines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]] 

const boardElement = document.getElementById("board");
const statusElement = document.getElementById("status");
const restrtButton = document.getElementById("restart");

let cells;
let currentPlayer;
let isGameOver;

function startGame(){
    cells = Array(9).fill('');
    currentPlayer = "X";
    isGameOver = false;
    statusElement.textContent = `Ход игрока ${currentPlayer}`;
    renderBoard();
}

startGame();

function renderBoard(){
    boardElement.innerHTML = '';
    cells.forEach((value,index) => {
        const cell = document.createElement('button');
        cell.className = `cell ${value === 'O' ? 'o' : ''}`;
        cell.type = 'button';
        cell.textContent = value;
       // cell.addEventListener('click', () => makeMove(index));
        boardElement.append(cell);
    })
}

