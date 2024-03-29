//Immediately invoked function expression
//prevents the function from getting polluted by global variables

(function chai(name){ // function with name : named iife
    console.log("DB Connected to "+name);
})("hitesh");

( (name) => { // unnamed IIFE
    console.log(`DB Connected Two by ${name}`);
})("ayush")

