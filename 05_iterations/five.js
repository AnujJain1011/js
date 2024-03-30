const coding = ["javaScript","ruby","cpp","java","swift"]

// coding.forEach(function (item) {
//     console.log(item);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

coding.forEach((val,index,arr)=>{  //callback function in forEach can take up to three arguements
    console.log(val,index,arr);
})

function printMe(item){
    // console.log(item);
}

// coding.forEach(printMe())//execution will give nothing
// coding.forEach(printMe) // refrence dena hai