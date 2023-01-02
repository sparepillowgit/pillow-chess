type Board = {
	squares: Record<string, Record<number, Square>>;
	moves: [string, string][];
	turn: 'white' | 'black';
}

type Square = {
	piece?: Piece;
}
