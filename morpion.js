const cells = document.querySelectorAll('[data-cell]');
const gameStatus = document.getElementById('gamestatus');
const endGameStatus = document.getElementById('endGameStatus');
const playerOne =['#03FF0C','X'] , playerTwo = ['#FC000C','O'];
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
    cell.addEventListener('click', playGame,{once: true});

});

function playGame(e) {
    e.target.style.background = playerTurn[0];

    if (checkWin(playerTurn)) {
        updateGameStatus("wins" + playerTurn[1]);
        return endGame();
    }else if(checkDraw()){
        updateGameStatus("draw");
        return endGame();
    }
    updateGameStatus(playerTurn[1])
    playerTurn == playerOne ? playerTurn = playerTwo : playerTurn = playerOne;
}

function checkWin(playerTurn){
    return winningPatterns.some(combination => {
        return combination.every(index => {
            return cells[index].style.background = playerTurn[0];
        })
    }) 
}
function checkDraw() {
    return[...cells].every(cell => {
        return cell.style.background == playerOne[0] || cell.style.background == playerOne[0] 
    });
}

function updateGameStatus(status) {
    let statusText;
    switch (status) {
        case 'X':
            statusText = 'Au tour du jouer 2 (O)';
            break;
        case 'O':
            statusText = 'Au tour du jouer 1 (X)';
            break;
        case 'winsO':
            statusText = 'Le jouer 2 (O) a gagné !';
            break;
        case 'winsX':
            statusText = 'Le jouer 1 (X) a gagné !';
            break;  
        case 'draw':
            statusText = 'Egalité! personne ne gagne!';
            break;
    }
    gameStatus.innerHTML = statusText;
    endGameStatus.innerHTML = statusText;
    
}

function endGame() {
    document.getElementById('gameEnd').style.display = 'block';

}

const reload = document.getElementById('reloadGame').addEventListener('click', (e)=> {
    window.location.reload()
},{once: true})
