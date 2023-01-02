const parsePawnMove = (board: Board, notation: string): parsedNotation => {
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
    parse: function(board: Board, notation: string): parsedNotation {
        return parsePawnMove(board, notation);
    }
}
