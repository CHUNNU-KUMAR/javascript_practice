let marvel_heros = ["thor", "ironman", "spiderman"];
let dc_heros = ["superman", "flash", "batman"];

//marvel_heros.push(dc_heros);
//console.log(marvel_heros); //[ 'thor', 'ironman', 'superman', [ 'spiderman', 'flash', 'batman' ] ]
// it has merged all arrys and consider it as an element and accessed as marvel_heros[3][2]=batman
//console.log(marvel_heros[3][2]);

// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros];
//console.log(all_new_heros);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, 8, [6, 7, 8, [5, 6]], 9];

const real_another_Arr = anotherArr.flat(Infinity);
console.log(real_another_Arr);

console.log(Array.isArray("chunnu"));
console.log(Array.from("chunnu"));
console.log(Array.from({ name: "chunnu" })); // interesting case unable to convert it into Array

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
