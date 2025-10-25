const name = "chunnu";
const repocount = 5;

// worst method to binding strings
console.log(name + repocount + " value");

// comparatevely better than previous
console.log(`Hello! My name is ${name} and my repo count is ${repocount}`);

const gameName = new String(`Ayan-Akash`);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf(`a`));

const newstring = gameName.substring(0, 4);
console.log(newstring);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const stringOne = "    Chunnu Akashlina  ";
console.log(stringOne);
console.log(stringOne.trim());

const url = "https//:chunnu.com/Akash%20Chunnu";
console.log(url.replace(`%20`, `-`));
console.log(url.includes(`Akash-Chunnu`));

console.log(gameName.split(`-`));

