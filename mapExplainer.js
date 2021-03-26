//This program will take an array of numbers and return an array of those numbers to the power of 3.
//map is used for transforming each element of an array to receive a new array.
//So there is a final array where the results have to be stored.
//here it is with just a for loop


let baseArray = [1,2,3,4,5,6,7,8,9,0]
let finalArray = []; //we're just declaring this value for now
let cubed = undefined //we're just declaring this value for now

for (let i = 0; i < baseArray.length; i++) {
    let cubed = baseArray[i]**3 //transform the array element
    finalArray.push(cubed) //then store it in a separate array
}

//console.log(finalArray) //to see the output, you'd have to un-comment this line