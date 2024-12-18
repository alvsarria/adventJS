import checkPerformance from './performance.js';

/* You are in a very special market where Christmas trees 🎄 are sold. Each one comes decorated with a series of very peculiar ornaments, and the price of the tree is determined by the ornaments it has.

*: Snowflake - Value: 1
o: Christmas Ball - Value: 5
^: Decorative Tree - Value: 10
#: Shiny Garland - Value: 50
@: Polar Star - Value: 100
Normally, you would sum up all the values of the ornaments and that's it…

But, watch out! If an ornament is immediately to the left of another of greater value, instead of adding, its value is subtracted.

calculatePrice('***')  // 3   (1 + 1 + 1)
calculatePrice('*o')   // 4   (5 - 1)
calculatePrice('o*')   // 6   (5 + 1)
calculatePrice('*o*')  // 5  (-1 + 5 + 1) 
calculatePrice('**o*') // 6  (1 - 1 + 5 + 1) 
calculatePrice('o***') // 8   (5 + 3)
calculatePrice('*o@')  // 94  (-5 - 1 + 100)
calculatePrice('*#')   // 49  (-1 + 50)
calculatePrice('@@@')  // 300 (100 + 100 + 100)
calculatePrice('#@')   // 50  (-50 + 100)
calculatePrice('#@Z')  // undefined (Z is unknown)*/

const calculatePrice = (ornaments) => {
    const prices = { '*': 1, 'o': 5, '^': 10, '#': 50, '@': 100 };
    const ornamentsSplit = ornaments.split('');
    let result = 0;
    for (let i = 0; i < ornamentsSplit.length - 1; i++) {
        result = prices[ornamentsSplit[i]] < prices[ornamentsSplit[i + 1]] ? result - prices[ornamentsSplit[i]] : result + prices[ornamentsSplit[i]] 
    };
    result += prices[ornamentsSplit.slice(-1)];
    if(isNaN(result)){
        return undefined;
    } else {
        return result;
    };
};

checkPerformance(calculatePrice('#@'));
