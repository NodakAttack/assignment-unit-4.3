console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

//add item to basket, return true
function addItem (item){
    if (isFull() === false){
    basket.push(item);
    return true;
    }
    else {
        console.log(item, ' could not be added');
        return false;
    }
}


function listItems(){
    for (let index = 0; index < basket.length; index++) {
        console.log(basket[index]);
    }
}

function empty(){
    basket = [];
}

function isFull(){
    if (basket.length < maxItems) {
        return false;
    } else {
        return true;
    }
}

 addItem('kale');
 addItem('turnip');
 addItem('shrimp');
 addItem('panda');
 addItem('carrot');

//starting stretch goals



// test if true or false

console.log("-------------");


empty();

console.log("-------------");
addItem("roast");
listItems();

/**
 * 
 * @param {*} item(string)
 */

function removeItem(item) {
   console.log(basket.indexOf(item));
}

removeItem("roast");

// testing code


















// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
