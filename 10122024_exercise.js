/* The elf programmers are creating a small magical assembler to control the machines in Santa Claus's workshop.

To assist them, we will implement a simple interpreter that supports the following magical instructions:

MOV x y: Copies the value x (which can be a number or the content of a register) into register y
INC x: Increments the content of register x by 1
DEC x: Decrements the content of register x by 1
JMP x y: If the value in register x is 0, then jumps to the instruction at index y and continues executing the program from there.
Expected behavior:
If an attempt is made to access, increment, or decrement a register that has not been initialized, the default value 0 will be used.
The jump with JMP is absolute and goes to the exact index indicated by y.
Upon completion, the program should return the content of register A. If A did not have a defined value, it returns undefined.
const instructions = [
  'MOV -1 C', // copies -1 to register 'C',
  'INC C', // increments the value of register 'C'
  'JMP C 1', // jumps to the instruction at index 1 if 'C' is 0
  'MOV C A', // copies register 'C' to register 'A',
  'INC A' // increments the value of register 'A'
]

compile(instructions) // -> 2


 Step-by-step execution:
0 0: MOV -1 C -> The register C receives the value -1
1 1: INC C    -> The register C becomes 0
2 2: JMP C 1  -> C is 0, jumps to the instruction at index 1
3 1: INC C    -> The register C becomes 1
4 2: JMP C 1  -> C is 1, the instruction is ignored
5 3: MOV C A  -> Copies register C to A. Now A is 1
6 4: INC A    -> The register A becomes 2
*/

const instructions = [
    'MOV -1 C', // copies -1 to register 'C',
    'INC C', // increments the value of register 'C'
    'JMP C 1', // jumps to the instruction at index 1 if 'C' is 0
    'MOV C A', // copies register 'C' to register 'A',
    'INC A' // increments the value of register 'A'
];

const compile = (instructions) => {
    const database = {};
    let indexLoop = 0;
    const robotAction = (database, instruction) => {
        const action = instruction.slice(0, 3);
        const register = instruction.split(' ')[1];
        if (action === 'JMP') {
            if (!database[register]) database[register] = 0;
            if (database[register] === 0) indexLoop = Number(instruction.split(' ')[2]) - 1;
        } else if (action === 'INC') {
            if (!database[register]) database[register] = 0;
            database[register]++;
        } else if (action === 'DEC') {
            if (!database[register]) database[register] = 0;
            database[register]--;
        } else if (action === 'MOV') {
            if (!Number.isNaN(Number(register))) {
                database[instruction.split(' ')[2]] = Number(register);
            } else {
                database[instruction.split(' ')[2]] = database[register];
            };
        }
    };
    while (indexLoop < instructions.length) {
        robotAction(database, instructions[indexLoop])
        indexLoop++;
    };
    return database['A'];
};

const start = performance.now();

console.log(compile(instructions));

const end = performance.now();
console.log(`Execution time: ${end - start} ms`);


