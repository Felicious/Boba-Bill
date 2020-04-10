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
	constructor(business, cost, id, status, payer){
		this.businessName = business;
		
		if(cost < 0) {
			console.log("Cost cannot be negative.");
			// what would i do to indicate constructor failed?
		}
		else{ 
			this.cost = cost;
		}

		//the following are arrays
		this.pplId = id;
		this.status = status;
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



}