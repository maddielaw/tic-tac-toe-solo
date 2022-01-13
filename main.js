/* QUERY SELECTORS GO HERE */

var gameBoard = document.querySelector('.game-board-container');
var playerTurnHeader = document.querySelector('.main-player-turn-header');
var player1WinCounter = document.querySelector('.left-player-wins');
var player2WinCounter = document.querySelector('.right-player-wins');


/* EVENT LISTENERS GO HERE */

window.addEventListener('load', loadNewGame);
gameBoard.addEventListener('click', takeTurn);




/* GLOBAL VARIABLES GO HERE */

var currentGame;

/* EVENT HANDLERS & FUNCTIONS GO HERE */

function loadNewGame() {
  currentGame = new Game();

}


/* 
1. will run addToken & updatePlayerBanner to complete a player turn
2. need to call currentGame.playTurn() which will only allow click on empty
cell, and will update the board & then run check for winner
3. the argument 
*/
function takeTurn(e) {
  currentGame.playTurn(e.target.id);
  createPlayerToken(e.target.id)
  updatePlayerBanner();
  updatePlayerWins();
  console.log(currentGame.board)
  console.log(e.target)
}







// will actually update the innerHTML to add the correct player icon to board
function createPlayerToken(e) {
  if (currentGame.currentPlayer === currentGame.player1) {
    gameBoard.innerHTML = `
    <div class="game-board-boxes" id="${e.target.id}">
    <i class="fas fa-campground"></i>
    </div>`
  } else if (currentGame.currentPlayer === currentGame.player2) {
    gameBoard.innerHTML = `
    <div class="game-board-boxes" id="${e.target.id}">
    <i class="fas fa-tree"></i>
    </div>`
  }
}


// updates the top banner with correct player turn
function updatePlayerBanner() {
  if (currentGame.currentPlayer === currentGame.player1) {
    playerTurnHeader.innerText = "it's player 1's turn!"
  } else if (currentGame.currentPlayer === currentGame.player2) {
    playerTurnHeader.innerText = "it's player 2's turn!"
  }
};

// updates the player win count - > will need to go inside function that handles winner/endgame
function updatePlayerWins() {
  player1WinCounter.innerText = `${currentGame.player1.wins} wins`;
  player2WinCounter.innerText = `${currentGame.player2.wins} wins`;
}

// needs to call currentGame.checkForWinOrDraw()
function handleWinOrDraw() {
}



/* TO DISPLAY THE ICON IN CORRECT SQUARE
1. Need to create an event listener on the game board container 
2. Need to match the e.target to the particular cell div and update
the innerText of the div to match the token of the currentPlayer
3. Need to have the currentGame.board data updated at the correct
index to match the visual


currentGame.playTurn(e.target)






*/
