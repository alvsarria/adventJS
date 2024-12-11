/* The grinch 👹 has passed through Santa Claus's workshop! And what a mess he has made. He has changed the order of some packages, so shipments cannot be made.

Luckily, the elf Pheralb has detected the pattern the grinch followed to jumble them. He has written the rules that we must follow to reorder the packages. The instructions are as follows:

You will receive a string containing letters and parentheses.
Every time you find a pair of parentheses, you need to reverse the content within them.
If there are nested parentheses, solve the innermost ones first.
Return the resulting string with parentheses removed, but with the content correctly reversed.
He left us some examples:

fixPackages('a(cb)de')
// ➞ "abcde"
// We reverse "cb" inside the parentheses

fixPackages('a(bc(def)g)h')
// ➞ "agdefcbh"
// 1st we reverse "def" → "fed", then we reverse "bcfedg" → "gdefcb"

fixPackages('abc(def(gh)i)jk')
// ➞ "abcighfedjk"
// 1st we reverse "gh" → "hg", then "defhgi" → "ighfed"

fixPackages('a(b(c))e')
// ➞ "acbe"
// 1st we reverse "c" → "c", then "bc" → "cb" */

const fixPackages = (packages) => {
    if (!packages.includes('(')) {
        return packages;
    };
    const innerWrapIndexLeft = packages.lastIndexOf('(');
    const innerWrapIndexRight = packages.indexOf(')', innerWrapIndexLeft);
    const wrappedGiftReversed = packages.slice(innerWrapIndexLeft + 1, innerWrapIndexRight).split('').reverse().join('');
    const updatedPackage = packages.slice(0, innerWrapIndexLeft) + wrappedGiftReversed + packages.slice(innerWrapIndexRight + 1);
    return fixPackages(updatedPackage);
};

/* 

Solution with ChatGPT 5 stars!›

const fixPackages = (packages) => {
    while (packages.includes('(')) {
        // Find the innermost pair of parentheses
        const innerWrapIndexLeft = packages.lastIndexOf('(');
        const innerWrapIndexRight = packages.indexOf(')', innerWrapIndexLeft);

        // Reverse the content inside the parentheses
        const wrappedGiftReversed = packages
            .slice(innerWrapIndexLeft + 1, innerWrapIndexRight)
            .split('')
            .reverse()
            .join('');

        // Replace the entire innermost parentheses group with the reversed content
        packages = packages.slice(0, innerWrapIndexLeft)
            + wrappedGiftReversed
            + packages.slice(innerWrapIndexRight + 1);
    }
    return packages;
}; */

const giftPackage = 'abc(def(gh)i)jk';

const start = performance.now();

console.log(fixPackages(giftPackage));

const end = performance.now();
console.log(`Execution time: ${end - start} ms`);