const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
// console.log(myTotal);


const shoppingCart = [
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"python course",
        price:999
    },
    {
        itemName:"mobile dev course",
        price:7999
    },
    {
        itemName:"data scientist course",
        price:8999
    },
    {
        itemName:"cpp course",
        price:999
    },
]

// const priceToPay = shoppingCart.reduce( (accumulator,curr)=>{// curr is an element of the array may be single value or object or another array
//     return accumulator + curr.price
// },0)
// console.log(priceToPay);

