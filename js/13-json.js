// **** converting JSON to JavaScript object ****

// JSON is a syntax for storing and exchanging data.
'{"name":"John","age":30,"city":"New York","state":"NY","country":"USA"}';

// JSON.parse() method is used to convert a JSON string to a JavaScript object.
const jsonStr =
  '{"name":"John","age":30,"city":"New York","state":"NY","country":"USA"}';

// Parse the JSON string and convert it into an object
const obj = JSON.parse(jsonStr);

// Access the object values
console.log(obj.name);
console.log(obj.age);

// change the value of the city property
obj.city = "San Francisco";

console.log(obj.city);

// ***** converting JavaScript object to JSON *****

const data = {
  game: "Crash Bandicoot",
  genre: "Platform",
  year: 1996,
  developer: "Naughty Dog",
  consoles: ["PlayStation", "Xbox", "Nintendo"],
};

// convert the object to a JSON string

JSON.stringify(data);
// '{"game":"Crash Bandicoot","genre":"Platform","year":1996,"developer":"Naughty Dog","consoles":["PlayStation","Xbox","Nintendo"]}'
