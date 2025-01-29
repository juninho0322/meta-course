// functions which receives a function as a parameter
function doubleIt(num) {
  return num * 2;
}

function objectMaker(val) {
  return {
    prop: val,
  };
}

console.log(objectMaker(20));

console.log(doubleIt(10).toString());

console.log(objectMaker(doubleIt(100)));

// recursion function diff way to loop through something, function is called inside it self
let counter = 3;
function recursion() {
  console.log(counter);
  counter = counter - 1;
  if (counter === 0) return;
  recursion();
}
recursion();

// another example using functions, passing functions as a parameters
function addtwo(a, b) {
  console.log(a);
  console.log(b);
  console.log(a + b);
}

// funcion to return a random number
function randomNum() {
  // 20% of the time return 42, otherwise return a random number between 1 and 10
  return Math.random() < 0.2 ? 42 : Math.floor(Math.random() * 10) + 1;
}
// function to return a specific number
function specificNum() {
  return 42;
}
// function to return a random number or a specific number
let useRandom = true;
let getNumber;
if (useRandom) {
  getNumber = randomNum;
} else {
  getNumber = specificNum;
}

addtwo(getNumber(), getNumber());
