function generateSquares(): Record<string, Record<number, Square>> {
	const squares: Record<string, Record<number, Square>> = {};

	['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].forEach((file: string) => {
		const ranks: Record<number, Square> = {};

		[1, 2, 3, 4, 5, 6, 7, 8].forEach((rank: number) => {
			ranks[rank] = {};
		});

		squares[file] = ranks;
	});

	return squares;
}

module.exports = {
	clearBoard: function(): Board {
		const board: Board = {
			squares: generateSquares(),
			moves: [],
			turn: 'white'
		}

		return board;
	},
	newGame: function(board: Board, settings: {rules: string}): Board {
		// Import rules file.
		const rules = require(`./rules/${settings.rules}`);

		// Check sides.
		for (const color in rules.pieces) {

			// Check piece types.
			for (const piece in rules.pieces[color]) {

				// Check piece positions.
				rules.pieces[color][piece].positions.forEach((position: {file: string, rank: number}) => {
					board.squares[position.file][position.rank].piece = {
						id: 1,
						type: piece,
						value: rules.pieces[color][piece].value,
						symbol: rules.pieces[color][piece].symbol,
						color: color
					}
				});
			}
		}

		return board;
	}
};