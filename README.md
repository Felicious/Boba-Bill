# Boba-Bill
Front-end app that calculates how much each person needs to pay when splitting the bill, during a multi-transaction hangout

## Features
### 1. Profiles
name, how much they owe, need to be paid (this is the result, also used to create new transactions)

#### Profile Variables
1. firstName: user input. If blank, generate random name
2. transactionIds & valSpent: linked by index to keep track of how much spent at each transaction
3. valSpent: pos if person paid, neg if person owes something

#### Class Methods: Update Type

##### addTransaction(id, owedAmt)

Adding Transaction Id and amount owed.

*Parameters*: 

- transactionId determined by global counter var
- owedAmt calculated in Transaction class function

*Returns*:
- updated transactionIds[] 
- and owedAmt[]

Notes: function call made after owedAmt = (bill)/(num of ppl who split) has already been calculated by separate Transaction class function

##### paidBill (paidAmt)

Add transaction info for when person pays.

*Parameter* : 

- paidAmt, or rather, the amount person paid

*Returns*: 

- transactionid of a paid bill (always 888) added to transactionIds[] 
- positive val of paidAmt added to owedAmt[]

Notes:
- paidAmt is positive val: 
- Amount the person owes the group is deducted
- transactionIds: always 888 for when person pays bill

#### editTrans (id, owedAmt) 
Whoops, made a mistake: edit cost of transaction

*Parameters* : None

*Return* : changed cost value stored at matching index of valSpent[]

#### removeTrans (id)

Whoops, delete transaction info

*Return* :
- remove vals from transactionIds[]
- and valSpent[]


#### Class Methods: Getter Type
##### itsPayDay()
Get total money

*Return*: total amount person owed

##### getOwedDetails()
Collapse "details" button to display costs for each transaction

*Returns*: 
- List of name/description of transaction
- paired with expenditure of each transaction

TODO: Requires additional getName function from Transaction class


### 2. Transactions
Class variables:

- id: unique, based on global (might be unnecessary, bc its the same as the index of global Transaction array)
- businessname (the rest of the var are from HTML form)
- cost: total amount spent on transaction
- payer[]: profile id of the ppl who paid (enables split bill option yet)
- pplid[]: array of profile ids for the ppl splitting the transaction
- participation[]: status to see if the bill is split evenly or not. Zero indicates that the person is splitting evenly with everyone else that's has a status of 0. Nonzero value indicates that the person is solely responsible for paying that value.

#### Calculation type Class Methods
Arguably the most important functions!

##### calcOwed
Calculates amount individual owes for a single transaction.

*Parameters*: 
- person ID
- ID of the transaction

Used by the following function

##### calcOwedTotal
Calculates amount one person owed for all transactions

*Parameter*: person ID


TODO: Requires a corresponding update of debts on each profile 



    This is a multi-step query from the user.
    Step 1: Total spent
        Details: requires profile (checkbox selection) of person who paid (divided between the num of ppl checked, so account for split bills)
    Step 2: Who actually ate?
        Check the profile boxes of the people who will be billed for this transaction. The total spent will be divided among the number of checked persons here and each person will be charged the value of the quotient) 
        Note: might need to add a feature where person A pays person B specifically (maybe this will be a single transaction, where person A ate and person B paid)
    Step 3: Transaction summary
        Who ate, which ppl paid, and what each person owes (this value will be added to total.
    
    Now, this single transaction is completed and the user can add more when they go to the next place. At any point, they can press the button:
    Total Transactions
    And this will total all expenditures and how much each person owes for every person with a profile (more info below)
      
### 3. Sugar Mama/Baba option.
    In each persons profile, they can select whether they're a sugar mama or daddy for other profile(s), and in the summary at the end, it'll detail how much they need to pay in addition how much they will pay on behalf of another in Total Transaction
    
### 4. Total Transaction function 
    This displays, for each person with a profile, the expense and owe-ing history with a total of either a positive or negative dollar value. 
    Positive: need to get paid back $xx dollars from the others 
    Negative: need to pay back $xx to someone. 
    
    Now, the app will calculate who pays back whom.
    In the profiles section, each person will fill out what kind of currency they possess and can accept:
    -Cash
    -Venmo
    -Apple/Google/Samsung Pay
    -Other kinds of electronic currency

    And the app will figure out who can pay who what amount. (Not sure about this part as the app will prob have insufficient information to figure out the entire paying back situation. Might be sufficient to figure out how much 1 person owes to "the group" and how much 1 person needs to get paid back by "the group".)

## Error Messages

### SyntaxError: Cannot use import statement outside a module

    For line 1 of main.js,
    ```javascript
    import {Profile} from './profile.js';
    ```
    is apparently problematic.

To fix this, add a *type* with the value "module" to script.
    ``` html
    <script type="module" src="./main.js"></script> ```

## References
Mozilla is the best hehe :)
*HTML Elements and Inheritance Structure*
- [Basic Form Styling](https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form)
- How to do [event listeners](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event)
- Displaying [friend names](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Using_the_W3C_DOM_Level_1_Core) after the user adds them
- Understanding Parent Nodes Object structure and Child Elements
- Use [Node.appendChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
- Useful function to index child nodes: [firstChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/firstChild)
- [This](https://www.techiedelight.com/create-radio-button-dynamically-javascript/) was major help for writing my *addToDropDownMenus* function that created radio buttons/check boxes with an added friend name
