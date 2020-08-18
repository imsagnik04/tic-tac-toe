const X_CLASS = 'x';
const O_CLASS = 'o';
const WINNING_COMBINATIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const winningMessageTextElement = document.querySelector('[data-winning-message-text]');
const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const winningMessage = document.getElementById('winningMessage');
const exitButton = document.getElementById('exitButton');
const player_X = document.getElementById('player_X');
const player_O = document.getElementById('player_O');
const scoreUpdateO = document.getElementById('scoreUpdateO');
const scoreUpdateX = document.getElementById('scoreUpdateX');
const r = localStorage.getItem('roundNos');
var n = Number(r);
let oTurn;
let oScore = 0;
let xScore = 0;
let count = 0;


startGame();

exit = (e) =>   {
    window.location.assign("/lobby.html");
}

function startGame()    {
    count++;
    oTurn = false;
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS);
        cell.classList.remove(O_CLASS);
        cell.removeEventListener('click',handleClick);
        cell.addEventListener('click',handleClick, {once: true})
    });
    setBoardHoverClass();
    winningMessage.classList.remove('show');
    scoreUpdateO.innerText = oScore;
    scoreUpdateX.innerText = xScore;
}

function handleClick(e) {
    const cell = e.target;
    const currentClass = oTurn ? O_CLASS : X_CLASS;
    placeMark(cell,currentClass);

    if(checkWin(currentClass))  {
        endGame(false);
    }else if(isDraw())  {
        endGame(true);
    }else   {
        swapTurns();
        setBoardHoverClass();
    }
}

function endGame(draw)  {
    if(count <= n) {
        if(draw)    {
            scoreUpdateX.innerText = xScore;
            scoreUpdateO.innerText = oScore;
        }else   {
    
            if(oTurn)   {
                oScore++;
                scoreUpdateO.innerText = oScore;
            }else    {
                xScore++;
                scoreUpdateX.innerText = xScore;
            }
            //winningMessageTextElement.innerText = `${oTurn ? "O" : "X"} Wins!`;
        }
        if(count < n)   {
            startGame();
        }else   {
            if(xScore < oScore) {
                winningMessageTextElement.innerText = `Player_O won ${xScore} - ${oScore}`;
            }else if(xScore > oScore)   {
                winningMessageTextElement.innerText = `Player_X won ${xScore} - ${oScore}`;
            }else{
                winningMessageTextElement.innerText = `DRAW ${xScore} - ${oScore}`;
            }
            winningMessage.classList.add('show');
        }
    }
}

function placeMark(cell, currentClass)  {
    cell.classList.add(currentClass)
}

function swapTurns()    {
    oTurn = !oTurn;
}

function isDraw()   {
    return [...cellElements].every(cell =>   {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(O_CLASS);
    })
}

function setBoardHoverClass()   {
    board.classList.remove(X_CLASS);
    board.classList.remove(O_CLASS);
    if (oTurn) {
        board.classList.add(O_CLASS);
    }   else    {
        board.classList.add(X_CLASS);
    }
}

function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass);
        });
    });
}