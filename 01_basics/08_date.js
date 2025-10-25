// date and time in js

// let mydate = new Date();
// console.log(mydate); //2025-10-24T15:04:08.830Z
// console.log(typeof mydate); // object type

// console.log(mydate.toString()); //Fri Oct 24 2025 20:34:08 GMT+0530 (India Standard Time)
// console.log(mydate.toLocaleString()); //24/10/2025, 8:34:08 pm
// console.log(mydate.toDateString()); //Fri Oct 24 2025
// console.log(mydate.toTimeString()); //20:34:08 GMT+0530 (India Standard Time)
// console.log(mydate.toISOString()); //2025-10-24T15:07:53.968Z
// console.log(mydate.toJSON()); //2025-10-24T15:04:08.830Z
// console.log(mydate.toUTCString()); //Fri, 24 Oct 2025 15:04:08 GMT
// console.log(mydate.toLocaleDateString()); //24/10/2025

let myCreateddate = new Date(2025, 9, 24);
// console.log(myCreateddate.toLocaleDateString()); //24/10/2025

let myCreateddate1 = new Date(2025, 19, 24);
// console.log(myCreateddate1.toLocaleDateString()); //24/8/2026

let myCreateddate2 = new Date(2025, 8, 4, 15, 36, 2);
// console.log(myCreateddate2.toLocaleString()); //4/9/2025, 3:36:02 pm

let myCreateddate3 = new Date("2025-06-31");
//console.log(myCreateddate3.toLocaleString()); //01-07-2025
let myCreateddate4 = new Date("10-08-2025");
//console.log(myCreateddate4.toLocaleString()); //08-10-2025 mm/dd/yy

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreateddate4.getTime()); // milisecond
// console.log(Math.floor(Date.now() / 1000)); // this has been used to change the milisecond to second
let newDate = new Date();

console.log(newDate.getTime()); // real time
console.log(newDate.getFullYear());
console.log(newDate.getMonth() + 1); //months running
console.log(newDate.getDate()); // date of today
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getTimezoneOffset());

newDate.toLocaleString("default", {
  weekday: "long",
});
