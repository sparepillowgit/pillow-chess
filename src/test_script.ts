const pchess = require('./index');

// Create a new game instance. This generates an empty board.
const game = pchess.Game;

// Start a new game with the default rules.
game.newGame({rules: 'standard'});

// Print the ASCII board to the console.
console.log(game.printASCII());

// Print the Unicode board to the console.
console.log(game.printUnicode());

// Move the e2 pawn to e4.
game.movePiece('e2e4');

// Print the Unicode board to the console again to see the move.
// console.log(game.printUnicode());
// console.log(game.board);