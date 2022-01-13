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


// will run addToken, updatePlayerBanner, updatePlayerWins to complete a player turn
// should also be able to update currentGame.board
function takeTurn(e) {
  console.log(e.target)
}


// will actually update the innerHTML to add the correct player icon to board
function addToken() {

}


// updates the top banner with correct player turn
function updatePlayerBanner() {
  if (currentGame.currentPlayer === currentGame.player1) {
    playerTurnHeader.innerText = "it's player 1's turn!"
  } else if (currentGame.currentPlayer === currentGame.player2) {
    playerTurnHeader.innerText = "it's player 2's turn!"
  }
};




/* TO DISPLAY THE ICON IN CORRECT SQUARE
1. Need to create an event listener on the game board container 
2. Need to match the e.target to the particular cell div and update
the innerText of the div to match the token of the currentPlayer
3. Need to have the currentGame.board data updated at the correct
index to match the visual




function addToken() {
  if (e.target.id === 
}







*/
