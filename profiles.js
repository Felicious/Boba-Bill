ppl = 0;

<!--One question:
if the user clicks on the button (which
	opens the function more than once, would 
	the global variable reset?
Right now im assuming that the ppl var will keep
	track of the total number of profiles
	successfully created-->

<!--pp doesn't know if i can store profiles
	without a model/database
	Thinking of using classes-->

class Profile {
	//need unique id ...?
	constructor(name) {
		this.id: ppl; //global var
		this.firstName: name; //user input. If blank, generate random name
  		this.money: 0; //neg if u owe group, positive if group owes u
  		this.transactionIds: [];
	}

	// Class Method: Adds Transaction Id and amount owed
	// Update on Profile   
	function addTransaction(id, owedAmt) {
		this.transactionIds.push(id);
		//how to link transaction id to owed amt??
		this.money += owedAmt; //owedAmt is neg
	}

	// Class Method: when person pays for the bill
	// Amount the person owes the group is deducted
	function paidBill (paidAmt) {
		this.money += paidAmt; 
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