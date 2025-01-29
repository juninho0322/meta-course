try {
  //theses have never been declared, resulting in an error
  console.log(a + b);
} catch (err) {
  console.log(err);
  console.log("there was an error");
}
console.log("My program doesnt stop");

// throw NEW ERROR
function addTwo(a, b) {
  try {
    if (typeof a != "number") {
      throw new ReferenceError("value of A is not a number");
    } else if (typeof b != "number") {
      throw new ReferenceError("value of B is not a number");
    } else {
      console.log(a + b);
    }
  } catch (err) {
    console.log("Error!", err);
  }
}
addTwo(5, "a");
console.log("my program still runs even when having an error.");

//function with for and if - defensive program
function letterFinder(word, match) {
  let cond1 = typeof word == "string" && word.length >= 2;
  let cond2 = typeof match == "string" && match.length == 1;
  if (cond1 && cond2) {
    for (let i = 0; i < word.length; i++) {
      if (word[i] === match) {
        console.log(`Found the ${match} at ${i}`);
      } else {
        console.log(`--- no match found at ${i}`);
      }
    }
  } else {
    console.log("pleasse pass the correct arguments to the function");
  }
}
letterFinder("test", "t");

var result = "Hello".lastIndexOf("l");
