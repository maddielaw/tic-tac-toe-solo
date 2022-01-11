class Game {
  constructor() {
    this.player1 = new Player('X');
    this.player2 = new Player('O');
    this.board = ["", "", "", "", "", "", "", "", "",];
    this.playerTurn = player1;
  }
  checkPlayerTurn() {
    // code to check whether it's player 1 or 2's turn
    // use conditional -> if this.playerTurn === player1, then this.playerTurn = player2
  }
  playTurn() {
    // Player 1 always starts. In each turn we need to return an object with the player object and the cell that was clicked on.
  }
  checkForEmpty() {
    // will check whether the game board is empty
    // can use loop to look through this.board. if all cells === "" then we can return empty
    // call resetGameBoard()
  }
  checkForFull() {
    // will check if the game board is full
    // can use loop to look through this.board. If each cell is not === "" then we can return full.
  }
  checkForWin() {
    // will check if there's a win
    // need logic to look at each condition for winning, both vertically, horizontally, and diagonally
    // call resetGameBoard()
  }
  checkForDraw() {
    // if checkForFull is true and checkForWin is false, then we can call a draw
    // call resetGameBoard()
  }
  resetGameBoard() {
    // when called will update this.board to it's original state on a timer
  }
}