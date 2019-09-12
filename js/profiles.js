ppl = 0;
transactioncount = 0; //how to max at 500?

/* One question:
   if the user clicks on the button (which
		opens the function more than once, would 
		the global variable reset?
   Right now im assuming that the ppl var will keep
		track of the total number of profiles
		successfully created
*/

class Profile {

	//do i need unique id ...?
	constructor(name) {
		this.id = ppl; //global var
		this.firstName = name;

  		this.transactionIds = [];
  		this.valSpent = [];
  		
	}

	/* Profile variables

	id
	firstName
	transactionIds
	valSpent
	
	Class Methods
		Type: Update on Profile
	*/
	
	// Adding Transaction Id and amount owed
	function addTransaction(id, owedAmt) {
		this.transactionIds.push(id);
		this.valSpent.push(owedAmt);
	}

	/* 
	*/
	
	function paidBill (paidAmt) {
		this.transactionIds.push(888);
		this.valSpent.push(owedAmt); 
	}

	//  Class Method: get total money
	function itsPayDay(){
		return totalspent;
	}

	/*

	*/
}




var str = "profile" + String(ppl);
let str = new Profile(user_input); //USER INPUT
ppl += 1;

//random names used for when the user leaves name empty
var randBobaNames = ["Yuzu", "Krema", "Pearl", "Winter",
					"Creme", "Brulee", "Milk", "Earl", 
					"Gray", "Kuro", "Sugar", "Buddha",
					"Latte", "Ichigo", "Sakura", "Shiba",
					"Corgi", "Bogi"
					];