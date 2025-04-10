// polymorphism
const bike = {
  bell: function () {
    return "Ring Ring! Watch Out, please";
  },
};

const door = {
  bell: function () {
    return "Ring Ring! Come here, please";
  },
};

console.log(bike.bell());
console.log(door.bell());

function ringTheBell(thing) {
  console.log(thing.bell());
}

ringTheBell(bike);
ringTheBell(door);

//polymorphism classes
class Bird {
  useWings() {
    console.log("Flying");
  }
}

class Eagle extends Bird {
  useWings() {
    super.useWings();
    console.log("Barely flapping!");
  }
}

class Penguin extends Bird {
  useWings() {
    console.log("Diving");
  }
}

let baldEagle = new Eagle();
let kingPenguin = new Penguin();

baldEagle.useWings();
kingPenguin.useWings();

////////////////////////////////////////////////////
// creating classes

class Train {
  constructor(color, lightsOn) {
    this.color = color;
    this.lightsOn = lightsOn;
  }
  //methods

  // change the value stored in the lightsOn property of the future instance object of the Train class
  toggleLights() {
    this.lightsOn = !this.lightsOn;
  }
  lightStatus() {
    console.log("Lights on?", this.lightsOn);
  }
  getSelf() {
    console.log(this);
  }
  getPrototype() {
    let proto = Object.getPrototypeOf(this);
    console.log(proto);
  }
}

let myFirstTrain = new Train("red", true);

// the result of calling toggleLights() is the change of true to false and vice-versa, for the lightsOn property
myFirstTrain.toggleLights();
myFirstTrain.lightStatus();
myFirstTrain.getSelf();
myFirstTrain.getPrototype();

//polymorphism, inheriting from the base class and then overiding the inherited behavior
// super is used to specify what property gets inherited from the super-class in the sub-class
class HighSpeedTrain extends Train {
  constructor(passengers, highSpeedOn, color, lightsOn) {
    super(color, lightsOn);
    this.passengers = passengers;
    this.highSpeedOn = highSpeedOn;
  }
  toggleHighSpeed() {
    this.highSpeedOn = !this.highSpeedOn;
    console.log("High speed status:", this.highSpeedOn);
  }
  toggleLights() {
    super.toggleLights();
    super.lightStatus();
    console.log("Lights are 100% operational.");
  }
}

let train01 = new Train("Blue", false);
let highSpeed01 = new HighSpeedTrain(200, false, "green", true);
train01.toggleLights();
train01.lightStatus();
highSpeed01.toggleLights();

// setting default parameters

class Animal {
  constructor(color = "yellow", energy = 100) {
    this.color = color;
    this.energy = energy;
  }
}
let cat = new Animal();

console.log(cat.color); // default color is yellow if u dont pass any argument

////////////////////////////////////////////////////
//class example
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(`Hi ${this.name}, good to see you with age ${this.age}`);
  }
}

let person1 = new Person("Luis", 30);
person1.sayHello();

//class example with inheritance
class Worker extends Person {
  constructor(name, age, job) {
    super(name, age);
    this.job = job;
  }
  sayHello() {
    console.log(
      `Hi ${this.name}, good to see you with age ${this.age} and working as ${this.job}`
    );
  }
}

let worker1 = new Worker("Luis", 30, "developer");
worker1.sayHello();
