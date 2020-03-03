
// let allprofiles = []; // global array of profile objs

// helper function: find index of id
	function findIndex(id) {
		for (let i = 0; i < this.transactionIds.length; i++) {
			if (this.transactionIds[i] === id)
				return i;
		}
		// what happens when it can't find the index?
		console.log("Cannot find index");
	}

/* One question:
   if the user clicks on the button (which
		opens the function more than once, would 
		the global variable reset?
   Right now im assuming that the ppl var will keep
		track of the total number of profiles
		successfully created
*/

import class Profile {

	constructor(name, id) {
		this.id = id;
		this.firstName = name;
  		this.transactionIds = [];
		this.valSpent = [];
		
		console.log(`New Profile for ${firstName} with ID # ${id} created.`);

		ppl += 1; //global variable
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
	addTransaction(id, owedAmt) {
		this.transactionIds.push(id);
		this.valSpent.push(owedAmt);
	}

	// Add transaction info for when person pays.
	paidBill (paidAmt) {
		this.transactionIds.push(888);
		this.valSpent.push(paidAmt); 
	}

	// Whoops, made a mistake: edit cost of transaction
	editTrans (id, owedAmt) {
		const index = findIndex(id); //helper
		this.valSpent[index] = owedAmt;
	}

	// Whoops, delete transaction info
	removeTrans (id) {
		const index = findIndex(id); //helper
		this.transactionIds.splice(index, 1);
		this.valSpent.splice(index, 1);
	}


	/* Type: Getters
	*/
	// Get total money
	itsPayDay(){
		/*
		C++ way:
		let totalspent = 0;
		for (let i = 0; i < this.valSpent.length; i++) {
  			totalspent += valspent[i];
		}
		return totalspent;
		
		Functional:
		*/

		return this.valSpent.reduce(
			(totalSpent, i) => totalSpent + i, 0);

	}

	// TODO: getOwedDetails()


	
}

export {Profile};


/* 
Creating a class object?

Is this how you do it LOL
*/

// var str = "profile" + String(ppl);
let str = new Profile(user_input); //USER INPUT
ppl += 1;
/*
//random names used for when the user leaves name empty
let randBobaNames = ["Yuzu", "Krema", "Pearl", "Winter",
					"Creme", "Brulee", "Milk", "Earl", 
					"Gray", "Kuro", "Sugar", "Buddha",
					"Latte", "Ichigo", "Sakura", "Shiba",
					"Corgi", "Bogi", "Matcha", "Pudding",
					"Verde", "Ume"
					];
					*/