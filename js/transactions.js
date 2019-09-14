transactioncount = 0

let alltransactions = [];

// use GLOBAL array of Transactions

class Transaction {


	/* is it good practice to use another function 
		within a constructor to fill in info?
		There would be way too many parameters in
		this constructor otherwise
	*/	

	/* Transaction variables

	id
	businessname


	/*	TODO: input needed by constructor all from 
		HTML form ;-; how to do...
	*/
	constructor() {

		// when to increment global var?
		this.businessname = ;
		this.cost =;

		// write script/function to fill in this array
		this.pplid = [];
		this.ppldebt = [];
	}

	/* TODO: Another constructor for transaction id 888
		This is when someone pays for something and a 
		positive value needs to be added to their
		(negative) debt
	
	constructor(888){
		
	}
	
	*/

	// Calculates amount individual owes for a single 
	// 	transaction. (This is an even split)
	function calcOwed(id){

	} 

	// TODO: Requires a corresponding update of debts on each profile 

}