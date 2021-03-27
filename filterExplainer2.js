//This program will take an array of numbers and return the ones that can be divided by 3.
//.filter is used for obtaining a second array with only the elements that pass a CONDITION
//So there is a final array where the results have to be stored.
//now we'll encapsulate the condition in a function

let baseArray = [1,2,3,4,5,6,7,8,9,0];
let finalArray = [];

function isDivisibleBy3(num) {
    return (num % 3 === 0); //this function always returns true or false
}

for (let i = 0; i < baseArray.length; i++) {
    if ( isDivisibleBy3(baseArray[i]) ) {  //we've replaced the condition with a function call that does the same thing
        finalArray.push(baseArray[i]);
    } 
}

//console.log(finalArray) //to see the output, you'd have to un-comment this line