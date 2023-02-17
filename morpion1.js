const cells = document.querySelectorAll('[data-cell]');
const gameStatus = document.getElementById('gamestatus');
const endGameStatus = document.getElementById('endGameStatus');


const playerOne = '<img src="./icones/vert.svg" alt="">'
const playerTwo = '<img src="./icones/rouge.svg" alt="">'


let playerTurn = playerOne;

const winningPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

cells.forEach(cell => {
    // A chaque cell on ajoute un evenement qui s'occupera d'exectuer la fonction playGame
    cell.addEventListener('click', playGame,{once:true});

});

function playGame(e) {
    e.target.innerHTML = playerTurn;

    if (checkWin(playerTurn)) {
        // updateGameStatus("wins" + playerTurn[1]);
        return endGame();
    }else if(checkDraw()){
        // updateGameStatus("draw");
        return endGame();
    }

    playerTurn == playerOne ? playerTurn = playerTwo : playerTurn = playerOne;
}


function checkWin(playerTurn){
    return winningPatterns.some(combination => {
        return combination.every(index => {
            return cells[index].innerHTML == playerTurn;
        })
    }) 
}
function checkDraw() {
    return[...cells].every(cell => {
        return cell.innerHTML == playerOne || cell.innerHTML == playerTwo;
    });
}

function endGame() {
    var endgame=  document.querySelector('.gameEnd');
    endgame.classList.add('showEnd');
    console.log('the end of the game');
  
  
}

const reload = document.getElementById('reloadGame').addEventListener('click', (e)=> {
    window.location.reload()
},{once: true})