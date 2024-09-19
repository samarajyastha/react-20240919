// ES-6
let name = "sam";
name = "ram";

const address = "pokhara";

function sum(a, b) {
  const result = a + b;

  return result;
}

// arrow function
const arrowSum = (a, b) => a + b;

// template literals
const result = "hello my name is " + name + "and I live in " + address;

const templateResult = `Hello my name is ${name} and I live in ${address}`;

const list = [3, 456, 78, 234, 7, 5];

// Higher order methods (array methods)
// map
list.map((item) => item + 1); // [4, 457, 79, 235, 8, 6]

// filter
list.filter((item) => item < 100); // [3, 78,7,5]
// reduce
// sort

// Destructure
const user = {
  name: "ram",
  age: 20,
  address: "ktm",
};

const { name: userName, age, address: userAddress } = user;

const userResult = `Hello i am ${userName} and i am ${age} years old.`;

// spread operator
const data = {
  name: user.name,
  age: user.age,
  address: user.address,
};

const newData = { ...user };
