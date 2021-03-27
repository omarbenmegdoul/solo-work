//This program will take an array of numbers and return an array of those numbers to the power of 3.
//map is used for transforming each element of an array to receive a new array.
//So there is a final array where the results have to be stored.
//We can convert translate the function to the arrow function shorthand to save space

let baseArray = [1,2,3,4,5,6,7,8,9,0];

finalArray = baseArray.map(
    num => num ** 3 //what goes on the other side of the arrow is what would go after "return" in the old function
) 

//console.log(finalArray) //to see the output, you'd have to un-comment this line