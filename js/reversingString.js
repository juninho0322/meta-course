// split, splits into array, reverse, reverse the array index orders, join, make the array a string
function reverseString(srt) {
  return srt.split("").reverse().join("");
}

let user = "luis";
console.log(reverseString(user));

// using for
// length -1 starts from the last character of the string
// i>=0 loops until the first character
// reversed += str[i] appendes eacg character to the reversed string
function reverseStringFor(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
let user01 = "teste";
console.log(reverseStringFor(user01));
