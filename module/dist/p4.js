"use strict";
// Design a TypeScript function reverseArray that takes an array
// of any type and returns a new array with its elements reversed. 
// Use generics to define types.
const reverseArray = (array) => {
    const lala = array.slice().reverse();
    return lala;
};
const reverse = reverseArray(["apple", "banana", "cherry"]);
console.log(reverse);
const numberReverse = reverseArray([1, 2, 3, 4, 5]);
console.log(numberReverse);
