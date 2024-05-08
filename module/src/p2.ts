// Design a TypeScript function findLargestNumber that takes an
// array of numbers and returns the
// largest number in the array.

const findLargestNumber = (arrays: number[]):number =>{
    return Math.max(...arrays)
}

const lala = findLargestNumber([10, 5, 8, 20, 3])
console.log(lala)
