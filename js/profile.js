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

/*	creates radio button + check boxes dynamically
	parameters: friend name, input type (radio or check box),
		and lastly, the div id
		(they are all strings)
	return: none
*/
function createButton(friend, buttonType, divID)
{
	// first, create input object
	const button = document.createElement("input");
	button.type = buttonType; // buttonType is either "radio" or "checkbox"
	button.id = friend + buttonType;

	// then add the accompanying text to the button
	// (otherwise it'll just be a single button LOL)
	const label = document.createElement("label");
	label.htmlFor = friend + buttonType;

	const textForLabel = document.createTextNode(friend);
	label.appendChild(textForLabel);

	const newline = document.createElement("br");

	// add input object + labels to parent, which is the div element
	const parent = document.getElementById(divID); // "select-payer" or "split"
	parent.appendChild(button);
	parent.appendChild(label);
	parent.appendChild(newline);
}
//	adds friend name to the drop down menus in the Transaction sec. 
function addToDropDownMenus(friend)
{	
	// create radio button to select payer
	createButton(friend, "radio", "select-payer");

	// create checkboxes to select which ppl to split transaction between
	createButton(friend, "checkbox", "split");
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