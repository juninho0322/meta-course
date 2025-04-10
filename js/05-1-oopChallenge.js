// task 1: code a person class
class Person {
  constructor(name = "tom", age = 20, energy = 100) {
    this.name = name;
    this.age = age;
    this.energy = energy;
  }
  sleep() {
    this.energy += 10;
  }
  doSomethingFun() {
    this.energy -= 10;
  }
}

//task 2 code a worker class

class Worker extends Person {
  constructor(name, age, energy, xp = 0, hourlyWage = 10) {
    super(name, age, energy);
    this.xp = xp;
    this.hourlyWage = hourlyWage;
  }
  goToWork() {
    this.xp += 10;
  }
}

//task 3 code an intern object, run methods

function intern() {
  let intern = new Worker("bob", 21, 110, 0, 10);
  intern.goToWork();
  return intern;
}
//task 4 code a manager object method
function manager() {
  let firstManager = new Worker("Alice", 30, 120, 100, 30);
  firstManager.doSomethingFun();
  return firstManager;
}

intern();
console.log(intern());

manager();
console.log(manager());
