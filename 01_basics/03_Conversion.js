let score = "255juo"; // NaN conversion
score = null; // after conversion => 0
score = undefined; // NaN
score = true; // 1
score = false; // 0
score = "33"; // 33

console.log(typeof score); // string

let valueInNumber = Number(score);
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // 33

let isloggedin = "chunnu";
let booleanisloggedin = Boolean(isloggedin);
console.log(booleanisloggedin); // true
// 1 => true, 0 => false, "chunnu" => true

let someNumber = 69;
let stringNumber = String(someNumber);
console.log(stringNumber); // "69"
console.log(typeof stringNumber); // string

let str1 = "chunnu";
let str2 = "ayan";

let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");

console.log("1" + 2 + 3);
console.log(1 + 2 + "3");
