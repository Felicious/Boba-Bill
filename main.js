import {Transaction} from './js/transaction.js';

let allProfiles = [];
let profCount = 0;
let allTransactions = [];
let transCount = 0;

//tests

allProfiles.push("Derrick");
profCount += 1;

let Kizuna = new Transaction("Kizuna", 12.9, [0], "Derrick");
let TPTea = new Transaction("TPTea", 4.87, [0], "Derrick");
allTransactions.push(Kizuna);
allTransactions.push(TPTea);

updateTransaction(firstName) {
    // find index of Derrick from allProfiles

    // build (array of) transactions that Derrick is involved in
    for (const i = 0; i < allTransactions; i++) {

    }

    //check for diff and update Profile info
    if (this.transactionIds.length == transArrLen) {
        console.log(`No new transactions to update to ${this.firstName}`);
    }
    else {
        this.transactionIds.push(transArrLast);
        this.valSpent.push()
    }
}
//test calcOwed func


