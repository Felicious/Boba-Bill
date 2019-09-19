	// Calculates amount individual owes for a single 
	// 	transaction. (This is an even split)
	function calcOwed(personid, transactionid){
		// map to alltransactions[transactionid]
		const currentTrans = alltransactions[transactionid];

		let billTotal = currentTrans.cost;
		let numOfPpl = currentTrans.pplid.length;

		// check if any1 is paying separately
		for(let i = 0; i < currentTrans.status.length; i++){
			
			// TODO: see if personid wanted to pay separately
			if (currentTrans.pplid[i] === personid){
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