// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const myNewNums = myNums.filter( (item) => (item>4))
// console.log(myNewNums);

// myNums.forEach()//return nhi krta hai 
// const myNewNums = [];
// myNums.forEach( (num)=>{
//   if(num>4)
//   myNewNums.push(num)
// })
// console.log(myNewNums);

const books = [
  {
    title:"Book one",genre:"fiction",publish:2008,edition:2013
  },
  {
    title:"Book two",genre:"non-fiction",publish:2005,edition:2011
  },
  {
    title:"Book three",genre:"fiction",publish:2005,edition:2014
  },
  {
    title:"Book four",genre:"science",publish:2002,edition:2021
  },
  {
    title:"Book five",genre:"non-fiction",publish:2007,edition:2019
  }
]
let userBooks = books.filter( (bk)=> bk.genre === "fiction")
userBooks = books.filter( (bk)=> {return bk.publish > 2004 && bk.genre === "fiction"})
console.log(userBooks);