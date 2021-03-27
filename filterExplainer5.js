//This program will take an array of numbers and return the ones that can be divided by 3.
//.filter is used for obtaining a second array with only the elements that pass a CONDITION
//So there is a final array where the results have to be stored.
//We can use the "arrow function" shorthand to rewrite the function definition and save space.

let baseArray = [1,2,3,4,5,6,7,8,9,0]

let finalArray = baseArray.filter(
    num => (num % 3 === 0) //what goes on the other side of the arrow is the condition
) 

//console.log(finalArray) //to see the output, you'd have to un-comment this line