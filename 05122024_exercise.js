/* Santa Claus's elves 🧝🧝‍♂️ have found a bunch of mismatched magic boots in the workshop. Each boot is described by two values:

type indicates if it's a left boot (I) or a right boot (R).
size indicates the size of the boot.
Your task is to help the elves pair all the boots of the same size having a left and a right one. To do this, you should return a list of the available boots after pairing them.

Note: You can have more than one pair of boots of the same size!

const shoes = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
]

organizeShoes(shoes)
// [38, 42]

const shoes2 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'I', size: 38 },
  { type: 'I', size: 38 },
  { type: 'R', size: 38 }
]
// [38, 38]

const shoes3 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 36 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 43 }
]

organizeShoes(shoes3)
// [] */

const shoes3 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'I', size: 38 },
    { type: 'I', size: 38 },
    { type: 'R', size: 38 }
];

const organizeShoes = (shoes) => {
    const availableShoes = [];
    const shoesBySize = {};
    shoes.forEach(shoe => {
        if (!shoesBySize[shoe.size]) {
            shoesBySize[shoe.size] = [];
        };
        shoesBySize[shoe.size].push(shoe.type);
        if (shoesBySize[shoe.size].filter(a => a === "I").length >= 1 && shoesBySize[shoe.size].filter(a => a === "R").length >= 1) {
            availableShoes.push(shoe.size);
            shoesBySize[shoe.size].splice(shoesBySize[shoe.size].indexOf("I"), 1);
            shoesBySize[shoe.size].splice(shoesBySize[shoe.size].indexOf("R"), 1);
        };
    });
    return availableShoes;
};

const start = performance.now();

console.log(organizeShoes(shoes3));

const end = performance.now();
console.log(`Execution time: ${end - start} ms`);
