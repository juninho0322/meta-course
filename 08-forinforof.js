const animal = {
  canJump: true,
};

const bird = Object.create(animal);

bird.canFly = true;
bird.hasFeathers = true;

// for in loop, loops through the objects keys and prototype chain
function animalCan() {
  //console.log("animalcan");
  for (const key in bird) {
    console.log(`${key}: ${bird[key]}`);
  }
}

animalCan();
