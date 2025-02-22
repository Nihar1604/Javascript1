// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2==1);
// console.log(2==1);
// console.log(2 != 1);

//Comparison between different datatypes
// console.log("2">1);         //automatically converts str to number
// console.log("02">1);

//Comparison of null
console.log(null>0);     //Equality check(==) and comparisons works differently 
console.log(null==0);    //comparisosns convert null to 0 so that null > 0 -> false
console.log(null >= 0);  //and null == 0 --> True

//Strict check(===) --> Checks the datatypes for comparison an does not do any conversion like == 
console.log("2" == 2);    //True
console.log("2" === 2);   //False --> Because it doesnt convert the datatype of string to number










