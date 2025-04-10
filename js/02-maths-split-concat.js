// getting a randon number from 0 to 10 using random and ceil
let decimal = Math.random() * 10;
let rounded = Math.ceil(decimal);
console.log(rounded);

// split and concat methods
let consignment = "AMAZON DONCASTER";
let allocation = "0000655514";

let consInicials = consignment.split(" ", 2);
let consFirstThree = consInicials[1].split("C", 2);
console.log(consFirstThree[0]);
let allocNumber = allocation.split("0000", 2);
console.log(allocNumber);
let finalConsignment = consFirstThree[0].concat(allocNumber[1]);
console.log(finalConsignment);
