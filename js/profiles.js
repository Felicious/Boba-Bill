ppl = 0;

let allprofiles = []; // global array of profile objs

//do i set this here or in the Transaction class?
// transactioncount = 0; //how to max at 500?

// helper function: find index of id
	function findIndex(id) {
		var i;
		for (i = 0; i < this.transactionIds.length; i++) {
			if (this.transactionIds[i] == id)
				return i;
		}
		// what happens when it can't find the index?
	}

/* One question:
   if the user clicks on the button (which
		opens the function more than once, would 
		the global variable reset?
   Right now im assuming that the ppl var will keep
		track of the total number of profiles
		successfully created
*/

class Profile {

	constructor(name) {
		this.id = ppl; //global var
		// when to increment ppl? 
		// should be after the profile object is successfully created,
		// so maybe in main?

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

	// Add transaction info for when person pays.
	function paidBill (paidAmt) {
		this.transactionIds.push(888);
		this.valSpent.push(paidAmt); 
	}

	// Whoops, made a mistake: edit cost of transaction
	function editTrans (id, owedAmt) {
		var index = findIndex(id); //helper
		this.valSpent[index] = owedAmt;
	}

	// Whoops, delete transaction info
	function removeTrans (id) {
		var index = findIndex(id); //helper
		this.transactionIds.splice(index, 1);
		this.valSpent.splice(index, 1);
	}


	/* Type: Getters
	*/
	// Get total money
	function itsPayDay(){
		var i;
		var totalspent = 0;
		for (i = 0; i < this.valSpent.length; i++) {
  			totalspent += cars[i];
		}
		return totalspent;
	}

	/* TODO:
	Collapse "details" button to display costs for each transaction
	
	function getOwedDetails(){
		var text;
		var i;
		for (i = 0; i < this.valSpent.length; i++) {
			text += getName(this.transactionIds[i]) + " "
				+ this.valSpent[i] + "\n";
		}
	}
	*/
}


/* 
Creating a class object?

Is this how you do it LOL
*/

var str = "profile" + String(ppl);
let str = new Profile(user_input); //USER INPUT
ppl += 1;

//random names used for when the user leaves name empty
var randBobaNames = ["Yuzu", "Krema", "Pearl", "Winter",
					"Creme", "Brulee", "Milk", "Earl", 
					"Gray", "Kuro", "Sugar", "Buddha",
					"Latte", "Ichigo", "Sakura", "Shiba",
					"Corgi", "Bogi", "Matcha", "Pudding",
					"Verde", "Ume"
					];