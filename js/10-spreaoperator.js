// Spread Operator with arrays
const fruits = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
];
const berries = [
  "elderberry",
  "strawberry",
  "raspberry",
  "blackberry",
  "blueberry",
];
const allFruits = [...fruits, ...berries];
console.log(allFruits);

// Spread Operator with objects
const flying = { canFly: true };
const car = { wheels: 4 };
const flyingCar = { ...car, ...flying };
console.log(flyingCar);

// spread operator adding elements to an array
let veggies = ["potato", "tomato", "onion"];
veggies = [...veggies, "carrot", "cucumber"];
console.log(veggies);

//convert string to array using spread operator
const str = "hello";
const strArray = [...str];
console.log(strArray);

// same result using split method
const strToArray = str.split("", str.length);
console.log(strArray);

//copy either an object or an array into a separate one
const car1 = {
  speed: 100,
  color: "blue",
};
const car2 = { ...car1 };

car1.speed = 200;

console.log(car1.speed, car2.speed);

//copying an array into a separate one using the spread operator
const fruits1 = ["apple", "banana", "cherry"];
const fruits2 = [...fruits1];
fruits1.pop();
console.log(fruits1, "not", fruits2);
