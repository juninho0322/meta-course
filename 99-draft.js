// challenge 01 - for loop nested with object entries
const weekDays = {
  1: "monday",
  2: "tuesday",
  3: "wednesday",
  4: "thursday",
  5: "friday",
  6: "saturday",
  7: "sunday",
};

for (let i = 1; i <= 4; i++) {
  for (let [key, value] of Object.entries(weekDays)) {
    console.log(`Week ${i} - day ${key} - ${value}`);
  }
}

//// challenge 02 - sum numbers in array
const numbers = [1, 2, 3];

function sumNumbers() {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
}
sumNumbers();

// challenge 03 - compare two arrays
const numbersUser1 = [1, 2, 3, 10];
const numbersUser2 = [4, 5, 6, 8];
let user01Score = 0;
let user02Score = 0;

for (let i = 0; i < numbersUser1.length && i < numbersUser2.length; i++) {
  if (numbersUser1[i] > numbersUser2[i]) {
    user01Score += 1;
  } else {
    user02Score += 1;
  }
}

console.log(`User 01 score - ${user01Score}`);
console.log(`User 02 score - ${user02Score}`);

// whats the output of the following code?
const [a, b] = [1, 2, 3, 4];
console.log(b);

// whats the output of the following code?
function count(...args) {
  console.log(args.length);
}

console.log(count("burger", "fries", null));
