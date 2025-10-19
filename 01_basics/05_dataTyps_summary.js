// two types of data types
//1 primitive types
// it means the value of this will copied and then copied values will be changed not original value

//7 types : string, number,boolean,null, undefined, symbol,Bigint

const score = 100; // number
const scorevalue = 100.3; // number

const isLoggedIn = false; //boolean
const outsideTemp = null; //object
let userEmail;

const id = Symbol("123"); // symbol
const anotherId = Symbol("123"); //symbol
console.log(id == anotherId);
const bignumber = 35897885469585n; //bigint
console.log(typeof bignumber);

// 2.reference types or non-primitive types

// array , objects , Functions

const heros = ["ironman", "captain America", "thor", "loki"]; // object
console.log(typeof heros);

let myobj = {
  name: "ayan",
  age: 23,
}; //object
console.log(typeof myobj);

const myfunction = function () {
  console.log("hello world");
}; //undefined
console.log(typeof myFunction);


//++++++++++++++++++++++++++++++++++++++++++++++
// two types of memory availble 
// stack memory (for primitive ), heap (non primitive)

let myname="chunnu"

let anothername=myname
anothername="ayan"
console.log(myname);
console.log(anothername);

let userOne={
  email:"chunnu@google.com",
  upi:"user@ybl"
}
let userTwo=userOne
userTwo=userOne
userTwo.email="ayan@google.com"

console.log(userOne.email);
console.log(userTwo.email);

