
class Game {
  constructor() {
    this.player1 = new Player('X');
    this.player2 = new Player('O');
    this.board = ["", "", "",
                  "", "", "",
                  "", "", ""];
    this.currentPlayer = this.player1;
    this.previousPlayer = null;
    this.winnerOfLastGame = null;
  };
  playTurn(position) {
    if (this.board[position] === "") {
      this.board[position] = this.currentPlayer.token
      this.checkForWinOrDraw();
    }
  };
  switchPlayers() {
    if (this.currentPlayer === this.player1) {
      this.previousPlayer = this.player1;
      this.currentPlayer = this.player2;
    } else if (this.currentPlayer === this.player2) {
      this.previousPlayer = this.player2;
      this.currentPlayer = this.player1;
    }
  };
  checkWinningPlayer() {
    if (this.currentPlayer === this.player1) {
      this.currentPlayer.wins ++;
      this.winnerOfLastGame = this.player1;
      this.resetGameBoard();
      console.log('player1 -X wins')
      return "player1 -X wins!"
    } else if (this.currentPlayer === this.player2) {
      this.currentPlayer.wins ++;
      this.winnerOfLastGame = this.player2;
      this.resetGameBoard();
      console.log('player2 -O wins')
      return "player2 -O wins!"
    }
  };
  checkForWinOrDraw() {
    var winningCombos = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]];
    for (var i = 0; i < 8; i ++) {
      var win = winningCombos[i];
      if (this.board[win[0]] === this.board[win[1]] && this.board[win[0]] === this.board[win[2]] && 
          this.board[win[0]] != "" && this.board[win[1]] != "" && this.board[win[2]] != "") {
            return this.checkWinningPlayer();
        }
      }
    if (!this.board.includes("")) {
      console.log('Draw!')
      this.resetGameBoard();
    } else {
      this.switchPlayers();
      return "No win yet! Keep playing!"
    }
  };
  resetGameBoard() {
    this.switchPlayers();
    this.board = ["", "", "",
                    "", "", "",
                    "", "", ""];
  };
};






/* 
DRAW CONDITION EXAMPLE

currentGame.playTurn(0)
currentGame.playTurn(2)
currentGame.playTurn(4)
currentGame.playTurn(8)
currentGame.playTurn(5)
currentGame.playTurn(7)
currentGame.playTurn(6)
currentGame.playTurn(3)
currentGame.playTurn(1)
-> ends with X


X WINS EXAMPLE

currentGame.playTurn(0)
currentGame.playTurn(5)
currentGame.playTurn(1)
currentGame.playTurn(8)
currentGame.playTurn(2)

O WINS EXAMPLE

currentGame.playTurn(5)
currentGame.playTurn(0)
currentGame.playTurn(8)
currentGame.playTurn(1)
currentGame.playTurn(6)
currentGame.playTurn(2)




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


checkForWinOrDraw() {
    console.log('check for win or draw')
    var board = this.board;
    var gameWon = false;
    if (board[0] === board[1] && board[0] === board[2]) {
        gameWon = true;
        return this.checkWinningPlayer()
    } else if (board[3] === board[4] && board[3] === board[5]) {
        gameWon = true;
          this.checkWinningPlayer()
    } else if (board[6] === board[7] && board[6] === board[8]) {
        gameWon = true;
        return this.checkWinningPlayer()
    } else if (board[0] === board[3] && board[0] === board[6]) {
        gameWon = true;
        return this.checkWinningPlayer()
    } else if (board[1] === board[4] && board[1] === board[7]) {
        gameWon = true;
        return this.checkWinningPlayer()
    } else if (board[2] === board[5] && board[2] === board[8]) {
        gameWon = true;
        return this.checkWinningPlayer()
    } else if (board[0] === board[4] && board[0] === board[8]) {
        gameWon = true;
        return this.checkWinningPlayer()
    } else if (board[2] === board[4] && board[2] === board[6]) {
        gameWon = true;
        return this.checkWinningPlayer()
    } else if (!board.includes("")) {
        this.resetForDraw()
        return "It's a draw!"
    }

  };




  checkForEmpty() {
    if (this.board.includes("X") || this.board.includes("O")) {
      return false
    } else {
      return true
    }
  };
  checkForFull() {
    if (this.board.includes("")) {
      return false
      } else {
        return true
      }
  };


*/