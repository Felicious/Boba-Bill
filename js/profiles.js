ppl = 0;
transactioncount = 0; //how to max at 500?

/* One question:
   if the user clicks on the button (which
		opens the function more than once, would 
		the global variable reset?
   Right now im assuming that the ppl var will keep
		track of the total number of profiles
		successfully created

   pp doesn't know if i can store profiles
	without a model/database
	Thinking of using classes
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

	id: corresponds with global ppl count
	firstName: user input. If blank, generate random name
	transactionIds & valSpent: linked by index to keep track of how much spent at each transaction
		valSpent: pos if person paid, neg if person owes something
	*/

	/* Class Methods
		Type: Update on Profile
	*/
	
	/* Adding Transaction Id and amount owed
		Warning: used after owedAmt = (bill)/(num of ppl who split) 
			has already been calculated by separate Transaction class function
	
		Parameters: transactionId determined by global counter var
					owedAmt calculated in Transaction class function
	*/

	function addTransaction(id, owedAmt) {
		this.transactionIds.push(id);
		this.valSpent.push(owedAmt);
	}

	// Class Method: when person pays for the bill
	// Amount the person owes the group is deducted
	// transactionIds: always 888 for when person pays bill
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