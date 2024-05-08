// You are given an object called “student” representing a student's 
// information with the following properties: name (string), age (number), 
// and grades (array of numbers). Make an interface using given properties. 
// Write a TypeScript function called calculateAverageGrade that takes this 
// student object as input and calculates the average grade.


interface Student <T>{
    name:string;
    age:number;
    grades:T[]
    
}

const student1: Student<number> = {     
    name: "Bob",     
    age: 17,     
    grades: [75, 80, 82, 88, 90]
           };

const calculateAverageGrade =<T extends number> (likeObject: Student<T>):number =>{
    let sum = likeObject.grades.reduce((acc, current)=> acc+current,0)
    let average = sum / likeObject.grades.length;
    return average;

}





const averageGradeForBob = calculateAverageGrade(student1);
console.log(averageGradeForBob)