
// Primitive:- 7 categories:String,Number,Boolean,null,undefined,symbol,BigInt
const score = 100 
let scoreValue;

const id =Symbol("123")
const idOther = Symbol("123")
console.log(id == idOther);

// Refrence type:-Arrays ,Objects,Functions 

// JS is a dynamically typed language
const heros = ["Ironman" , "Spiderman" ,"shaktiman"];  //array

let obj={
    name:"Nihar",
    age:21,
}                     

const myFunction=function(){
    console.log("Hello World");
}

console.log(typeof heros
);

//*************************************************************************************************** */
//Stack Memory ---> Primitive datatype
//Heap Memory --->Non Primitive datatype


//stack memory example for primitive datatype
let YTname = "Chaiaurcode"
anothername = YTname

anothername = "ChaiaurCode2"  //Here in stack memory the original reference of var YTname is not given but a copy is provided to var anothername.So if we change value of anothername then the value in YTname var will not change.
console.log(anothername);
console.log(YTname);

//Heap memory example for non primitive datatype
let userid1 ={
    email:"xyz@g.com",
    name:"xyz"
}

let userid2 = userid1
userid2.email = "abc@g.com"        //Here the original var userid1 reference is given to userid2 so if we make any change in userid2 then it also reflects for userid1.Note that the var is stored in stack memory but the reference and object value is stored in heap memory
    
console.log(userid1.email);    //abc@g.com
console.log(userid2.email);    //abc@g.com

