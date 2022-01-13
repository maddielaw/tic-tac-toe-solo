/* QUERY SELECTORS GO HERE */





/* EVENT LISTENERS GO HERE */


window.addEventListener('load', loadNewGame)





/* GLOBAL VARIABLES GO HERE */


var currentGame;





/* EVENT HANDLERS & FUNCTIONS GO HERE */

function loadNewGame() {
  currentGame = new Game();
}
