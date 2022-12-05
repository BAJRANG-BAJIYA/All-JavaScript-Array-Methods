// Example 1:
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]

console.log(animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]


// Example 2: Return a portion of an existing array

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']


// Example 3:
// Using slice, create newCar from myCar.
// const myHonda = {
//   color: "red",
//   wheels: 4,
//   engine: { cylinders: 4, size: 2.2 },
// };
// const myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
// const newCar = myCar.slice(0, 2);

// console.log("myCar =", myCar);
// console.log("newCar =", newCar);
// console.log("myCar[0].color =", myCar[0].color);
// console.log("newCar[0].color =", newCar[0].color);

// Change the color of myHonda.
// myHonda.color = "purple";
// console.log("The new color of my Honda is", myHonda.color);

// console.log("myCar[0].color =", myCar[0].color);
// console.log("newCar[0].color =", newCar[0].color);


// Example 4: Calling slice() on non-array objects
// const arrayLike = {
//   length: 3,
//   0: 2,
//   1: 3,
//   2: 4,
// };
// console.log(Array.prototype.slice.call(arrayLike, 1, 3));
// [ 3, 4 ]

// Example 5: Using slice() to convert array-like objects to arrays

// slice() is called with `this` passed as the first argument

// ????????????????? Const-slice= Function.prototype.call.bind(Array.prototype.slice);

// function list() {
//   return slice(arguments);
// }

// const list1 = list(1, 2, 3); // [1, 2, 3]
