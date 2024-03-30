// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    if(greet == " ")
    continue;
    // console.log(`Each char is ${greet}`)
}

const map = new Map();
map.set("IN","India")
map.set("USA","United States of America")
map.set("Fr","France")
map.set("USA","United States of Antarctica")
// console.log(map);

for (const [key,value] of map) {
    // console.log(key,":",value);   
}

const games = {
    'game1' : "NFS",
    'game2' : "Roadrash"
};
// console.log(games);
// for (const [game] of games) {  //will give error
    // console.log(game);
// }

for (const key in games) {
    // console.log(`${key} is ${games[key]}`);
}

// array of objects 
const myCoding = [
    {
        languageName : "Javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
]
//using forEach
myCoding.forEach((item)=>{
    console.log(item.languageName);
})