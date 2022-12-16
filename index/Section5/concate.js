// Example 1:  The following code concatenates two arrays:

// const letters = ["a", "b", "c"];
// const numbers = [1, 2, 3];

// const alphaNumeric = letters.concat(numbers);
// console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]

// Example 2: The following code concatenates three arrays:

// const num1 = [1, 2, 3];
// const num2 = [4, 5, 6];
// const num3 = [7, 8, 9];

// const numbers = num1.concat(num2, num3);

// console.log(numbers);
// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Example 3: The following code concatenates three values to an array:

const letters = ["a", "b", "c"];

const alphaNumeric = letters.concat(1, [2, 3]);

console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]

// Example 4: Concatenating nested arrays

const num1 = [[1]];
const num2 = [2, [3]];

const numbers = num1.concat(num2);

console.log(numbers);
// results in [[1], 2, [3]]

// modify the first element of num1
num1[0].push(4);

console.log(numbers);
// results in [[1, 4], 2, [3]]

// Example 5: concat does not treat all array-like objects as arrays by default — only if Symbol.isConcatSpreadable is set to a truthy value (e.g. true).

const obj1 = { 0: 1, 1: 2, 2: 3, length: 3 };
const obj2 = { 0: 1, 1: 2, 2: 3, length: 3, [Symbol.isConcatSpreadable]: true };
console.log([0].concat(obj1, obj2));
// [ 0, { '0': 1, '1': 2, '2': 3, length: 3 }, 1, 2, 3 ]


// Example 6: If any of the source arrays is sparse, the resulting array will also be sparse:
 console.log([1, , 3].concat([4, 5])); // [1, empty, 3, 4, 5]
console.log([1, 2].concat([3, , 5])); // [1, 2, 3, empty, 5]

// Example 7: Calling concat() on non-array objects

console.log(Array.prototype.concat.call({}, 1, 2, 3)); // [{}, 1, 2, 3]
console.log(Array.prototype.concat.call(1, 2, 3)); // [ [Number: 1], 2, 3 ]
const arrayLike = { [Symbol.isConcatSpreadable]: true, length: 2, 0: 1, 1: 2 };
console.log(Array.prototype.concat.call(arrayLike, 3, 4)); // [1, 2, 3, 4]

// Example 8: The concat() method allows you to merge more than two arrays as shown in the following

let upper  = ['A','B','C'];
let lower  = ['a','b','c'];
let digits = [1,2,3];
let alphanumerics = upper.concat(lower, digits);

Output: ['A', 'B', 'C', 'a',  'b', 'c', 1,   2,  3]
