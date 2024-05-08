Union Types:

Union types like or operator and works like same .
It use for defend any types of error.Suppose we pass a params using function
but some times we pass string value and some times we pass numbervalue. at this
moment we decleard types our params by using union Types.

example:
const lara = (params:  string | number) =>{
    console.log(`The efection of my code ${params}`);
}
lara(4);
lara("5")


/////////////////////////////////////////////////////////////


Intersection types: WE are are used this type when we declear any kind of types in One place like combined. Other wise we declease types separately like , 
type a = {
    name:string,
    roll:number,
},
type a = {
    name:string,
    roll:number,
},

this way but we write it using 
Intersection types like , 

type a = {
    name:string,
    roll:number,
},
type a = {
    name:string,
    roll:number,
},

type InterSectionType = a&b   it is Intersection type


example:


type a = {
    name:string,
    roll:number,
},
type a = {
    name:string,
    roll:number,
},

type InterSectionType = a&b

