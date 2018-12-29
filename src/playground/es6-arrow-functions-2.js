const multiplier = {
  // numbers - array of numbers
  numbers: [1, 2, 3],
  // multiplyBy - single number
  multiplyBy: 4,
  // multiply - return a new array where the number have been multiplied
  multiply(){
    return this.numbers.map((number) => number * this.multiplyBy)
  }
};

console.log(multiplier.multiply())