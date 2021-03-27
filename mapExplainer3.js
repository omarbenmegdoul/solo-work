//This program will take an array of numbers and return an array of those numbers to the power of 3.
//map is used for transforming each element of an array to receive a new array.
//So there is a final array where the results have to be stored and returned
//Now that we have encapsulated the transformation we can use baseArray.map()

let baseArray = [1,2,3,4,5,6,7,8,9,0];

function cubeOfNum(num) {
    return num**3 //transform the array element
}

finalArray = baseArray.map(cubeOfNum); //notice that we did not write cubeOfNum(). 
//We're passing the NAME of the function as an argument. `cubeOfNum()` denotes the OUTPUT of the `cubeOfNum` function (with a parameter missing)

//console.log(finalArray) //to see the output, you'd have to un-comment this line