//dates --> It is a object that gives time of that moment in a platform independent format but integrals in milisecond

let myDate= new Date()
// console.log(myDate);
// console.log(myDate.toDateString());  //Converts date into a string and understable 
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

//To declare your wish date 
// let myCreateDate = new Date(2023,0 , 20)  //(year,month,date)  -->In js month start from 0 
// console.log(myCreateDate.toDateString()); 
// let myCreateDate1 = new Date(2023,0,20,5,4)   //(year,month,date,hours,minutes,seconds)
// console.log(myCreateDate1.toLocaleString());
// let myCreateDate2 = new Date("2023-01-8")   //YYYY-MM-DD
// console.log(myCreateDate2.toLocaleString());
 let myCreateDate3 = new Date("02-10-2023")  //MM-DD-YYYY
// console.log(myCreateDate3.toLocaleString());

//TO create a timestamp
let myTimestamp = Date.now()
console.log(myTimestamp);
console.log(myCreateDate3.getTime());   //To get time till this date
// console.log(myTimestamp.toLocaleString());

//To convert into seconds
console.log(Math.floor(Date.now()/1000));   //Convert this to seconds by dividing by 1000 but in float so we use floor


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());  //TO avoid confusion we can writ as newDAte.getMonth()  + 1

//It is used to be specific about how we want our date.The default states that the interantionalise format
//It also helps in how we want the date format 
console.log(newDate.toLocaleString('default',{                  
    weekday:"long",                                             
    day:"numeric"
}));










