//what will be the output of the following code?

const meal = ["soup", "salad", "main course", "dessert"];
let [starter] = meal;
console.log(starter);

// what value will be printed to the console?
let obj = {
  key: 1,
  value: 4,
};

let output = { ...obj };
output.value -= obj.key;

console.log(output.value);
