//This program will take an array of numbers and return true if they're all divisible by 3, else false.
//.every is used for obtaining a boolean -- not an array -- if every element passes a condition
//So there is a final variable that stores the boolean output (therefore we need a return)
//another way to explain it: every() returns true when filter() would return the same array
//now that we have a function to use as a callback, we can use .every instead of a for loop

let baseArray = [1,2,3,4,5,6,7,8,9,0];

function isDivisibleBy3(num) {
    return (num % 3 === 0); //this function always returns true or false
}

let finalBoolean = baseArray.every(isDivisibleBy3) // `callback`, never `callback()`

//console.log(finalBoolean) //to see the output, you'd have to un-comment this line