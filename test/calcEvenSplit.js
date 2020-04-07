import {calcOwed, allProfiles, allTransactions}
    from '../main.js';
import {Transaction} from '../js/transaction.js';

let profCount = 0;
let transCount = 0;
// testing calcOwed function, focusing on evenly splitting bill
    // among the participants

allProfiles[profCount] = "Johnny"; //saved in index 0
profCount += 1;

let InAndOut = new Transaction("In&Out", 12.9, [0], [0], [0]);
let Teaspoon = new Transaction("Teaspoon", 4.50, [0], [0,], [0]);
allTransactions[transCount] = InAndOut;
transCount += 1;
allTransactions[transCount] = Teaspoon;
transCount += 1;

console.log(`Johnny paid for everything himself so he should owe
    $0. Check: ${calcOwed("Johnny")}`);

allProfiles[profCount] = "Derrick";
profCount += 1;
allProfiles[profCount] = "Felicia";
profCount += 1;

allTransactions[transCount] = new Transaction("CurryHouse", 28.6, [1, 2], [0,0], [1]);
transCount += 1;
allTransactions[transCount] = new Transaction("MatchaLove", 8, [1,2], [0,0], [1]);
transCount += 1;

console.log(`Derrick: ${calcOwed("Derrick")} and Felicia:  ${calcOwed("Felicia")}
    should be the same except Derrick's is neg and mine is postitive.`); // values should be equal

allTransactions[transCount] = new Transaction("PeakDesign", 200, [0, 1], [0,0], [1]);
transCount += 1;

console.log(`Felicia didn't participate in previous transaction
    so her owed value should be the same: ${calcOwed("Felicia")}`);
console.log(`Now Johnny should owe Derrick $100: ${calcOwed("Johnny")}.`)