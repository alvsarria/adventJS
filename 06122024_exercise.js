/* We have already wrapped hundreds of presents 🎁… but an elf forgot to check if the present, represented by an asterisk *, is inside the box.

The box has a present (*) and counts as "inside the box" if:

It is completely surrounded by # on the box's edges.
The * is not on the box's edges.
Keep in mind that the * can be inside, outside, or may not even be there. We must return true if the * is inside the box and false otherwise.

Examples:

inBox([
  "###",
  "#*#",
  "###"
]) // ➞ true

inBox([
  "####",
  "#* #",
  "#  #",
  "####"
]) // ➞ true

inBox([
  "*####",
  "#   #",
  "#  #*",
  "####"
]) // ➞ false

inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
]) // ➞ false */

/* 

first approach

const inBox = (box) => {
    const firstRow = box[0];
    const lastRow = box[box.length - 1];
    if (!firstRow.slice(firstRow.indexOf('#'), firstRow.lastIndexOf('#') + 1).split('').every(char => char === '#') || !lastRow.slice(lastRow.indexOf('#'), lastRow.lastIndexOf('#') + 1).split('').every(char => char === '#')) {
        return false
    } else {
        const presentInBox = [];
        box.slice(1, box.length - 1).forEach(element => presentInBox.push(element.slice(1, -1).includes('*')));
        return presentInBox.some(x => x === true);
    };
}; */

const inBox = (box) => {
    const boxOrganised = box.map(boxRow => {
        const boxRowElements = boxRow.split('');
        return boxRowElements.slice(boxRowElements.indexOf('#') + 1, boxRowElements.lastIndexOf('#'));
    });
    const boxBoundaries = [boxOrganised[0], boxOrganised[boxOrganised.length - 1]];
    const boxInside = boxOrganised.slice(1, -1);
    return boxInside.flat().includes('*') && boxBoundaries.flat().every(element => element === "#");
};

const start = performance.now();

console.log(inBox([
    "#####",
    "# *  #",
    "#   #",
    "#   #",
    "#####"
]));

const end = performance.now();
console.log(`Execution time: ${end - start} ms`);