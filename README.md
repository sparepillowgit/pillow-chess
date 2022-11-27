# Pillow Chess

You'll find this just-for-fun chess engine is riddled with suboptimal code as this was an exercise in problem solving, which meant no Googling for optimal solutions.

## Installation

```
$ npm install @sparepillowgit/pillow-chess
```

## Usage

```
const pchess = require('pillow-chess');
```

###### Create an empty board:
```
let boardState = pchess.board.create();
```

###### Place pieces using standard chess rules:
```
boardState = pchess.board.newGame(boardState, {rules: 'standard'});
```

###### Move a piece:
```
boardState = pchess.piece.movePiece(boardState, {move: 'Nf3'});
```

## ASCII & Unicode

You can generate an ASCII or Unicode output of a board state:

###### ASCII:
```
let ascii = pchess.display.ascii(boardState);
```

###### Unicode (experimental):
```
let unicode = pchess.display.unicode(boardState);
```

###### Example output:
```
console.log(ascii);

>    +---+---+---+---+---+---+---+---+
>  8 | r | n | b | q | k | b | n | r |
>    +---+---+---+---+---+---+---+---+
>  7 | p | p | p | p | p | p | p | p |
>    +---+---+---+---+---+---+---+---+
>  6 |   |   |   |   |   |   |   |   |
>    +---+---+---+---+---+---+---+---+
>  5 |   |   |   |   |   |   |   |   |
>    +---+---+---+---+---+---+---+---+
>  4 |   |   |   |   |   |   |   |   |
>    +---+---+---+---+---+---+---+---+
>  3 |   |   |   |   |   |   |   |   |
>    +---+---+---+---+---+---+---+---+
>  2 | P | P | P | P | P | P | P | P |
>    +---+---+---+---+---+---+---+---+
>  1 | R | N | B | Q | K | B | N | R |
>    +---+---+---+---+---+---+---+---+
>      a   b   c   d   e   f   g   h
```