import Transaction from './transaction.js';
import Profile from './profile.js';

let ppl = 0;
let allprofiles = [];
 
let transcount = 0;
let alltransactions = [];

// Calculates amount person owes for a single transaction.
function calcOwed(personId, transactionId)
{
	// map to alltransactions[transactionid]
	const currentTrans = alltransactions[transactionId];

	let billTotal = currentTrans.cost;
	let numOfPpl = currentTrans.pplId.length;

	// check if any1 is paying separately
	for(let i = 0; i < currentTrans.status.length; i++){
		
		// TODO: see if personId wanted to pay separately
		if (currentTrans.pplId[i] === personId){
			return currentTrans.status[i]
		}
		
		if(currentTrans.status[i] !== 0){
			numOfPpl -= 1;
		}

		// deduct amt others paying separately from total
		billTotal -= currentTrans.status[i];
	}

	return billTotal/numOfPpl;
}

// Parameter: person id
function calcTotalOwed(id){
	// allprofiles[id].transactionIds[i] // gives transaction ID

	let totalOwed = 0;
	for (let i = 0; i < allprofiles[id].transactionIds.length; i++){
		totalOwed += calcOwed(id, allprofiles[id].transactionIds[i])
	}
	
	return calcTotalOwed;
} 


	

	// Calculate and display the details of how much
	// is owed from every transaction (diff from
	// simply showing the total)

export {ppl, allprofiles, transcount, alltransactions, calcOwed, calcTotalOwed};