//This program will take an array of numbers and return true if they're all divisible by 3, else false.
//.every is used for obtaining a boolean -- not an array -- if every element passes a condition
//So there is a final variable that stores the boolean output (therefore we need a return)
//another way to explain it: every() returns true when filter() would return the same array
//we can encapsulate the condition in a function --  the same one as filter!

let baseArray = [1,2,3,4,5,6,7,8,9,0]
let finalBoolean = true; //just declaring this variable for later

function isDivisibleBy3(num) {
   return (num % 3 === 0); //this function always returns true or false
}

for (let i = 0; i < baseArray.length; i++) {
        finalBoolean = finalBoolean && isDivisibleBy3(baseArray[i]);
} 

// finalBoolean starts off true
// it becomes false if any element of the array is not divisble by 3
// it remains false no matter what happens after

//console.log(finalBoolean) //to see the output, you'd have to un-comment this line