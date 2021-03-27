//This program will take an array of numbers and return an array of those numbers to the power of 3.
//map is used for transforming each element of an array to receive a new array.
//So there is a final array where the results have to be stored and returned
//We can move the function definition inside the baseArray.map() call if we want. Literally just cut and paste it

let baseArray = [1,2,3,4,5,6,7,8,9,0];

finalArray = baseArray.map(
    function cubeOfNum(num) {
        return num**3 //transform the array element
    }
) 

//console.log(finalArray) //to see the output, you'd have to un-comment this line