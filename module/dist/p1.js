"use strict";
// Design a TypeScript function repeatString that takes
// two parameters: a string and a number. The function
// should return a new string that repeats the input
// string the specified number of times.
const repeatString = (a, b) => {
    let result = '';
    for (let i = 0; i < b; i++) {
        result = result + a;
    }
    return result;
};
const bara = repeatString("Hello!", 3);
console.log(bara);
