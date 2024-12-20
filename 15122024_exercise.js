import checkPerformance from './performance.js';

/* ChatGPT has arrived at the North Pole and the elf Sam Elfman is working on an application for managing gifts and children.

To enhance the presentation, he wants to create a function drawTable that receives an array of objects and converts it into a text table.

The drawn table should represent the object data as follows:

It has a header with the column name.
The column name has the first letter capitalized.
Each row should contain the values of the objects in the corresponding order.
Each value must be left-aligned.
Fields always leave a space on the left.
Fields leave the necessary space on the right to align the box.
Look at the example to see how you should draw the table:

drawTable([
  { name: 'Alice', city: 'London' },
  { name: 'Bob', city: 'Paris' },
  { name: 'Charlie', city: 'New York' }
])
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

drawTable([
  { gift: 'Doll', quantity: 10 },
  { gift: 'Book', quantity: 5 },
  { gift: 'Music CD', quantity: 1 }
])
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+ */

const drawTable = (data) => {
    let outputTable = [];
    const tableHeaders = Object.keys(data[0]);
    const maxLengthColumn = tableHeaders.map(key => {
        const columnWidth = data.map(row => String(row[key]).length);
        columnWidth.push(key.length);
        return Math.max(...columnWidth);
    });
    for (let i = 0; i < data.length + 4; i++) {
        if ([0, 2, data.length + 3].includes(i)) {
            const tableRow = maxLengthColumn.map(length => {
                return '+-' + '-'.repeat(length) + '-';
            });
            outputTable.push(tableRow.join('') + '+');
        } else if (i === 1) {
            const tableRow = maxLengthColumn.map((length, index) => {
                let rowHeader = String(tableHeaders[index]);
                rowHeader = isNaN(Number(rowHeader)) ? rowHeader.slice(0, 1).toUpperCase() + rowHeader.slice(1) : rowHeader;
                return '| ' + rowHeader + ' '.repeat(length - rowHeader.length) + ' ';
            });
            outputTable.push(tableRow.join('') + '|');
        } else {
            const tableRow = maxLengthColumn.map((length, index) => {
                let rowValue = String(data[i - 3][tableHeaders[index]]);
                return '| ' + rowValue + ' '.repeat(length - rowValue.length) + ' ';
            });
            outputTable.push(tableRow.join('') + '|');
        }
    };
    return outputTable.join('\n');
};

checkPerformance(drawTable([
    { gift: 'Doll', quantity: 10 },
    { gift: 'Book', quantity: 5 },
    { gift: 'Music CD', quantity: 1 }
]));
