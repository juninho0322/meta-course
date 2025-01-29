// data structure - (object - array - map - set)

// FOREACH ARRAY METHOD
const fruits = ["apple", "banana", "orange"];

// function declaration and passing the function as an argument
function logFruits(fruit, index) {
  console.log(`Fruit ${index}: ${fruit}`);
}
console.log("Function declaration");
fruits.forEach(logFruits);

//anonymous function
console.log("Anonymous function");
fruits.forEach(function (fruit, index) {
  console.log(`Fruit ${index}: ${fruit}`);
});

// arrow function
console.log("Arrow function");
fruits.forEach((fruit, index) => {
  console.log(`Fruit ${index}: ${fruit}`);
});

//FILTER ARRAY METHOD
// anonymous function
const nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log("Anonymous function");
console.log(
  nums.filter(function (num) {
    return num > 50;
  })
);
// filter arrow function
console.log("Arrow function");
console.log(nums.filter((num) => num > 50));

//filter function declaration
function filterNums(num) {
  console.log(num.filter((num) => num > 50));
}
console.log("Function declaration");
filterNums(nums);

//MAP ARRAY METHOD
nums.map((num) => console.log(num / 10));

let bestBooks = new Map();
bestBooks.set(1, "Harry Potter");
bestBooks.set(2, "The Hobbit");
bestBooks.set(3, "The Lord of the Rings");
bestBooks.set(4, "The Alchemist");

console.log(bestBooks);
console.log(bestBooks.get(1));

//SET ARRAY METHOD

//example 1
const repetitiveNums = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
const uniqueNums = new Set(repetitiveNums);
console.log(uniqueNums);

//example 2
const repetitiveNames = [
  "Luis",
  "Luis",
  "Luis",
  "Luis",
  "Luis",
  "Luis",
  "Luis",
];
const uniqueNames = new Set(repetitiveNames);
console.log(uniqueNames);
