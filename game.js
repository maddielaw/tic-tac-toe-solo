class Game {
  constructor() {
    this.player1 = new Player('X');
    this.player2 = new Player('O');
    this.board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ];
    this.playerTurn = player1;
  }
  checkPlayerTurn() {
    // code to check whether it's player 1 or 2's turn
    // use conditional -> if this.playerTurn === player1, then this.playerTurn = player2
  }
  playTurn() {
    // Player 1 always starts on page load. In each turn we need to return an object with the player object and the cell that was clicked on (could have it separated by cell # & column. Column being letter, and cell # being index)
    // Will need to update this.board with correct indices based on the cell that was clicked on (cell 2C corresponds to index 2. cell 7B corresponds to index 7)
  }
  checkForEmpty() {
    // will check whether the game board is empty
    // can use loop to look through this.board. if all cells === "" then we can return true-empty
    // call resetGameBoard()
  }
  checkForFull() {
    // will check if the game board is full
    // can use loop to look through this.board. If each cell is != "" then we can return true-full.
    // set a counter variable and run a loop -- add to count each loop and then check at the end if count is === to 9
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







/* WIN CONDTIONS???

Vertical ~~~~
board[i][0] => left-hand side, vertical
board[i][1] => middle vertical
board[i][2] => right-hand side, vertical

Horizontal ~~~~
board[0][i] => top row, horizontal
board[1][i] => middle row, horizontal
board[2][i] => bottom row, horizontal

Diagonal Ascending (bottom left - top right) ~~~~
board[2][0] => bottom left
board[1][1] => middle
board[0][2] => top right

Diagonal Descending (top left - bottom right) ~~~~
board[0][0] => top left
board[1][1] => middle
board[2][2] => bottom right


- if this.board[i][0] === this.board[i][1]





*/