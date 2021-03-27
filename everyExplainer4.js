//This program will take an array of numbers and return true if they're all divisible by 3, else false.
//.every is used for obtaining a boolean -- not an array -- if every element passes a condition
//So there is a final variable that stores the boolean output (therefore we need a return)
//another way to explain it: every() returns true when filter() would return the same array
//we can use the "arrow function" shorthand to rewrite the function definition in a shorter way

let baseArray = [1,2,3,4,5,6,7,8,9,0];

let finalBoolean = baseArray.every(
    function isDivisibleBy3(num) {
        return (num % 3 === 0) //this function always returns true or false
    }
) 

//console.log(finalBoolean) //to see the output, you'd have to un-comment this line