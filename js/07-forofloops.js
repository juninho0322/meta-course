//for of loops
const colors = ["red", "green", "blue"];
for (var color of colors) {
  console.log(color);
}

//extracting the keys of an object using built-in methods
const car = {
  brand: "Ford",
  model: "Fiesta",
  year: 2019,
};

console.log(Object.keys(car));
console.log(Object.values(car));
console.log(Object.entries(car));

//loop over any objects own properties keys and values

let clothes = {
  price: 100,
  size: "M",
  color: "blue",
  material: "cotton",
};

for (const key of Object.keys(clothes)) {
  console.log(key, ":", clothes[key]);
}

// function dynamic key
function testBracketsDynamiAccess() {
  let dynamicKey;
  if (Math.random() > 0.5) {
    dynamicKey = "speed";
  } else {
    dynamicKey = "color";
  }
  let drone = {
    speed: 15,
    color: "blue",
  };
  console.log(drone[dynamicKey]);
}

testBracketsDynamiAccess();

// challenge 01 for of loop
let dairy = ["milk", "cheese", "yogurt"];
function logDairy() {
  for (const product of dairy) {
    console.log(product);
  }
}

logDairy();

//challenge 02 for of loop
const animal = {
  canJump: true,
};

const bird = Object.create(animal);

bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
  //  console.log("birdcan");
  for (const key of Object.keys(bird)) {
    console.log(`${key}: ${bird[key]}`);
  }
}

birdCan();

//challenge 03 for in loop
// for in loop, loops through the objects keys and prototype chain
function animalCan() {
  //console.log("animalcan");
  for (const key in bird) {
    console.log(`${key}: ${bird[key]}`);
  }
}

animalCan();
