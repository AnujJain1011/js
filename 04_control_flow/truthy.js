const userEmail = []

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    // console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



// console.log(val1);

// Terniary Operator

// condition ? true : false

// const iceTeaPrice = 100
// iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

// let bigNumber = BigInt(900889987670);
// if("0" && " " && [] && {} && "false" && function(){})
// console.log("truthy");
// else
// console.log("falsy");

// let foo;

// // foo is never assigned any value so it is still undefined
// const someDummyText = foo || "Hello!";
// console.log(someDummyText);

const count = 0;
const text = "";

let qty = count || 42;
let message = text || "hi!";
console.log(qty); // 42 and not 0
console.log(message); // "hi!" and not ""

qty = count ?? 42;
message = text ?? "hi!";
console.log(qty); // 42 and not 0
console.log(message); // "hi!" and not ""