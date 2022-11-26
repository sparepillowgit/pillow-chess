
module.exports = {
    create: function () {
        interface Square {
            occupyingPieceId: number | null;
        }

        const board: Record<string, Record<string, Square>> = {};
        const ranks: Record<string, Square> = {};

        // Create ranks to append to board[file]. Doing this here so that
        // I don't have to run a nested for loop for each file.
        ['1', '2', '3', '4', '5', '6', '7', '8'].forEach(rank => {
            ranks[rank] = {occupyingPieceId: null};
        });

        ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].forEach(file => {
            board[file] = ranks;
        });

        return board;
    }
};