function parseBoardState(board: Board, options: {format: string}): string[] {
    const lines: string[] = [];

    for (const file in board.squares) {
        for (const rank in board.squares[file]) {
            if (lines[parseInt(rank) - 1] === undefined) lines[parseInt(rank) - 1] = ` ${rank} | `;

            if (board.squares[file][rank].piece) {
                switch (options.format) {
                    case 'unicode':
                        lines[parseInt(rank) - 1] += board.squares[file][rank].piece?.symbol.unicode;
                        break;
                    case 'ascii':
                        lines[parseInt(rank) - 1] += board.squares[file][rank].piece?.symbol.ascii;
                        break;
                }

                lines[parseInt(rank) - 1] += ' | ';
            } else {
                lines[parseInt(rank) - 1] += '  | ';
            }
        }
    }

    // Insert file labels.
    lines.splice(0 , 0, '     a   b   c   d   e   f   g   h  ');

    // Insert rank separators.
    for (let i = 0; i < lines.length; i++) {
        lines.splice(i + 1, 0, '   |---|---|---|---|---|---|---|---|');
        i++;
    }

    return lines.reverse();
}

module.exports = {
    ascii: function (board: Board): string {
        let output: string[] = parseBoardState(board, {format: 'ascii'});

        return output.join('\n');
    },
    unicode: function (board: Board): string {
        // Unicode support is experimental. Characters don't line up correctly.

        let output: string[] = parseBoardState(board, {format: 'unicode'});

        return output.join('\n');
    }
};
