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
for (const [game] of games) {
    console.log(game);
}
