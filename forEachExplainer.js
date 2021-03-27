//This program will log all elements in an array to the console. 
//forEach is used for DOING something with each element of an array.
//Notice that we're not trying to produce a value: we're not getting back a modified array or even a single value at the end. There is no output, just logging.

let baseArray = [1,2,3,4,5,6,7,8,9,0];

for (let i = 0; i < baseArray.length; i++) {
    console.log(baseArray[i]); //this is the DOING something part
}

//end