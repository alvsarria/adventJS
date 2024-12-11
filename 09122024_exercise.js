/* The elves are playing with a magical train 🚂 that carries gifts. This train moves on a board represented by an array of strings.

The train consists of an engine (@), followed by its carriages (o), and must collect magical fruits (*) which serve as fuel. The movement of the train follows these rules:

You will receive two parameters board and mov.

board is an array of strings that represents the board:

@ is the train's engine.
o are the train's carriages.
* is a magical fruit.
· are empty spaces.
mov is a string that indicates the next movement of the train from the train's head @:

'L': left
'R': right
'U': up
'D': down.
With this information, you must return a string:

'crash': If the train crashes into the edges of the board or itself.
'eat': If the train collects a magical fruit (*).
'none': If it moves without crashing or collecting any magical fruit.
Example:

const board = [
  '·····',
  '*····',
  '@····',
  'o····',
  'o····'
]

console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Because the train moves up and finds a magical fruit

console.log(moveTrain(board, 'D'))
// ➞ 'crash'
// The train moves down and the head crashes into itself

console.log(moveTrain(board, 'L'))
// ➞ 'crash'
// The train moves to the left and crashes into the wall

console.log(moveTrain(board, 'R'))
// ➞ 'none'
// The train moves to the right and there is empty space on the right */

const moveTrain = (board, mov) => {
    const boardFormatted = board.map(element => element.split(''));
    let indexHeadRow, indexHeadColumn;
    boardFormatted.forEach((element, index) => {
        if (element.includes('@')) {
            indexHeadColumn = element.indexOf('@');
            indexHeadRow = index;
        };
    });

    // Second approach using tips from chatgpt
    let newIndexHeadRow = indexHeadRow;
    let newIndexHeadColumn = indexHeadColumn;
    if (mov === 'U') newIndexHeadRow--;
    else if (mov === 'D') newIndexHeadRow++;
    else if (mov === 'L') newIndexHeadColumn--;
    else if (mov === 'R') newIndexHeadColumn++;
    else return 'error';

    if (newIndexHeadRow < 0 || newIndexHeadRow > boardFormatted.length - 1 || newIndexHeadColumn < 0 || newIndexHeadColumn > boardFormatted[0].length - 1) {
        return 'crash'
    };

    const newHead = boardFormatted[newIndexHeadRow][newIndexHeadColumn];

    if (newHead === '*') return 'eat';
    if (newHead === '·') return 'none';
    else return 'crash';

    // Firsth approach using swithc
    // switch (mov) {
    //     case 'U':
    //         outcome = indexHeadRow === 0 ? 'crash' : board[indexHeadRow - 1][indexHeadColumn]
    //         break;
    //     case 'D':
    //         outcome = indexHeadRow === board.length - 1 ? 'crash' : board[indexHeadRow + 1][indexHeadColumn];
    //         break;
    //     case 'L': {
    //         outcome = board[indexHeadRow][indexHeadColumn - 1];
    //         break;
    //     }
    //     case 'R':
    //         outcome = board[indexHeadRow][indexHeadColumn + 1];
    //         break;
    // };
    // switch (outcome) {
    //     case '*':
    //         return 'eat';
    //     case '·':
    //         return 'none';
    //     default:
    //         return 'crash'
    // };
};

const board = [
    '@····',
    '*····',
    '·····',
    '·····',
    '·····'
];


const start = performance.now();

console.log(moveTrain(board, 'D'));

const end = performance.now();
console.log(`Execution time: ${end - start} ms`);