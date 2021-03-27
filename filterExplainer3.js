//This program will take an array of numbers and return the ones that can be divided by 3.
//.filter is used for obtaining a second array with only the elements that pass a CONDITION
//So there is a final array where the results have to be stored.
//now that we've encapsulated the condition check in a function, we can use it as a callback for filter

let baseArray = [1,2,3,4,5,6,7,8,9,0];


function isDivisibleBy3(num) {
    return (num % 3 === 0) //this function always returns true or false
}

let finalArray = baseArray.filter(isDivisibleBy3); //remember, the argument is always the function NAME, not the output. 

//console.log(finalArray) //to see the output, you'd have to un-comment this line