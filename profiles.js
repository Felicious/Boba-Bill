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
	constructor(name) {
		this.firstName: name; //user input. If blank, generate random name
  		this.money: 0;
  		this.transactionIds: [];
	}
}


var str = "profile" + String(ppl);
let str = new Profile(user_input); //USER INPUT
ppl += 1;