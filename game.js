
class Game {
  constructor() {
    this.player1 = new Player('X');
    this.player2 = new Player('O');
    this.board = ["", "", "",
                  "", "", "",
                  "", "", ""];
    this.currentPlayer = this.player1;
  };
  playTurn(token, position) {
    this.board[position] = token
    // WORKING IN TERMINAL
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
  updatePlayerWins() {
    this.currentPlayer.wins ++
  }
  checkWinningPlayer() {
    if (this.currentPlayer === this.player1) {
      this.updatePlayerWins();
      this.currentPlayer = this.player2;
      return "player1 wins!"
    } else if (this.currentPlayer === this.player2) {
      this.updatePlayerWins();
      this.currentPlayer = this.player1;
      return "player2 wins!"
    }
    // code to check who most recently played
    // maybe an if statment -> if this.turn = 0, return player 1, else if this.turn = 1 return player 2
  }
  checkForWinOrDraw() {
    var board = this.board;
    if (board[0] === board[1] && board[0] === board[2]) {
        return this.checkWinningPlayer()
    } else if (board[3] === board[4] && board[3] === board[5]) {
        return this.checkWinningPlayer()
    } else if (board[6] === board[7] && board[6] === board[8]) {
        return this.checkWinningPlayer()
    } else if (board[0] === board[3] && board[0] === board[6]) {
        return this.checkWinningPlayer()
    } else if (board[1] === board[4] && board[1] === board[7]) {
        return this.checkWinningPlayer()
    } else if (board[2] === board[5] && board[2] === board[8]) {
        return this.checkWinningPlayer()
    } else if (board[0] === board[4] && board[0] === board[8]) {
        return this.checkWinningPlayer()
    } else if (board[2] === board[4] && board[2] === board[6]) {
        return this.checkWinningPlayer()
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


DRAW CONDITION EXAMPLE
"X", "O", "O", "O", "X", "X", "X", "O", "O"


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
- should know which player's turn it is (can do manually for now)
- Should update the board with their selection (takes in argument of X or O & location?)
- After each turn should run checkForWinOrDraw
- should update this.turn & this.currentPlayer (currently doing that in checkWinningPlayer)
- 

playTurn(token, position) {
  this.board[position] = token
}





*/