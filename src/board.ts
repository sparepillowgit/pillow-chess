
module.exports = {
    create: function () {
        interface Square {
            occupyingPiece: Piece;
        }

        let board: Record<string, Record<string, Square>> = {
            'a': { '1': { occupyingPiece: {} } },
        };

        return board;
    }
};