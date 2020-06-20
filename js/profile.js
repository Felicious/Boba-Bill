/* 	helper function that changes HTML elements
	to display newly added name on top of the form */
function displayFriend(friend)
{
	// returns the div node, the parent node of the paragraph node
	// "Add friend to party"
	const divider = document.getElementById("profile-list");

	// create new text node for the next friend
	const addFriendName = document.createTextNode(friend);
	const newElement = document.createElement("P");
	newElement.appendChild(addFriendName);

	// put the text inside the div
	divider.appendChild(newElement);

	// clear the input after name is entered
	document.getElementById("fname").value = "";
}

/* One question:
   if the user clicks on the button (which
		opens the function more than once, would 
		the global variable reset?
   Right now im assuming that the ppl var will keep
		track of the total number of profiles
		successfully created
*/

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

export {displayFriend};