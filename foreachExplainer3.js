//This program will log all elements in an array to the console. 
//forEach is used for DOING something with each element of an array.
//Notice that we're not trying to produce a value: we're not getting back a modified array or even a single value at the end. There is no output, just logging.
//Now that we've encapsulated the "doing something" part in a function, we can use that function as a callback inside a `Array.forEach(callback)` call instead of using the for loop.

let baseArray = [1,2,3,4,5,6,7,8,9,0]

function logger(someMessage) {
    console.log(someMessage); //this is the DOING something part
}

baseArray.forEach(logger) //notice that we did not write logger(). 
//We don't pass a function CALL, we pass the function's NAME. 

//end