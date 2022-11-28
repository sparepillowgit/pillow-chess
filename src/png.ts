var boardGrid = require('./lookup_tables/board_grid');

const parsePawnMove = (board: Board, notation: string): parsedNotation => {
	console.log(board.turn);
	console.log(boardGrid);

	const parsedNotation: parsedNotation = {
		from: {
			file: 'a',
			rank: '1'
		},
		to: {
			file: notation[0],
			rank: notation[1]
		}
	};

	return parsedNotation;
}

module.exports = {
	parseNotation: function(board: Board, notation: string): parsedNotation {
		let parsedNotation: parsedNotation = {};

		switch (notation.length) {
			case 2:
				// This is a pawn move.
				parsedNotation = parsePawnMove(board, notation);
				break;
		}

		console.log(parsedNotation);

		return parsedNotation;
	}
}