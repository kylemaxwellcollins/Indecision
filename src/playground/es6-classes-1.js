// setup constructor to take name and age (default 0)
// getDescription - Kyle Collins is 26 years old.

class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi, I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription()

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`
    }
    return description
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation){
    super(name, age)
    this.homeLocation = homeLocation
  }
  getGreeting() {
    let greeting = super.getGreeting()
    if (this.homeLocation){
      greeting += ` I'm visiting from ${this.homeLocation}`
    }
    return greeting
  }
}

// Traveler -> person
// Add support for homeLocation
// 1. Hi. I am Kyle Collins. I'm visiting from Toronto.
// 2. Hi. I am Kyle Collins.

const me = new Traveler("Kyle Collins", 26, "Toronto");
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());
