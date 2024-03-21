let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());

// console.log(typeof myDate); // Date is a object in js
// let myCreatedDate = new Date(2024,2,16);

// let myCreatedDate = new Date("03-16-2023");// MM-DD-YYYY
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// let myAnotherDate = new Date(2022,1,5,3,33,40);
// console.log(myAnotherDate.toLocaleString());

console.log(Date.now());//current date in milliseconds
console.log(Math.floor(Date.now()/1000));//current date in seconds

// toLocaleString is used to customize date formats