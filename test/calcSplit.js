import {calcOwed, allProfiles, allTransactions}
    from '../main.js';
import {Transaction} from '../js/transaction.js';

let profCount = 0;
let transCount = 0;
// testing calcOwed function, focusing on non-even splits of the bill
    // among the participants

allProfiles[profCount] = "Hanna";
profCount += 1;
allProfiles[profCount] = "Amy";
profCount += 1;

allTransactions[transCount] = new Transaction("FTB", 10.2, [0,1], [0,0], [1]);
transCount += 1;
console.log("Checking if even split still works.");
console.log(`Hanna: ${calcOwed("Hanna")}, Amy: ${calcOwed("Amy")}`);

allTransactions[profCount] = "Whiny";
profCount += 1;
allTransactions[transCount] = new Transaction("ApplePay", 12, [0, 1, 2], [0, 0, 6], [1]);

console.log(`Whiny said she wanted to pay $6: ${calcOwed("Whiny")}`);
console.log(`Hanna: ${calcOwed("Hanna")}, Amy: ${calcOwed("Amy")}`);