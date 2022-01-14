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

function takeTurn(e) {
  if (currentGame.board[e.target.id] === "") {
    createPlayerToken(e);
    currentGame.playTurn(e.target.id);
    updatePlayerWins();
    updatePlayerBanner();
  };
  alertWinner();
  alertDraw();
  setTimeout(resetBoardView, 10000)
}

function resetBoardView() {
    if (currentGame.gameWon || currentGame.gameCompleted) {
      gameBoard.innerHTML = `
      <div class="game-board-boxes" id="0"></div>
      <div class="game-board-boxes" id="1"></div>
      <div class="game-board-boxes" id="2"></div>
      <div class="game-board-boxes" id="3"></div>
      <div class="game-board-boxes" id="4"></div>
      <div class="game-board-boxes" id="5"></div>
      <div class="game-board-boxes" id="6"></div>
      <div class="game-board-boxes" id="7"></div>
      <div class="game-board-boxes" id="8"></div>`
    }
    updatePlayerBanner();
    currentGame.gameCompleted = false;
    currentGame.gameWon = false;
}

function createPlayerToken(e) {
  if (currentGame.currentPlayer === currentGame.player1) {
    e.target.innerHTML = `
    <div class="game-board-boxes" id="${e.target}">
      <i class="fas fa-campground"></i>
    </div>`
  } else if (currentGame.currentPlayer === currentGame.player2) {
    e.target.innerHTML = `
    <div class="game-board-boxes" id="${e.target}">
      <i class="fas fa-tree"></i>
    </div>`
  }
}

function updatePlayerBanner() {
  if (currentGame.currentPlayer === currentGame.player1) {
    playerTurnHeader.innerText = "it's player 1's turn!"
  } else if (currentGame.currentPlayer === currentGame.player2) {
    playerTurnHeader.innerText = "it's player 2's turn!"
  }
};

function updatePlayerWins() {
    player1WinCounter.innerText = `${currentGame.player1.wins} wins`;
    player2WinCounter.innerText = `${currentGame.player2.wins} wins`;
}

// needs to update top banner innerText to be winner message for a period
function alertWinner() {
  if (currentGame.gameWon) {
    playerTurnHeader.innerText = `woo! ${currentGame.winnerOfLastGame.name} won!`
  } 
}

//needs to update top banner innerText to show draw message
function alertDraw() {
  if (currentGame.gameCompleted) {
    playerTurnHeader.innerText = `bummer! looks like a draw!`
  }
}


/* 
TO DO: need to find way to disable board after a win (in time before the
board resets) -> maybe a disable board function that resetBoardView can go inside of?
Then only the reset board view needs to be on a timer, the disable function can
run first.


*/