module.exports = {
	move: function (): Board {
		const board: Board = {
			squares: generateSquares()
		}

		return board;
	},
};