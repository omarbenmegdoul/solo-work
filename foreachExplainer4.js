//This program will log all elements in an array to the console. 
//forEach is used for DOING something with each element of an array.
//Notice that we're not trying to produce a value: we're not getting back a modified array or even a single value at the end. There is no output, just logging.
//If you want, you can define the function directly inside the `baseArray.forEach(callback)` call. Literally cut and paste.

let baseArray = [1,2,3,4,5,6,7,8,9,0]

baseArray.forEach(
    function logger(someMessage) {
        console.log(someMessage); //this is the DOING something part
    }
) 

//end