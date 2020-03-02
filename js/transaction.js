//these are global variables, only read them, don't change them
import {ppl, allprofiles, transcount, alltransactions} from './calculations,js';

class Transaction {
	
	constructor() {

		// when to increment global var?

		// !! receive html inputs !!
		this.businessname = '';
		this.cost = 0;

		// write script/function to fill in this array
		this.pplId = [];
		this.status = [];

		this.payer = [];
	}

	/* TODO: Another constructor for transaction id 888
		This is when someone pays for something and a 
		positive value needs to be added to their
		(negative) debt
	
	constructor(888){
		
	}

	
	
	*/

	// Calculates amount person owes for a single transaction.
	calcOwed(personId, transactionId)
	{
		// map to alltransactions[transactionid]
		const currentTrans = alltransactions[transactionId];

		let billTotal = currentTrans.cost;
		let numOfPpl = currentTrans.pplId.length;

		// check if any1 is paying separately
		for(let i = 0; i < currentTrans.status.length; i++){
			
			//see if personId wanted to pay separately
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
	calcTotalOwed(id){
		// allprofiles[id].transactionIds[i] // gives transaction ID

		let totalOwed = 0;
		for (let i = 0; i < allprofiles[id].transactionIds.length; i++){
			totalOwed += calcOwed(id, allprofiles[id].transactionIds[i])
		}
		
		return calcTotalOwed;
	} 

}

export {Transaction};