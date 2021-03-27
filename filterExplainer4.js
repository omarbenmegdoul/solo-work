//This program will take an array of numbers and return the ones that can be divided by 3.
//.filter is used for obtaining a second array with only the elements that pass a CONDITION
//So there is a final array where the results have to be stored.
//We can define the function directly inside the .filter() call. Literally cut and paste.

let baseArray = [1,2,3,4,5,6,7,8,9,0];

let finalArray = baseArray.filter(
    function isDivisibleBy3(num) {
        return (num % 3 === 0) //this function always returns true or false
    }
) //remember, the argument is always the function NAME, not the output. 

//console.log(finalArray) //to see the output, you'd have to un-comment this line