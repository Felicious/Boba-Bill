import {Transaction, calcSingleOwed, calcSplitOwed} from './js/transaction.js';
import {displayFriend, addToDropDownMenus, assignName} from './js/profile.js';

let allProfiles = [];
let profCount = 0;
let allTransactions = [];
let transCount = 0;

// helper function: find index of id
function findIndex(name) {
	for (let i = 0; i < allProfiles.length; i++) {
		if (allProfiles[i] === name)
			return i;
	}
    // what happens when it can't find the index?
    // how to cancel?
    console.log(`Requested name not found. Make a profile for ${name}?`);
    return -1; 
}

function addFriend()
{
    // get friend name from saved value of the form
    const friend = document.getElementById("fname").value;

    // check empty
    if(friend === ""){
        friend = assignName();
        console.log(`You left the name empty. The random name ${friend} is assigned for you :D`)
    }
    else if(findIndex(friend) > -1){ // yes theres a dup
        // how to write alert?
        window.alert("Friend has already been added!")

        // TODO: STOP THE FUNCTION HERE
    }
    else {

        allProfiles[profCount] = friend;
        profCount += 1;
    
        // show added friend on page
        displayFriend(friend);

        // add friend option to radio buttons
        addToDropDownMenus(friend);

    }
}


function calcOwed(firstName){
    
    // find ID of person from Profile
    const idFromProfile = findIndex(firstName);
    
    // parse every transaction in allTrans to total each expenditure
    // Q: should i save it as an object or not?
    let totalOwed = 0;
    for (let i = 0; i < allTransactions.length; i++){
        // TODO : check if i wrote this correctly
        // if all elem of status == 0, then true (so split even)
        // else ...

        // TODO: will loop through status attr twice. is there a more 
        //efficient way to write this? seems like it's much more trouble
        if(allTransactions[i].status.every(
            (elem) => elem === 0))
        {
            // helper function in transaction.js
            totalOwed += calcSingleOwed(allTransactions[i], idFromProfile);
        }
        else
        {
            totalOwed += calcSplitOwed(allTransactions[i], idFromProfile);
        }
        
    }

    return totalOwed;
}


// event listeners
const addFriendName = document.getElementById('addFriend');
addFriendName.addEventListener('click', addFriend);

//const addTransaction = 

// export {calcOwed, allProfiles, allTransactions};