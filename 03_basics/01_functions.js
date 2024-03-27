// function addTwoNumbers(num1,num2){ // function definition parameters
//     console.log(num1+num2);
// }
// addTwoNumbers(); //NaN
// addTwoNumbers(3);//NaN
// addTwoNumbers(3,"4");//34  arguements

function loginUserMessage(userName="ayush K"){ //default value of parameter
    return `${userName} just loggedIn`;
}

// console.log(loginUserMessage("Ayush"));
// console.log(loginUserMessage("hitesh"));

function calculateCartPrice(num2,num3,...num1){ //...(rest operator) takes all the parameters as a single array,Rest operator must be placed at last
    return num1;
}

// console.log(calculateCartPrice());//empty array
// console.log(calculateCartPrice(2,3,4,5));

// const user = {
//     userName : "ayush",
//     prices:"$99"
// };

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject?.userName} and price is ${anyobject?.price}`);
// }

// // handleObject(user);
// handleObject({ // object passing directly
//     userName:"AyushK",
//     price:99
// });

function handleArray(anyarray){
    console.log(`firstName is ${anyarray[0]} and lastName is ${anyarray[1]}`);
}
handleArray(["AyushT","Kumar"]);