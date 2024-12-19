import checkPerformance from './performance.js';

/* The elves at the North Pole have created a special robot 🤖 that helps Santa Claus distribute gifts inside a large warehouse. The robot moves on a 2D plane and we start from the origin (0, 0).

We want to know if, after executing a series of movements, the robot returns to exactly where it started.

The robot's basic commands are:

L: Move to the left
R: Move to the right
U: Move upwards
D: Move downwards
But it also has certain modifiers for the movements:

*: The movement is done with double intensity (e.g., *R means RR)
!: The next movement is inverted (e.g., R!L is considered as RR)
?: The next movement is done only if it hasn't been done before (e.g., R?R means R)
Note: When the movement is inverted with ! the inverted movement is counted and not the original one. For example, !U?U inverts the U movement, so it counts as having done the D movement but not the U. Thus, !U?U translates to D?U, and therefore, the final U movement is done.

You must return:

true: if the robot returns exactly to where it started
[x, y]: if the robot does not return to where it started, return the position where it stopped
isRobotBack('R')     // [1, 0]
isRobotBack('RL')    // true
isRobotBack('RLUD')  // true
isRobotBack('*RU')   // [2, 1]
isRobotBack('R*U')   // [1, 2]
isRobotBack('LLL!R') // [-4, 0]
isRobotBack('R?R')   // [1, 0]
isRobotBack('U?D')   // true
isRobotBack('R!L')   // [2,0]
isRobotBack('U!D')   // [0,2]
isRobotBack('R?L')   // true
isRobotBack('U?U')   // [0,1]
isRobotBack('*U?U')  // [0,2]
isRobotBack('U?D?U') // true

// Step-by-step examples:
isRobotBack('R!U?U') // [1,0]
// 'R'  -> moves to the right 
// '!U' -> inverts and becomes 'D'
// '?U' -> moves upwards, because the 'U' movement hasn't been done yet

isRobotBack('UU!U?D') // [0,1]
// 'U'  -> moves upwards
// 'U'  -> moves upwards
// '!U' -> inverts and becomes 'D'
// '?D' -> does not move, since the 'D' movement has already been done */

const isRobotBack = (moves) => {
    const movesArray = moves.split('');
    const position = [0, 0];
    const instructions = { 'R': 1, 'L': -1, 'U': 1, 'D': -1 };
    const specialInstructions = ['*', '!', '?']
    const movesCleaned = [];
    for (let i = 0; i < movesArray.length; i++) {
        if (specialInstructions.includes(movesArray[i])) {
            if (movesArray[i] === '*') {
                movesCleaned.push(movesArray[i + 1]);
                movesCleaned.push(movesArray[i + 1]);
            } else if (movesArray[i] === '!') {
                if (movesArray[i + 1] === 'R') {
                    movesCleaned.push('L');
                } else if (movesArray[i + 1] === 'L') {
                    movesCleaned.push('R');
                } else if (movesArray[i + 1] === 'U') {
                    movesCleaned.push('D');
                } else {
                    movesCleaned.push('U');
                }
            } else {
                if (!movesCleaned.includes(movesArray[i + 1])) {
                    movesCleaned.push(movesArray[i + 1]);
                };
            }
            i += 1;
        } else {
            movesCleaned.push(movesArray[i]);
        };
    };
    movesCleaned.forEach(instruction => {
        if (['R','L'].includes(instruction)) {
            position[0] += instructions[instruction]
        } else {
            position[1] += instructions[instruction]
        };
    });
    if (position.reduce((acc, cum) => acc + cum, 0) === 0) {
        return true;
    } else {
        return position;
    };
};

checkPerformance(isRobotBack('LLL!R'));
