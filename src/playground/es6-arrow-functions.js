// const square = function (x) {
  //   return x * x;
  // }
  
  // const square = x => x * x;
  
  // console.log(square(8));
  
  // const fullName = "Kyle Collins";
  // let firstName;
  
  // if (fullName) {
  //   firstName = fullName.split(" ")[0];
  //   console.log(firstName);
  // }

// Use arrow function
// getFirstName("Mike Smith")
// Create regular function
// Create short hand expression arrow function

const getFirstName = (fullName) => {
  return console.log(fullName.split(" ")[0])
}

getFirstName('Mike Smith')


const getFirstNameArrow = fullName => console.log(fullName.split(' ')[0]);
getFirstNameArrow("Kyle Collins")

