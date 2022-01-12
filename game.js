
class Game {
  constructor() {
    this.player1 = new Player('X');
    this.player2 = new Player('O');
    this.board = ["", "", "",
                  "", "", "",
                  "", "", ""];
    this.playerTurn = this.player1;
  };
  checkPlayerTurn() {
    if (this.playerTurn === this.player1) {
      this.playerTurn = this.player2
    } else if (this.playerTurn === this.player2) {
      this.playerTurn = this.player1
    }
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
    // will check whether the game board is empty
  };
  checkForFull() {
    if (this.board.includes("")) {
      return false
      } else {
        return true
      }
    // WORKING IN TERMINAL
    // will check if the game board is full
  };
  checkForWinOrDraw() {
    var board = this.board;
    var gameWon = false;
    if (board[0] === board[1] && board[0] === board[2]) {
        gameWon = true;
        return "It's a win!"
    } else if (board[3] === board[4] && board[3] === board[5]) {
        gameWon = true;
        return "It's a win!"
    } else if (board[6] === board[7] && board[6] === board[8]) {
        gameWon = true;
        return "It's a win!"
    } else if (board[0] === board[3] && board[0] === board[6]) {
        gameWon = true;
        return "It's a win!"
    } else if (board[1] === board[4] && board[1] === board[7]) {
        gameWon = true;
        return "It's a win!"
    } else if (board[2] === board[5] && board[2] === board[8]) {
        gameWon = true;
        return "It's a win!"
    } else if (board[0] === board[4] && board[0] === board[8]) {
        gameWon = true;
        return "It's a win!"
    } else if (board[2] === board[4] && board[2] === board[6]) {
        gameWon = true;
        return "It's a win!"
    } else if (!board.includes("")) {
      return "It's a draw!"
    }
    setTimeout(resetGameBoard(), 10000)
    // WORKS IN TERMINAL
    };
  resetGameBoard() {
    this.board = ["", "", "",
                  "", "", "",
                  "", "", ""];
  };
  // WORKS IN TERMINAL
}






/* WIN CONDTIONS???

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


function checkForWin() {
  var board = currentGame.board;
  if (board[0] === board[1] && board[0] === board[2]) {
    return "You won!"
  } else if (board[3] === board[4] && board[3] === board[5]) {
    return "You won!"
  } else if (board[6] === board[7] && board[6] === board[8]) {
    return "You won!"
  } else if (board[0] === board[3] && board[0] === board[6]) {
    return "You won!"
  } else if (board[1] === board[4] && board[1] === board[7]) {
    return "You won!"
  } else if (board[2] === board[5] && board[2] === board[8]) {
    return "You won!"
  } else if (board[0] === board[4] && board[0] === board[8]) {
    return "You won!"
  } else if (board[2] === board[4] && board[2] === board[6]) {
    return "You won!"
  }
} 






*/