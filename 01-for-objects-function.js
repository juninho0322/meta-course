const n1 = 10;
const n2 = 100;

if (n1 < n2) {
  console.log(n1);
} else {
  console.log(n2);
}

//object
const days = {
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
};

//nested for
for (i = 1; i <= 2; i++) {
  for (j = 1; j <= 5; j++) {
    console.log(`Week ${i} - Day ${days[j]}`);
  }
}

//nested for
for (i = 0; i < 2; i++) {
  for (j = 0; j < 3; j++) {
    console.log("Hello" + i + "-" + j);
  }
}

for (i = 0; i <= 2; i++) {
  console.log("test" + i);
}

function addTwo(a, b) {
  console.log(a + b);
}

addTwo(10, 2);

//function with for and if
function letterFinder(word, match) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === match) {
      console.log(`Found the ${match} at ${i}`);
    } else {
      console.log(`--- no match found at ${i}`);
    }
  }
}

letterFinder("test", "t");
