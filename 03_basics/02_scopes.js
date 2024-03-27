// var is function scoped 
// let and const are block scoped
// {} //a block like function block or conditional block

var c = 30; //function scoped
{
    let a = 1;
    const b =2;
    var c = 3;//getting value of c updated 
}

// console.log(a);
// console.log(b);
console.log(c);