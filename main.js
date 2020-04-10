import {Transaction} from './js/transaction.js';

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

// helper function for calcOwed
function calcSingleOwed(currentTransaction, id) {
    for (let i = 0; i < currentTransaction.pplId.length; i++){

        // if person participated in transaction
        if(currentTransaction.pplId[i] === id){
            // assuming transactions are split evenly
            const splitCost = currentTransaction.cost / currentTransaction.pplId.length;
            
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

function calcSplitOwed(currentTransaction, id){
    // find index for all statuses != 0
    // Q: what if there's more than one?
    let subtractedCost = 0;
    let outsiders = [];

    for (let i = 0; i < currentTransaction.pplId.length; i++){
        if(currentTransaction.status[i] === 0){
            continue;
        }else{
            if(currentTransaction.pplId[i] == id){
                return currentTransaction.status[i];
            }
            else { 
                // DOUBLE CHECK. very confused rn
                subtractedCost += currentTransaction.status[i];
                outsiders.push(currentTransaction.pplId[i]); // index of the outsider
            }
            
        }
    }

    console.log("omg i made it");
    // if reached here, that means id is someone who's participated
    // in a transaction with someone who wanted to do split costs
    // but id isn't the one who did it.
    return (currentTransaction.cost - subtractedCost)/outsiders.length;

    
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
            totalOwed += calcSingleOwed(allTransactions[i], idFromProfile);
        }
        else
        {
            totalOwed += calcSingleOwed(allTransactions[i], idFromProfile);
        }
        
    }

    return totalOwed;
}

export {calcOwed, allProfiles, allTransactions};