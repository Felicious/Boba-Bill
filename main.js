import {Transaction} from './js/transaction.js';

let allProfiles = [];
let profCount = 0;
let allTransactions = [];
let transCount = 0;

//tests

allProfiles[profCount] = "Derrick";
profCount += 1;

let Kizuna = new Transaction("Kizuna", 12.9, [0], "Derrick");
let TPTea = new Transaction("TPTea", 4.87, [0], "Derrick");
allTransactions[transCount] = Kizuna;
transCount += 1;
allTransactions[transCount] = TPTea;
transCount += 1;

// helper function: find index of id
function findIndex(name) {
	for (let i = 0; i < allProfiles.length; i++) {
		if (allProfiles[i] === name)
			return i;
	}
	// what happens when it can't find the index?
	console.log(`Requested name not found. Make a profile for ${name}?`);
}

// helper function for calcOwed
function calcSingleOwed(currentTransaction) {
    // assuming transactions are split evenly
}

function calcOwed(firstName){
    
    // find ID of person from Profile
    const idFromProfile = findIndex(firstName);

    // parse every transaction in allTrans to total each expenditure
    // Q: should i save it as an object or not?
    let totalOwed = 0;
    for (let i = 0; i < allTransactions.length; i++){
        totalOwed += calcSingleOwed(allTransactions[i]);
    }
}

//test calcOwed func


