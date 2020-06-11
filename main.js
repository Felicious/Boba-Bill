import {Transaction, calcSingleOwed, calcSplitOwed} from './js/transaction.js';

let allProfiles = [];
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


function calcOwed(firstName){
    
    // find ID of person from Profile
    const idFromProfile = findIndex(firstName);
    
    // parse every transaction in allTrans to total each expenditure
    // Q: should i save it as an object or not?
    let totalOwed = 0;
    for (let i = 0; i < allTransactions.length; i++){
        // TODO : check if i wrote this correctly
        // if all elem of status == 0, then true (so split even)
        // else ...

        // TODO: will loop through status attr twice. is there a more 
        //efficient way to write this? seems like it's much more trouble
        if(allTransactions[i].status.every(
            (elem) => elem === 0))
        {
            // helper function in transaction.js
            totalOwed += calcSingleOwed(allTransactions[i], idFromProfile);
        }
        else
        {
            totalOwed += calcSplitOwed(allTransactions[i], idFromProfile);
        }
        
    }

    return totalOwed;
}

export {calcOwed, allProfiles, allTransactions};