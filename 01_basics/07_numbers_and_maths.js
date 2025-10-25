const score = 300;
//console.log(score);

const balance = new Number(500); // always show dataTypes with value
//console.log(balance); // [number:500]

//console.log(balance.toString().length); // converted to string and length checking

//console.log(balance.toFixed(2)); //fixed 2 digit after decimal value i.e: 100.00,1598.00

const otherNumber = 1589.698756;
//console.log(otherNumber.toPrecision(5));

const hundreds = 158978954;
//console.log(hundreds.toLocaleString(`en-IN`));

//++++++++++++++++++++   Math  +++++++++++++++++++++++//

console.log(Math);
// console.log(Math.abs(-4)); // absolute value
// console.log(Math.round(4.3));// round off
// console.log(Math.ceil(4.2));//top round off value
// console.log(Math.floor(4.1));//lower round off
// console.log(Math.min(9,8,2,6,7));// min value find
// console.log(Math.max(9,8,2,6,7));// find max value

console.log(Math.random()); // generate random value every time within 0 to 1
console.log(Math.random() * 10 + 1); // generate random value with minimum 1 digit but not less than 1

const max = 20;
const min = 10;
console.log(Math.floor(Math.random() * (max - min + 1) + min));
