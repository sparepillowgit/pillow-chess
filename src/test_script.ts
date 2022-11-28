const Game = require('./index');

// Create a new game instance. This generates an empty board.
const game = new Game;

// Start a new game with the default rules.
game.newGame({rules: 'standard'});

// Print the ASCII board to the console.
console.log(game.printASCII());

// Move the e2 pawn.
game.movePiece('e4');