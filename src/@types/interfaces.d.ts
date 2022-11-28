interface Square {
	piece?: Piece;
}

interface Board {
	squares: Record<string, Record<number, Square>>;
	moves: [string, string][];
	turn: 'white' | 'black';
}

interface parsedNotation {
	from?: {
		file: number,
		rank: string
	},
	to?: {
		file: number,
		rank: string
	}
}