//This program will log all elements in an array to the console. 
//forEach is used for DOING something with each element of an array.
//Notice that we're not trying to produce a value: we're not getting back a modified array or even a single value at the end. There is no output, just logging.
//This time, we will encapsulate the "doing something" part in a function outside the for loop.
//Notice that the function we've encapsulated the "doing something" part in doesn't have a return statement, since it doesn't return anything.

let baseArray = [1,2,3,4,5,6,7,8,9,0];

function logger(someMessage) {
    console.log(someMessage); //this is the DOING something part
}

for (let i = 0; i < baseArray.length; i++) {
    logger(baseArray[i]); 
}

//end