
class Game {
  constructor() {
    this.player1 = new Player("player 1", '<i class="fas fa-campground"></i>');
    this.player2 = new Player("player 2", '<i class="fas fa-tree"></i>');
    this.board = ["", "", "",
                  "", "", "",
                  "", "", ""];
    this.currentPlayer = this.player1;
    this.previousPlayer = null;
    this.winnerOfLastGame = null;
    this.gameCompleted = false;
    this.gameWon = false;
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
  handleWinningPlayer() {
    if (this.currentPlayer === this.player1) {
      this.gameWon = true;
      this.currentPlayer.wins ++;
      this.winnerOfLastGame = this.player1;
      this.resetGameBoard();
    } else if (this.currentPlayer === this.player2) {
      this.gameWon = true;
      this.currentPlayer.wins ++;
      this.winnerOfLastGame = this.player2;
      this.resetGameBoard();
    }
  };
  checkForWinOrDraw() {
    var winningCombos = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]];
    for (var i = 0; i < 8; i ++) {
      var win = winningCombos[i];
      if (this.board[win[0]] === this.board[win[1]] && this.board[win[0]] === this.board[win[2]] && 
          this.board[win[0]] != "" && this.board[win[1]] != "" && this.board[win[2]] != "") {
            return this.handleWinningPlayer();
        }
      }
    if (!this.board.includes("")) {
      this.gameCompleted = true;
      this.resetGameBoard();
    } else {
      this.switchPlayers();
    }
  };
  resetGameBoard() {
    this.switchPlayers();
    this.board = ["", "", "",
                    "", "", "",
                    "", "", ""];
  };
};