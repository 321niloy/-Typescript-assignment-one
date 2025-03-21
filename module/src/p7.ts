// Create a TypeScript function logString that takes a parameter of type unknown and uses 
// a type guard to check whether the parameter is of type string. If it is, log the string
// to the console. 
// If it is not, log an error message.


const logString = (params: unknown) =>{
    if(typeof params == "string"){
        console.log("Hello, TypeScript!")
    }
    else{
        console.log("Input is not a string.")
    }

}


logString("Hello, TypeScript!");

logString(42)