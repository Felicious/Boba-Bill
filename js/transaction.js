export class Transaction {
	
	/* constructor() {

		// when to increment global var?

		// !! receive html inputs !!
		this.businessname = '';
		this.cost = 0;

		// write script/function to fill in this array
		this.pplId = [];
		this.status = [];

		this.payer = [];

	}
	*/

	//test constructor

	constructor(business, cost, id, payer){
		this.businessName = business;
		this.cost = cost;

		//the following are arrays
		this.pplId = id;
		this.payer = payer;

		console.log(`Transaction of $${this.cost} at ${this.businessName}
			completed by ${this.payer}`);

		//TODO: update profile every time a transaction is created.
		// is this possible?
	}

	/* TODO: Another constructor for transaction id 888
		This is when someone pays for something and a 
		positive value needs to be added to their
		(negative) debt
	
	constructor(888){
		
	}

	
	
	*/

	// Calculates amount person owes for a single transaction.
// wait do i need this function? lol
calcOwed(personId, transactionId)
{
    // map to alltransactions[transactionid]
    const currentTrans = allTransactions[transactionId];

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
