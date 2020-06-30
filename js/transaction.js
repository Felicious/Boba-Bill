class Transaction {
	
	/* constructor() {

		// when to increment global var?

		// !! receive html inputs !!
		this.businessname = '';
		this.cost = 0;

		// write script/function to fill in this array
		this.pplId = [];
		this.status = [];

		this.payer = [];

	}
	*/
	constructor(business, cost, id, status, payer){
		this.businessName = business;
		this.cost = cost;

		//the following are arrays
		this.pplId = id; //split among these ppl
		this.status = status;
		this.payer = payer;

		console.log(`Transaction of $${this.cost} at ${this.businessName}
			completed by ${this.payer}`);

		//TODO: update profile every time a transaction is created.
		// is this possible?
	}

	/* TODO: Another constructor for transaction id 888
		This is when someone pays for something and a 
		positive value needs to be added to their
		(negative) debt
	
	constructor(888){
		
	}

	
	
    */
    
    displayTransaction(){
        const parent = document.getElementById('transaction-list');
        
        // all of the business' info will be saved together as a div class
        const busnInfo = document.createElement('div');
        busnInfo.className = this.businessName;

        busnInfo.appendChild(displayPara(this.businessName));
        busnInfo.appendChild(displayPara(this.cost));

        // TODO: display the people ids in a more readable fashion
        let people = '';
        for (let i = 0; i < this.pplId.length; i++){
            people += this.pplId[i].toString();
            if (i < (this.pplId.length - 1)){
                people += ", ";
            }
           
        }
       busnInfo.appendChild(displayPara(people));

        // TODO: add code that handles status later
        busnInfo.appendChild(displayPara("Split evenly"));

        let payer = '';
        for(let i = 0; i < this.payer.length; i++){
            payer += this.payer[i].toString();
            if (i < (this.payer.length - 1)){
                payer += ', ';
            }
        }
        busnInfo.appendChild(displayPara(payer));

        parent.appendChild(busnInfo);
    }
}


/*  wanted to reduce the number of lines in displayTransaction by abstracting a couple repeated lines,
    but this may have served to confuse the reader instead

    param: the text that will be inserted into the paragraph element
    returns: a paragraph-type html element that displays the passed in text
*/
function displayPara(words)
{
    const addInfo = document.createTextNode(words);
    const pElement = document.createElement("P");
    pElement.appendChild(addInfo);
    return pElement;
}



// helper function for calcOwed
function calcSingleOwed(currentTransaction, id) {
    for (let i = 0; i < currentTransaction.pplId.length; i++){

        // if person participated in transaction
        if(currentTransaction.pplId[i] === id){
            // assuming transactions are split evenly
            const splitCost = currentTransaction.cost / currentTransaction.pplId.length;
            
            // check if person paid
            for (let j = 0; j < currentTransaction.payer.length; j++){
                
                if(currentTransaction.payer[j] === id){
                    return splitCost - (currentTransaction.cost / currentTransaction.payer.length);
                    // will return a negative value (bc other ppl owe u)
                }
            }
            // if reached the end, person didn't pay for this trans
            return splitCost
        }
        // else, continue
    }
     // if reached the end, means person didn't participate in transaction
     return 0;
     // so they owe $0 for this transaction
}

function calcSplitOwed(currentTransaction, id){
    // find index for all statuses != 0
    // Q: what if there's more than one?
    let subtractedCost = 0;
    let outsiders = [];

    for (let i = 0; i < currentTransaction.pplId.length; i++){
        if(currentTransaction.status[i] === 0){
            continue;
        }else{
            if(currentTransaction.pplId[i] == id){
                return currentTransaction.status[i];
            }
            else { 
                // DOUBLE CHECK. very confused rn
                subtractedCost += currentTransaction.status[i];
                outsiders.push(currentTransaction.pplId[i]); // index of the outsider
            }
            
        }
    }

    console.log("omg i made it");
    // if reached here, that means id is someone who's participated
    // in a transaction with someone who wanted to do split costs
    // but id isn't the one who did it.
    return (currentTransaction.cost - subtractedCost)/outsiders.length;

    
}

export {Transaction, calcSingleOwed, calcSplitOwed};