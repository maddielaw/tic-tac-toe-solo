/* QUERY SELECTORS GO HERE */

var gameBoard = document.querySelector('.game-board-container');
var playerTurnHeader = document.querySelector('.main-player-turn-header');
var player1WinCounter = document.querySelector('.left-player-wins');
var player2WinCounter = document.querySelector('.right-player-wins');

/* EVENT LISTENERS GO HERE */

window.addEventListener('load', loadNewGame);
gameBoard.addEventListener('click', takeTurn);

/* GLOBAL VARIABLE GOES HERE */

var currentGame;

/* EVENT HANDLERS & FUNCTIONS GO HERE */

function loadNewGame() {
  currentGame = new Game();
};

function takeTurn(e) {
  enableGameBoard()
  if (currentGame.board[e.target.id] === "") {
    createPlayerToken(e);
    currentGame.playTurn(e.target.id);
    updatePlayerWins();
    updatePlayerBanner();
  };
  alertWinner();
  alertDraw();
  handleBoardReset();
};

function handleBoardReset() {
  if (currentGame.gameWon || currentGame.gameCompleted) {
    gameBoard.removeEventListener('click', takeTurn)
    setTimeout(resetBoardView, 5000);
  };
};

function resetBoardView() {
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
    updatePlayerBanner();
    gameBoard.addEventListener('click', takeTurn);
    currentGame.gameCompleted = false;
    currentGame.gameWon = false;
};

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
  };
};

function updatePlayerBanner() {
  if (currentGame.currentPlayer === currentGame.player1) {
    playerTurnHeader.innerText = "it's player 1's turn!"
  } else if (currentGame.currentPlayer === currentGame.player2) {
    playerTurnHeader.innerText = "it's player 2's turn!"
  };
};

function updatePlayerWins() {
    player1WinCounter.innerText = `${currentGame.player1.wins} wins`;
    player2WinCounter.innerText = `${currentGame.player2.wins} wins`;
};

function alertWinner() {
  if (currentGame.gameWon) {
    playerTurnHeader.innerText = `woo! ${currentGame.winnerOfLastGame.name} won!`
  };
  addBannerAnimation()
  setTimeout(removeBannerAnimation, 600)
};

function alertDraw() {
  if (currentGame.gameCompleted) {
    playerTurnHeader.innerText = `bummer! looks like a draw!`
  };
};

function enableGameBoard() {
  gameBoard.disabled = false;
};

function addBannerAnimation() {
  playerTurnHeader.classList.add('turn-animation')
};

function removeBannerAnimation() {
  playerTurnHeader.classList.remove('turn-animation')
};


/* 
Priorities:
- bug squashing!
- responsive design across mobile, tablet, and desktop
   > desktop: 1059px - 1440px -> looks good!

   > BREAKS at 1199px (need to make header smaller font)
   > BREAKS at 1050px (need to make header two lines)

   > laptop: 1024px -> need to make header two lines
   > tablet: 768px -> need to make header two lines

   > BREAKS at 550px -> need to push the board up, weird spacing between main elements
   > iPhone: 375px -> ""

- local storage

*/