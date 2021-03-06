//This program will take an array of numbers and return the ones that can be divided by 3.
//.filter is used for obtaining a second array with only the elements that pass a CONDITION
//So there is a final array where the results have to be stored.
//here it is with just a for loop

let baseArray = [1,2,3,4,5,6,7,8,9,0];
let finalArray = [];

for (let i = 0; i < baseArray.length; i++) {
    if ( baseArray[i]%3 === 0 ) { //the condition is just the part in the (). 
        finalArray.push(baseArray[i]);
    } 
}

//console.log(finalArray) //to see the output, you'd have to un-comment this line