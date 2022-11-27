type Piece = {
    id: number;
    type: 'rook' | 'knight' | 'bishop' | 'queen' | 'king' | 'pawn';
    value: number;
    color: 'white' | 'black';
}