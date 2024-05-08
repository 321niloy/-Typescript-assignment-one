// Design a TypeScript class Car that represents a basic car with properties for brand, model,
// and year. Implement a method displayInfo that displays information about the car.


class Car{
    // name:string
    // brand:string
    // adition:number

    constructor(public name:string, public brand:string, public adition:number){
    // this.name = name;
    // this.brand = brand;
    // this.adition = adition
    }


    testingSalt(){
        console.log(`Your car model is:  ${this.adition} ${this.name} ${this.adition}`)
    }
}

const hara = new Car("Toyota", "Corolla", 2020);
hara.testingSalt()