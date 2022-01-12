
class Game {
  constructor() {
    this.player1 = new Player('X');
    this.player2 = new Player('O');
    this.board = ["", "", "",
                  "", "", "",
                  "", "", ""];
    this.currentPlayer = this.player1;
    this.turn = 0;
  };
  checkPlayerTurn() {
    if (this.turn = 0) {
      this.currentPlayer = this.player1
    } else if (this.turn = 1) {
      this.currentPlayer = this.player2
    }
    // if (this.currentPlayer === this.player1) {
    //   this.currentPlayer = this.player2
    // } else if (this.currentPlayer === this.player2) {
    //   this.currentPlayer = this.player1
    // }
    // WORKING IN TERMINAL
  };
  playTurn() {

    // Player 1 always starts on page load. In each turn we need to return an object with the player object and the cell that was clicked on (could have it separated by cell # & column. Column being letter, and cell # being index)
    // Will need to update this.board with correct indices based on the cell that was clicked on (cell 2C corresponds to index 2. cell 7B corresponds to index 7)
  };
  checkForEmpty() {
    if (this.board.includes("X") || this.board.includes("O")) {
      return false
    } else {
      return true
    }
    // WORKING IN TERMINAL
  };
  checkForFull() {
    if (this.board.includes("")) {
      return false
      } else {
        return true
      }
    // WORKING IN TERMINAL
  };
  checkWinningPlayer() {
    if (this.turn === 0) {
      return "player1 wins!"
    } else if (this.turn === 1) {
      return "player2 wins!"
    }
    // code to check who most recently played
    // maybe an if statment -> if this.turn = 0, return player 1, else if this.turn = 1 return player 2
  }
  checkForWinOrDraw() {
    var board = this.board;
    if (board[0] === board[1] && board[0] === board[2]) {
        return this.checkWinningPlayer()
        // return "It's a win!"
    } else if (board[3] === board[4] && board[3] === board[5]) {
        return this.checkWinningPlayer()
        // return "It's a win!"
    } else if (board[6] === board[7] && board[6] === board[8]) {
        return this.checkWinningPlayer()
        // return "It's a win!"
    } else if (board[0] === board[3] && board[0] === board[6]) {
        return this.checkWinningPlayer()
        // return "It's a win!"
    } else if (board[1] === board[4] && board[1] === board[7]) {
        return this.checkWinningPlayer()
        // return "It's a win!"
    } else if (board[2] === board[5] && board[2] === board[8]) {
        return this.checkWinningPlayer()
        // return "It's a win!"
    } else if (board[0] === board[4] && board[0] === board[8]) {
        return this.checkWinningPlayer()
        // return "It's a win!"
    } else if (board[2] === board[4] && board[2] === board[6]) {
        return this.checkWinningPlayer()
        // return "It's a win!"
    } else if (!board.includes("")) {
        return "It's a draw!"
    }
    // setTimeout(resetGameBoard(), 10000)
    // WORKS IN TERMINAL
    };
  resetGameBoard() {
    this.board = ["", "", "",
                  "", "", "",
                  "", "", ""];
  };
  // WORKS IN TERMINAL
}






/* 


WIN CONDTIONS
var winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];



When player takes a turn:
- should know which player's turn it is
- Should update the board with their selection (takes in argument of X or O & location?)
- After each turn should check for win or draw condition
- 







*/