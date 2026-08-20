const pig = {
  name: "Pink",
  type: "pig",
  age: 5,
  sound: "Oink!",
  makeSound () {
    console.log(`${this.name} is a ${this.age} year old ${this.type} that goes ${this.sound}!`)
  }
};

const sheep = {
  name: "Margareth",
  type: "sheep",
  age: 5,
  sound: "Meeeh!",
  makeSound () {
    console.log(`${this.name} is a ${this.age} year old ${this.type} that goes ${this.sound}!`)
  }
};

const dog = {
  name: "Axel",
  type: "dog",
  age: 5,
  sound: "Au Au!",
  makeSound () {
    console.log(`${this.name} is a ${this.age} year old ${this.type} that goes ${this.sound}!`)
  }
};

pig.makeSound();
sheep.makeSound();
dog.makeSound();