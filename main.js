import {Transaction} from './js/transaction.js';

let allProfiles = [];
let profCount = 0;
let allTransactions = [];
let transCount = 0;

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
function calcSingleOwed(currentTransaction, id) {
    console.log(`Calculating cost for ${currentTransaction.businessName}`);
    for (let i = 0; i < currentTransaction.pplId.length; i++){

        // if person participated in transaction
        if(currentTransaction.pplId[i] === id){
            // assuming transactions are split evenly
            const splitCost = currentTransaction.cost / currentTransaction.pplId.length;
            console.log(`Split cost ${splitCost}`);
            // check if person paid
            for (let j = 0; j < currentTransaction.payer.length; j++){
                
                if(currentTransaction.payer[j] === id){
                    return splitCost - (currentTransaction.cost / currentTransaction.payer.length);
                    // will return a negative value (bc other ppl owe u)
                }
            }
            // if reached the end, person didn't pay for this trans
            return splitCost

        }
        // else, continue
    }
     // if reached the end, means person didn't participate in transaction
     return 0;
     // so they owe $0 for this transaction
}

function calcOwed(firstName){
    
    // find ID of person from Profile
    const idFromProfile = findIndex(firstName);
    console.log(`Derrick's ID is ${idFromProfile}`)
    
    // parse every transaction in allTrans to total each expenditure
    // Q: should i save it as an object or not?
    let totalOwed = 0;
    for (let i = 0; i < allTransactions.length; i++){
        totalOwed += calcSingleOwed(allTransactions[i], idFromProfile);
    }

    return totalOwed;
}

export {findIndex, calcOwed, allProfiles, allTransactions, profCount, transCount};