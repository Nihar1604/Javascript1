let age = "33abc"
console.log(typeof age);

let valueInNumber = Number(age)     //Convert to number 
console.log(typeof valueInNumber);
console.log(valueInNumber);        //Nan

//"33" -> 33
//"33abc" -> Nan
// true -> 1; false -> 0

let isLoggedIn = 1
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);

//1 -> True & 0 -> false
//" " -> false

//"hitesh" -> false

let someNumber= 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

//******************************Operations*******************************

let value = 3
let negValue = -value
//console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%1);

let str1 = "hello"
let str2 = "nihar"

console.log(str1 + str2);        //Concatenation 

// console.log("1"+ 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);           //Here since the first element is string so the further all are converted as string
// console.log(1 + 2 + "2");           //Here since the first two elements are number so addition is done then the remaing string is concatenated

console.log(true);   //true
console.log(+true);  //1


let num1,num2,num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++    //postincrement
++gameCounter    //preincrement
console.log(gameCounter);















