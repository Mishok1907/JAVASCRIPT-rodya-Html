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
         cell.addEventListener('click', () => makeMove(index));
        boardElement.append(cell);
    })
}

function getWinner(){
    for( const [a,b,c]  of winningLines ){
       if(cells[a] && cells[a] === cells[b] && cells[a]  === cells[c]) {
        return cells[a];
       }
    }
    return null;
}

function makeMove(index){
    if(cells[index] || isGameOver) return;
    
    cells[index] = currentPlayer;
    const winner = getWinner();

    if(winner){
        isGameOver = true;
         statusElement.textContent = `Победа ${winner}`;
    }
    else if (cells.every(Boolean)){
        isGameOver = true;
        statusElement.textContent = `Ничья!`;
    }
    else{
        // if(currentPlayer === 'X'){
        //      currentPlayer = 'O'
        // }
        // else{
        //     currentPlayer = 'X'
        // }
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
         statusElement.textContent = `Ход игрока ${currentPlayer}`;
    }
    renderBoard();
}

restrtButton.addEventListener('click', () => startGame());

