// const score = 400     //JS has declared its type has number
// console.log(score);


// const balance  = new Number(100)   //It is a new object with number type.We have define number datatype explicitely
// console.log(balance);

// //Tostring() method used to convert the number into string
// console.log(balance.toString());
// console.log(balance.toString().length);

// //.Tofixed(x) method is used to get value upto x number of decial
// console.log(balance.toFixed(3));

// //Toprecision method is used to get more precise value upto x number of digits and it returns o/p in form of string
// const othervalue = 23.988998
// console.log(othervalue.toPrecision(3));

// //ToLocaleString method is uesd to convert it to string and more readable format.The commas are inserted according to US standards so for IND standards we use 'en-IN' 
// const num1 = 1000000
// console.log(num1.toLocaleString('en-IN'));

//***************MATHS******************* */
console.log(Math);    //It is a object itself with many functions

//.abs() function
console.log(Math.abs(-2));   //Acts as a modulus

//.round()
console.log(Math.round(4.3));  //Round of 

//.ceil()  and .floor()
console.log(Math.ceil(4.3));  //Nearest greater 
console.log(Math.floor(5.4)); //Nearest lesser

console.log(Math.min(4,2,3,5,6));
console.log(Math.max(4,7,3));

//Random()
console.log(Math.random());   //It gives only between 0 and 1
console.log((Math.random()*10) + 1);  //It gives a values from 1 to 10.The *10 shifts one digit and +1 is used to avoid in case the random has generated 0.0909 type ineteger 
console.log(Math.floor((Math.random()*10))+1);  //Here the float is converted to floor integer value

//Trick and formula for user defined min and max value for range 
//Formula = Math.random() * (max-min + 1) + min
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);










