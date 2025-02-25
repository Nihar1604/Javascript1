const name = "hitesh"
const repocount = 50

console.log(name + repocount+ "value");

//string interpolation 
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

//Declaring string using new keyword
const gameName = new String('Hitesh')

// console.log(gameName[0]);   //To get value 0 key
// console.log(gameName.length);  //To get length methods 
// console.log(gameName.toUpperCase());  //To get uppercase 
console.log(gameName.charAt(2));    //To know which character is at particular index
console.log(gameName.indexOf('e'));

//Substring method
let newstring = gameName.substring(0,3)    //substring(start,end) the substring is from start to end - 1
console.log(newstring);

//Difference between the both is basically we can put negative input for slice method and it will obey that but if we give -ive value to substring it will not obey that but start from 0 

//Slice method
const anotheString = gameName.slice(-5,4)
console.log(anotheString);

//Trim method --> To avoid unwanted spaces in the string.Works only on white spaces and line characters
const newstring1 = "   hitesh  "
console.log(newstring1);
console.log(newstring1.trim());

//replace() method --> It is use to replace something from string and to something else 
const url = "www.gmail%20.com"
console.log(url.replace('%20', '-'));

//includes() method -->It is used to know wether the provided string is present in the main sring
console.log(url.includes('gmail'));

//Split method --> It is used to take a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
const str = "Nihar-Ravi-Thalkar"
console.log(str.split('-',2));







