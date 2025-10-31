// Arrays

const myArr = [0, 2, 4, 6, 8]; // similar data  types of array

const diffArr = [6, 8, true, "Ayan"]; // diffrent data types of array

const myArr2 = new Array(1, 2, 3, 4, 5); // another method to initialize an array
//console.log(myArr2[1]);

// Array makes a shallow copy

//Array Methods
myArr2.push(6); // push
myArr2.push(7); // push
myArr2.pop();

myArr2.unshift(9); // add 9 at first place
myArr2.shift(); // remove 9 from first place

//console.log(myArr2);

// join fuction to join array and convert it into string

const newArr = myArr2.join();
// console.log(myArr2);

// console.log(newArr);
// console.log(typeof newArr);// string

// slice & splice

const myarr1 = [0, 1, 2, 3, 4, 5, 6, 7];

console.log("A", myarr1);
console.log("B", myarr1.slice(1, 4)); //1,2,3

console.log("C", myarr1); //0,1,2,3,4,5,6,7

console.log("D", myarr1.splice(1, 4)); // 1,2,3,4
console.log("E", myarr1); //0,5,6,7

// the diffrence between slice and splice is slice doesnot affect the original array while the splice affect the original array
