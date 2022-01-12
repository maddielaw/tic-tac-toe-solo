var Player = require('./player');

class Game {
  constructor() {
    this.player1 = new Player('X');
    this.player2 = new Player('O');
    this.board = ["", "", "",
                  "", "", "",
                  "", "", ""];
    this.playerTurn = player1;
  };
  checkPlayerTurn() {
    // code to check whether it's player 1 or 2's turn
    // use conditional -> if this.playerTurn === player1, then this.playerTurn = player2
  };
  playTurn() {
    // Player 1 always starts on page load. In each turn we need to return an object with the player object and the cell that was clicked on (could have it separated by cell # & column. Column being letter, and cell # being index)
    // Will need to update this.board with correct indices based on the cell that was clicked on (cell 2C corresponds to index 2. cell 7B corresponds to index 7)
  };
  checkForEmpty() {
    for (var i = 0; i < this.board.length; i ++) {
      if (this.board[i] === "") {
        return true;
      }
    }
    // will check whether the game board is empty
    // can use loop to look through this.board. if all cells === "" then we can return true-empty
  };
  checkForFull() {
    var counter = 0;
    for (var i = 0; i < this.board.length; i ++) {
      if (this.board[i]!= "") {
        counter ++
      }
      if (counter === 9) {
        return true
      }
    }
    // will check if the game board is full
    // can use loop to look through this.board. If each cell is != "" then we can return true-full.
    // set a counter variable and run a loop -- add to count each loop and then check at the end if count is === to 9
  };
  checkForWin() {
    var board = currentGame.board;
    var gameWon = false;
    if (board[0] === board[1] && board[0] === board[2]) {
        gameWon = true;
    } else if (board[3] === board[4] && board[3] === board[5]) {
        gameWon = true;
    } else if (board[6] === board[7] && board[6] === board[8]) {
        gameWon = true;
    } else if (board[0] === board[3] && board[0] === board[6]) {
        gameWon = true;
    } else if (board[1] === board[4] && board[1] === board[7]) {
        gameWon = true;
    } else if (board[2] === board[5] && board[2] === board[8]) {
        gameWon = true;
    } else if (board[0] === board[4] && board[0] === board[8]) {
        gameWon = true;
    } else if (board[2] === board[4] && board[2] === board[6]) {
        gameWon = true;
    }
    setTimeout(resetGameBoard(), 10000)
    };
  checkForDraw() {
    if (this.checkForFull() === true && this.checkForWin() === false) {
      setTimeout(resetGameBoard(), 10000)
      return "It's a draw!"
    }
    // if checkForFull is true and checkForWin is false, then we can call a draw
    // call resetGameBoard()
  }
  resetGameBoard() {
    this.board = ["", "", "",
                  "", "", "",
                  "", "", ""];
  };
}

// var currentGame = new Game()


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