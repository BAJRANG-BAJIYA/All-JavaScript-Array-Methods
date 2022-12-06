// Example 1:
// let numbers = [1, 2, 3, 4, 5];

// console.log(numbers.find(e => e % 2 == 0));//2
// Examplw 2: Suppose that we have a list of customer objects with name and credit properties as follows

// let customers = [{
//     name: 'ABC Inc',
//     credit: 100
// }, {
//     name: 'ACME Corp',
//     credit: 200
// }, {
//     name: 'IoT AG',
//     credit: 300
// }];
// console.log(customers.find(c => c.credit > 100));

// Output: { name: 'ACME Corp', credit: 200 }

// Example 3:

// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find(element => element > 10);

// console.log(found);
// // expected output: 12

// Example 4:Find an object in an array by one of its properties

// const inventory = [
//   { name: "apples", quantity: 2 },
//   { name: "bananas", quantity: 0 },
//   { name: "cherries", quantity: 5 },
// ];

// function isCherries(fruit) {
//   return fruit.name === "cherries";
// }

// console.log(inventory.find(isCherries));
// // { name: 'cherries', quantity: 5 }
// Example 5:Using arrow function and destructuring
// const inventory = [
//   { name: "apples", quantity: 2 },
//   { name: "bananas", quantity: 0 },
//   { name: "cherries", quantity: 5 },
// ];

// const result = inventory.find(({ name }) => name === "cherries");

// console.log(result); // { name: 'cherries', quantity: 5 }

// Example 6: Find a prime number in an array
function isPrime(element, index, array) {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5

