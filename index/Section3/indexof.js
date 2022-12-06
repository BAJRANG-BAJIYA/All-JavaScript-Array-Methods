// Example 1:
// const array = [2, 9, 9];
// array.indexOf(2); // 0
// array.indexOf(7); // -1
// array.indexOf(9, 2); // 2
// array.indexOf(2, -1); // -1
// array.indexOf(2, -3); // 0

// Example 2: Finding all the occurrences of an element
// const indices = [];
// const array = ["a", "b", "a", "c", "a", "d"];
// const element = "a";
// let idx = array.indexOf(element);
// while (idx !== -1) {
//   indices.push(idx);
//   idx = array.indexOf(element, idx + 1);
// }
// console.log(indices);
// // [0, 2, 4]


// Example 3: Finding if an element exists in the array or not and updating the array
// function updateVegetablesCollection(veggies, veggie) {
//   if (veggies.indexOf(veggie) === -1) {
//     veggies.push(veggie);
//     console.log(`New veggies collection is: ${veggies}`);
//   } else {
//     console.log(`${veggie} already exists in the veggies collection.`);
//   }
// }

// const veggies = ["potato", "tomato", "chillies", "green-pepper"];

// updateVegetablesCollection(veggies, "spinach");
// // New veggies collection is: potato,tomato,chillies,green-pepper,spinach
// updateVegetablesCollection(veggies, "spinach");
// // spinach already exists in the veggies collection.

// Example 4: Calling indexOf() on non-array objects
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
};
console.log(Array.prototype.indexOf.call(arrayLike, 2));
// 0
console.log(Array.prototype.indexOf.call(arrayLike, 5));
// -1
