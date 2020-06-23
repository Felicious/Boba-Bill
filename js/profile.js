/* 	helper function that changes HTML elements
	to display newly added name on top of the form */
function displayFriend(friend)
{
	// returns the div node, the parent node of the paragraph node
	// "Add friend to party"
	const divider = document.getElementById("profile-list");

	// create new text node for the next friend
	const addFriendName = document.createTextNode(friend); // new text
	const newElement = document.createElement("P"); // new paragraph type
	newElement.appendChild(addFriendName); // adding them together 

	// put the text inside the div
	divider.appendChild(newElement);

	// clear the input after name is entered
	document.getElementById("fname").value = "";
}

//	adds friend name to the drop down menus in the Transaction sec.
function addToDropDownMenus(friend)
{	// create radio button to select payer
	
	// first, create input object
	const radioButton = document.createElement("input");
	radioButton.type = "radio";
	radioButton.value = friend;

	// add input object to parent, which is the div element
	const parent = document.getElementById("select-payer");
	parent.appendChild(radioButton);

	// create check box to choose ppl to split transaction between
	const checkBox = document.createElement("input");
	checkBox.type = "checkbox";
	checkBox.value = friend;

	const financialProvider = document.getElementById("split");
	financialProvider.appendChild(checkBox);
}
/* One question:
   if the user clicks on the button (which
		opens the function more than once, would 
		the global variable reset?
   Right now im assuming that the ppl var will keep
		track of the total number of profiles
		successfully created
*/

//random names used for when the user leaves name empty
let randBobaNames = ["Yuzu", "Krema", "Pearl", "Winter",
					"Creme", "Brulee", "Milk", "Earl", 
					"Gray", "Kuro", "Sugar", "Buddha",
					"Latte", "Ichigo", "Sakura", "Shiba",
					"Corgi", "Bogi", "Matcha", "Pudding",
					"Verde", "Ume"
					];


function assignName(){
	return randBobaNames[
		Math.ceil(Math.random()*100) % randBobaNames.length
	];
}

export {displayFriend, addToDropDownMenus, assignName};