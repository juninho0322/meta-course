const Mult = (a) => {
  return a * 2;
}

//syntax sugar for default parameters
const Mult2 = a =>  {
  return a * 2;
};

//syntax sugar for default parameters
const Mult3 = a => a * 2;


const Add = (a, b) => {
  return a + b;
}

const Add2 = (a, b) => a + b;


const printRandom = () => {
  const random = Math.random();
  console.log(random);
  return random;
}

const printRandom2 = () => console.log(Math.random());


// double(double(double(2)))



const double2 = (a) => { return a * 2};

const person = () => ({name: "John", age: 30});





function multiply(a) {
  return function(b) {
    return a * b;
  }
}

const multiplyByten = multiply(10);
const result = multiplyByten(5);  
console.log(result); // 50

const multiply = a => b => a * b;






