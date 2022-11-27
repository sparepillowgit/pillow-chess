const pchess = require('./index');

// Create an empty board.
let boardState = pchess.board.create();

// Place pieces on the board.
boardState = pchess.board.newGame(boardState, {rules: 'standard'});

console.log(boardState);