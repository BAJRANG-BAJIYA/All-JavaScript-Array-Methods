// Example 1:
// const numbers = [10, 20, 30];
// let number = numbers.shift();
// console.log({ number });
// console.log({ numbers });
// console.log({ length: numbers.length });

// Output:
// { number: 10 }
// { numbers: [ 20, 30 ] }
// { length: 2 }

// Example 2:
// const numbers = [10, 20, 30];
// let number;
// while ((number = numbers.shift()) != undefined) {
//   console.log(number);
// }
// output:
// 10
// 20
// 30

// Example 3: Using the JavaScript array shift() with array-like object
// let greetings = {
//   0: 'Hi',
//   1: 'Hello',
//   2: 'Howdy',
//   length: 3,
//   removeFirst() {
//     return [].shift.call(this);
//   },
// };

// const greeting = greetings.removeFirst();

// console.log(greeting);
// console.log(greetings);

// Output:
// Hi
// {
//   '0': 'Hello',
//   '1': 'Howdy',
//   length: 2,
//   removeFirst: [Function: removeFirst]
// }

// Example 4:

// const myFish = ["angel", "clown", "mandarin", "surgeon"];

// console.log("myFish before:", JSON.stringify(myFish));

// // myFish before: ['angel', 'clown', 'mandarin', 'surgeon']
// const shifted = myFish.shift();

// console.log("myFish after:", myFish);
// // myFish after: ['clown', 'mandarin', 'surgeon']

// console.log("Removed this element:", shifted);
// // Removed this element: angel

// Example 5: Calling shift() on non-array objects
// const arrayLike = {
//   length: 3,
//   unrelated: "foo",
//   2: 4,
// };
// console.log(Array.prototype.shift.call(arrayLike));

// // undefined, because it is an empty slot

// console.log(arrayLike);

// // { '1': 4, length: 2, unrelated: 'foo' }

// const plainObj = {};
// // There's no length property, so the length is 0
// Array.prototype.shift.call(plainObj);
// console.log(plainObj);
// // { length: 0 }

