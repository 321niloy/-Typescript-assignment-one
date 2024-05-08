// Create a TypeScript function filterEvenNumbers that takes an array of numbers
// and returns a new array containing only the even numbers from
// the original array.


const filterEvenNumbers = (array : number[]):number[]=>{
    let result = [];
   for (let i = 0;  i<length; i++){
    if(array[i]%2 === 0){
        result.push(array[i]);
    }
   }
   return result;

}

const extralala = filterEvenNumbers([1, 2, 3, 4, 5, 6])