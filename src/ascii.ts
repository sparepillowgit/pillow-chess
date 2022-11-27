module.exports = {
    print: function (boardState: Board): string {
        const squares = boardState.squares;

        for (const file in squares) {
            let printLine = '';

            for (const rank in squares[file]) {
                
            }
        }

        return '...';
    }
};