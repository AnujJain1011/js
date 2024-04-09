// const promiseOne = new Promise(function(resolve,reject){
    //Do async tasks
//     //DB calls,cryptographoc calculations,network
//     setTimeout(function(){
//         console.log('Async task completed');
//         resolve()
//         // Promise.resolve(thenable)
//         // console.log('resolved');
//     },1000)
// })
// promiseOne.then(function(){
//     console.log('promise consumed');
// })

// new way to create promise
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async 2 completed");
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("async 2 resolved");
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({userName:"chai",email:"chai@example.com"})
//     },1000)
// })
// const username = promiseThree.then(function(user){
//     console.log(user);
// })
// console.log(username);

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error)
//         {
//             resolve({userName:"Hitesh",password:"1234"});
//         }else{
//             reject("ERROR:Something Went Wrong")
//         }
//     },1000)
// })
// // const username = will not work
// promiseFour.then(function(user){
//     console.log(user);
//     return user.userName; 
// }).then(function(username){
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(function(){
//     console.log('The promise is either resolved or rejected');
// })

// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error)
//         {
//             resolve({userName:"javascript",password:"1234"});
//         }else{
//             reject("ERROR:Js Went Wrong")
//         }
//     },1000)
// })
// async function ConsumePromiseFive(){
//     try{
//         const response = await promiseFive
//         console.log(response);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// ConsumePromiseFive()
// console.log(typeof promiseFive); //promise is a object that will perform something in future


// async function getAllUsers(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     // console.log(response);
//     // const data = response.json(); //.json() will return a promise and this conversion is taking time
//     // console.log(data);
//     const data = await response.json()
//     console.log(data);
//     }
//     catch(error){
//         console.log('E: error');
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
})
.catch((error)=> console.log('E:error'))
.finally(()=> console.log('The promise is either resolved or rejected'))